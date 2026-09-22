/* Screens, the puzzle picker, settings and the celebration.
 *
 * Reading is optional everywhere it can be: every control carries an emoji or a
 * shape as well as a word, because a lot of the audience cannot read yet.
 */

import { SCENES, sceneById } from './scenes.js';
import * as game from './game.js';
import * as audio from './audio.js';
import * as eink from './eink.js';

const LEVELS = [
  { grid: 2, pieces: 4, ages: '3–4', emoji: '🐣' },
  { grid: 3, pieces: 9, ages: '5–6', emoji: '🐥' },
  { grid: 4, pieces: 16, ages: '7–8', emoji: '🐤' },
  { grid: 5, pieces: 25, ages: '9–10', emoji: '🦉' }
];

const STARS_KEY = 'kidpuzzles.stars';
const LEVEL_KEY = 'kidpuzzles.level';

const $ = (sel) => document.querySelector(sel);

const el = {
  body: document.body,
  home: $('#home'),
  play: $('#play'),
  levels: $('#levels'),
  picker: $('#picker'),
  stage: $('#stage'),
  board: $('#board'),
  guide: $('#guide'),
  tray: $('#tray'),
  layer: $('#layer'),
  count: $('#count'),
  title: $('#play-title'),
  win: $('#win'),
  winCard: $('#win-card'),
  btnBack: $('#btn-back'),
  btnHint: $('#btn-hint'),
  btnShuffle: $('#btn-shuffle'),
  btnSound: $('#btn-sound'),
  btnEink: $('#btn-eink'),
  btnFlash: $('#btn-flash'),
  winAgain: $('#win-again'),
  winNext: $('#win-next'),
  winHome: $('#win-home')
};

let level = Number(localStorage.getItem(LEVEL_KEY)) || 3;
if (!LEVELS.some((l) => l.grid === level)) level = 3;
let current = null;

/* ---- stars -------------------------------------------------------------- */

const readStars = () => {
  try {
    return JSON.parse(localStorage.getItem(STARS_KEY)) || {};
  } catch {
    return {};
  }
};

function addStar(sceneId, grid) {
  const stars = readStars();
  const key = `${sceneId}:${grid}`;
  stars[key] = (stars[key] || 0) + 1;
  localStorage.setItem(STARS_KEY, JSON.stringify(stars));
}

const starsFor = (sceneId) => {
  const stars = readStars();
  return LEVELS.reduce((sum, l) => sum + (stars[`${sceneId}:${l.grid}`] || 0), 0);
};

/* ---- home screen -------------------------------------------------------- */

function renderLevels() {
  el.levels.innerHTML = LEVELS.map(
    (l) => `<button class="level" data-grid="${l.grid}" role="radio"
        aria-checked="${l.grid === level}" aria-label="${l.pieces} pieces, ages ${l.ages}">
      <span class="level-emoji">${l.emoji}</span>
      <span class="level-pieces">${l.pieces}</span>
      <span class="level-ages">Ages ${l.ages}</span>
    </button>`
  ).join('');
}

function renderPicker() {
  el.picker.innerHTML = SCENES.map((s) => {
    const n = starsFor(s.id);
    const stars = n ? `<span class="card-stars">${'★'.repeat(Math.min(n, 3))}${n > 3 ? ` ${n}` : ''}</span>` : '';
    return `<button class="card" data-scene="${s.id}" aria-label="${s.name} puzzle">
      <span class="card-emoji">${s.emoji}</span>
      <span class="card-name">${s.name}</span>
      ${stars}
    </button>`;
  }).join('');
}

function showHome() {
  current = null;
  game.stopPuzzle();
  el.body.classList.remove('playing');
  el.win.hidden = true;
  renderPicker();
}

/* ---- play screen -------------------------------------------------------- */

function play(sceneId) {
  const scene = sceneById(sceneId);
  current = { scene, grid: level };
  el.body.classList.add('playing');
  el.win.hidden = true;
  el.title.textContent = `${scene.emoji} ${scene.name}`;
  // Little kids get the picture underneath as a guide; older ones start without.
  setHint(level <= 3);
  // The play screen is already visible at this point (adding .playing applies
  // synchronously), so the stage can be measured right away. Deliberately not
  // deferred to requestAnimationFrame: that never fires in a background tab,
  // and the puzzle would silently fail to build.
  game.startPuzzle(scene, level);
}

function setHint(on) {
  el.board.classList.toggle('hint', on);
  el.btnHint.setAttribute('aria-pressed', String(on));
}

function onProgress({ placed, total }) {
  el.count.textContent = `${placed}/${total}`;
}

function onWin({ scene, grid }) {
  addStar(scene.id, grid);
  el.win.hidden = false;
  placeWinCard();
  if (!eink.isOn()) confetti();
}

/* Drop the card into the tray, which is empty once the last piece is placed. */
function placeWinCard() {
  const t = game.trayRect();
  if (!t.w) return;
  // Centred in the tray and only as big as its contents.
  el.winCard.style.left = `${t.x + t.w / 2}px`;
  el.winCard.style.top = `${t.y + t.h / 2}px`;
  el.winCard.style.maxWidth = `${Math.max(180, t.w - 24)}px`;
}

function confetti() {
  const colors = ['#e8473c', '#ffb300', '#43a047', '#42a5f5', '#ab47bc', '#ffee58'];
  const frag = document.createDocumentFragment();
  for (let i = 0; i < 28; i++) {
    const bit = document.createElement('i');
    bit.className = 'confetti';
    bit.style.left = `${Math.random() * 100}%`;
    bit.style.background = colors[i % colors.length];
    bit.style.animationDelay = `${Math.random() * 0.6}s`;
    bit.style.transform = `rotate(${Math.random() * 360}deg)`;
    frag.appendChild(bit);
  }
  el.win.appendChild(frag);
  setTimeout(() => el.win.querySelectorAll('.confetti').forEach((c) => c.remove()), 2600);
}

function nextScene() {
  if (!current) return;
  const i = SCENES.findIndex((s) => s.id === current.scene.id);
  play(SCENES[(i + 1) % SCENES.length].id);
}

/* ---- settings ----------------------------------------------------------- */

function syncSound() {
  const on = !audio.isMuted();
  el.btnSound.textContent = on ? '🔊' : '🔇';
  el.btnSound.setAttribute('aria-pressed', String(on));
  el.btnSound.setAttribute('aria-label', on ? 'Sound on' : 'Sound off');
}

function syncEink() {
  const on = eink.isOn();
  el.btnEink.setAttribute('aria-pressed', String(on));
  el.btnEink.classList.toggle('on', on);
}

/* ---- wiring ------------------------------------------------------------- */

el.levels.addEventListener('click', (e) => {
  const btn = e.target.closest('.level');
  if (!btn) return;
  level = Number(btn.dataset.grid);
  localStorage.setItem(LEVEL_KEY, String(level));
  audio.wake();
  audio.pick();
  renderLevels();
});

el.picker.addEventListener('click', (e) => {
  const btn = e.target.closest('.card');
  if (!btn) return;
  audio.wake();
  audio.pick();
  play(btn.dataset.scene);
});

el.btnBack.addEventListener('click', showHome);
el.btnHint.addEventListener('click', () => setHint(!el.board.classList.contains('hint')));
el.btnShuffle.addEventListener('click', () => {
  audio.wake();
  audio.pick();
  game.scatter();
});
el.btnSound.addEventListener('click', () => {
  audio.setMuted(!audio.isMuted());
  syncSound();
  audio.wake();
  audio.pick();
});
el.btnEink.addEventListener('click', () => {
  eink.setPref(!eink.isOn());
  syncEink();
  game.layout();
});
el.btnFlash.addEventListener('click', () => eink.flash());

el.winAgain.addEventListener('click', () => current && play(current.scene.id));
el.winNext.addEventListener('click', nextScene);
el.winHome.addEventListener('click', showHome);

window.addEventListener('resize', () => {
  if (!el.win.hidden) setTimeout(placeWinCard, 140);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && el.body.classList.contains('playing')) showHome();
});

/* Boot. */
eink.apply(eink.getPref());
syncEink();
syncSound();
renderLevels();
renderPicker();
game.init(
  { stage: el.stage, board: el.board, guide: el.guide, tray: el.tray, layer: el.layer },
  { onProgress, onWin }
);

/* Offline support, but not while developing: a cache-first worker on localhost
 * serves yesterday's JavaScript and makes every edit look like it did nothing. */
const isLocal = ['localhost', '127.0.0.1', ''].includes(location.hostname);
if ('serviceWorker' in navigator && !isLocal) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}
