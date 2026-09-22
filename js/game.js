/* The puzzle board: laying out the frame and the tray, and deciding when a
 * dropped piece counts as "in place".
 *
 * Design choices that come from the 3-10 age range, not from convenience:
 *   - a piece dropped in the wrong spot stays where it was dropped. Snapping it
 *     back to the tray reads as punishment to a small child.
 *   - the snap radius is a third of a piece, so "close enough" is enough.
 *   - there is no timer, no score and no way to lose.
 *   - placed pieces stop responding to pointers, so a finished corner cannot be
 *     accidentally dismantled.
 */

import { cut, pieceMarkup, guideMarkup, SCENE_W } from './pieces.js';
import * as audio from './audio.js';
import * as eink from './eink.js';
import { attachDrag } from './drag.js';

const MARGIN = 10;
const GAP = 10;

let stage;
let board;
let guide;
let tray;
let layer;
let hooks = {};

const state = {
  scene: null,
  cols: 0,
  rows: 0,
  cutting: null,
  scale: 1,
  board: { x: 0, y: 0, size: 0 },
  tray: { x: 0, y: 0, w: 0, h: 0 },
  els: [],
  /* Unplaced pieces are remembered as a fraction of the stage, so a rotation
   * or resize keeps them roughly where the child left them. */
  frac: [],
  locked: [],
  placedCount: 0,
  uid: 0,
  z: 10,
  done: false
};

export function init(refs, callbacks = {}) {
  ({ stage, board, guide, tray, layer } = refs);
  hooks = callbacks;
  attachDrag(layer, dragApi);
  layer.addEventListener('keydown', onKey);
  let t;
  window.addEventListener('resize', () => {
    clearTimeout(t);
    t = setTimeout(() => layout(), 120);
  });
  window.addEventListener('orientationchange', () => setTimeout(() => layout(), 300));
}

export const isPlaying = () => !!state.scene;
/** Where the loose-piece tray currently sits, in stage coordinates. */
export const trayRect = () => ({ ...state.tray });

export const progress = () => ({ placed: state.placedCount, total: state.cutting ? state.cutting.pieces.length : 0 });

export function startPuzzle(scene, grid) {
  state.scene = scene;
  state.cols = grid;
  state.rows = grid;
  state.cutting = cut(scene.id, grid, grid);
  state.uid++;
  state.placedCount = 0;
  state.locked = [];
  state.frac = [];
  state.z = 10;
  state.done = false;
  board.classList.remove('solved');

  guide.innerHTML = guideMarkup(state.cutting, scene.svg);

  const total = state.cutting.pieces.length;
  layer.innerHTML = state.cutting.pieces
    .map(
      (p) => `<div class="piece" data-i="${p.i}" tabindex="0" role="button"
        aria-label="Piece ${p.i + 1} of ${total}">${pieceMarkup(p, scene.svg, state.uid)}</div>`
    )
    .join('');
  state.els = Array.from(layer.querySelectorAll('.piece'));

  // Layout first: scatter needs the tray rectangle and the piece sizes that
  // layout computes, or every piece lands somewhere meaningless.
  layout();
  scatter();
  hooks.onProgress?.(progress());
}

export function stopPuzzle() {
  state.scene = null;
  state.cutting = null;
  layer.innerHTML = '';
  guide.innerHTML = '';
  state.els = [];
}

/* ---- layout ------------------------------------------------------------- */

export function layout() {
  if (!state.scene) return;
  const r = stage.getBoundingClientRect();
  const w = r.width;
  const h = r.height;
  let b;
  let t;

  if (w / h >= 1.15) {
    // Landscape: frame on the left, loose pieces on the right.
    const size = Math.max(120, Math.min(h - 2 * MARGIN, (w - GAP - 2 * MARGIN) * 0.5));
    b = { x: MARGIN, y: (h - size) / 2, size };
    const tx = b.x + size + GAP;
    t = { x: tx, y: MARGIN, w: Math.max(80, w - tx - MARGIN), h: h - 2 * MARGIN };
  } else {
    // Portrait: frame on top, loose pieces underneath.
    const size = Math.max(120, Math.min(w - 2 * MARGIN, (h - GAP - 2 * MARGIN) * 0.55));
    b = { x: (w - size) / 2, y: MARGIN, size };
    const ty = b.y + size + GAP;
    t = { x: MARGIN, y: ty, w: w - 2 * MARGIN, h: Math.max(80, h - ty - MARGIN) };
  }

  state.board = b;
  state.tray = t;
  state.scale = b.size / SCENE_W;

  board.style.left = `${b.x}px`;
  board.style.top = `${b.y}px`;
  board.style.width = `${b.size}px`;
  board.style.height = `${b.size}px`;
  tray.style.left = `${t.x}px`;
  tray.style.top = `${t.y}px`;
  tray.style.width = `${t.w}px`;
  tray.style.height = `${t.h}px`;

  const sc = state.scale;
  state.cutting.pieces.forEach((p) => {
    const el = state.els[p.i];
    el.style.width = `${p.vb.w * sc}px`;
    el.style.height = `${p.vb.h * sc}px`;
    if (state.locked[p.i]) {
      const hm = home(p.i);
      setPos(p.i, hm.x, hm.y);
    } else {
      const f = state.frac[p.i] || { fx: 0.5, fy: 0.5 };
      setPos(p.i, f.fx * w, f.fy * h, { keepFrac: true });
    }
  });
}

function home(i) {
  const p = state.cutting.pieces[i];
  return {
    x: state.board.x + p.vb.x * state.scale,
    y: state.board.y + p.vb.y * state.scale
  };
}

function setPos(i, x, y, { keepFrac = false } = {}) {
  const el = state.els[i];
  const r = stage.getBoundingClientRect();
  // Keep a piece reachable: never let it wander mostly off-stage.
  const pw = el.offsetWidth;
  const ph = el.offsetHeight;
  const cx = Math.min(Math.max(x, -pw * 0.35), r.width - pw * 0.65);
  const cy = Math.min(Math.max(y, -ph * 0.35), r.height - ph * 0.65);
  el.style.transform = `translate(${cx}px, ${cy}px)`;
  el._x = cx;
  el._y = cy;
  if (!keepFrac && !state.locked[i]) {
    state.frac[i] = { fx: cx / r.width, fy: cy / r.height };
  }
}

/** Spread the unplaced pieces over the tray, shuffled so neighbours separate. */
export function scatter() {
  if (!state.scene) return;
  const r = stage.getBoundingClientRect();
  const loose = state.cutting.pieces.filter((p) => !state.locked[p.i]);
  if (!loose.length) return;

  // Lay out on a jittered grid sized to the tray's aspect ratio.
  const t = state.tray.w ? state.tray : { x: 0, y: r.height * 0.6, w: r.width, h: r.height * 0.4 };
  const n = loose.length;
  const aspect = t.w / Math.max(1, t.h);
  const cols = Math.max(1, Math.min(n, Math.round(Math.sqrt(n * aspect)) || 1));
  const rows = Math.ceil(n / cols);
  const cw = t.w / cols;
  const ch = t.h / rows;

  const order = loose.slice();
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }

  const clamp = (v, lo, hi) => Math.min(Math.max(v, lo), Math.max(lo, hi));

  order.forEach((p, k) => {
    const el = state.els[p.i];
    const pw = p.vb.w * state.scale || el.offsetWidth;
    const ph = p.vb.h * state.scale || el.offsetHeight;
    const cx = t.x + cw * (k % cols) + cw / 2 + (Math.random() - 0.5) * cw * 0.2;
    const cy = t.y + ch * Math.floor(k / cols) + ch / 2 + (Math.random() - 0.5) * ch * 0.2;
    // Pieces may overlap each other in a crowded tray — that is what a real
    // pile of pieces looks like — but none may hang off the tray edge.
    setPos(
      p.i,
      clamp(cx - pw / 2, t.x, t.x + t.w - pw),
      clamp(cy - ph / 2, t.y, t.y + t.h - ph)
    );
    el.style.zIndex = String(state.z++);
  });
}

/* ---- dragging ----------------------------------------------------------- */

const dragApi = {
  pieceIndex(target) {
    const el = target.closest ? target.closest('.piece') : null;
    if (!el) return -1;
    const i = Number(el.dataset.i);
    return state.locked[i] ? -1 : i;
  },
  step: () => eink.dragStep(),
  pos(i) {
    const el = state.els[i];
    return { x: el._x || 0, y: el._y || 0 };
  },
  move(i, x, y) {
    setPos(i, x, y);
  },
  pick(i) {
    audio.wake();
    audio.pick();
    const el = state.els[i];
    el.style.zIndex = String(state.z++);
    el.classList.add('dragging');
  },
  release(i) {
    state.els[i].classList.remove('dragging');
    tryPlace(i);
  }
};

function tryPlace(i) {
  const el = state.els[i];
  const hm = home(i);
  const dist = Math.hypot((el._x || 0) - hm.x, (el._y || 0) - hm.y);
  const cell = Math.min(state.cutting.cellW, state.cutting.cellH) * state.scale;
  const tol = Math.max(16, cell * 0.35);
  if (dist > tol) return false;

  state.locked[i] = true;
  state.placedCount++;
  el.classList.add('placed');
  el.classList.remove('dragging');
  el.setAttribute('aria-disabled', 'true');
  el.removeAttribute('tabindex');
  el.style.zIndex = '5';
  setPos(i, hm.x, hm.y);
  audio.snap();
  hooks.onProgress?.(progress());

  if (state.placedCount === state.cutting.pieces.length) finish();
  return true;
}

function finish() {
  state.done = true;
  board.classList.add('solved');
  setTimeout(() => {
    audio.win();
    hooks.onWin?.({ scene: state.scene, grid: state.cols });
  }, 260);
}

/* Keyboard play, so the game works on a laptop without a touchscreen and for
 * kids who cannot manage a sustained drag. */
function onKey(e) {
  const el = e.target.closest?.('.piece');
  if (!el) return;
  const i = Number(el.dataset.i);
  if (state.locked[i]) return;
  const stepBase = Math.max(8, Math.min(state.cutting.cellW, state.cutting.cellH) * state.scale * 0.2);
  const step = e.shiftKey ? stepBase * 3 : stepBase;
  const p = dragApi.pos(i);
  const moves = {
    ArrowLeft: [-step, 0], ArrowRight: [step, 0], ArrowUp: [0, -step], ArrowDown: [0, step]
  };
  if (moves[e.key]) {
    e.preventDefault();
    audio.wake();
    el.style.zIndex = String(state.z++);
    setPos(i, p.x + moves[e.key][0], p.y + moves[e.key][1]);
    tryPlace(i);
  } else if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    audio.wake();
    // Enter jumps the piece home — the keyboard equivalent of a good-enough drop.
    const hm = home(i);
    setPos(i, hm.x, hm.y);
    tryPlace(i);
  }
}
