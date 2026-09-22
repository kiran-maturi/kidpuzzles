/* Cutting a 400x400 scene into interlocking pieces.
 *
 * Each interior edge gets one knob, and the two pieces that share the edge draw
 * the *same* curve — one as a tab, one as a blank. That is what makes a piece
 * fit in exactly one place, which for a 3-year-old is a stronger hint than any
 * on-screen instruction.
 *
 * A piece is drawn as its own <svg> whose viewBox is that piece's window onto
 * the scene, so the full scene markup can be dropped into every piece verbatim
 * and clipped to the piece outline. No slicing of the artwork, no image files,
 * and the picture stays vector-crisp at any board size.
 */

export const SCENE_W = 400;
export const SCENE_H = 400;

/* Seeded RNG: the same puzzle at the same size always cuts identically, so a
 * window resize (or a reload mid-puzzle) does not reshuffle the shapes. */
function mulberry32(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function seedFrom(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/* One edge of a piece, as path commands appended after an initial M.
 * (x0,y0)->(x1,y1) is the straight run; `sign` is 0 for a flat outside border,
 * or +/-1 to bulge the knob along the edge normal. The control points sit
 * outside the knob's mouth, which is what gives the tab its pinched neck. */
function edge(x0, y0, x1, y1, sign, tab) {
  if (!sign) return `L${x1.toFixed(2)} ${y1.toFixed(2)}`;
  const dx = x1 - x0;
  const dy = y1 - y0;
  const len = Math.hypot(dx, dy);
  const ux = dx / len;
  const uy = dy / len;
  // Left normal of the travel direction, scaled to the knob height.
  const nx = (dy / len) * tab * sign;
  const ny = (-dx / len) * tab * sign;
  const at = (t, n) => [x0 + ux * len * t + nx * n, y0 + uy * len * t + ny * n];
  const p = (pt) => `${pt[0].toFixed(2)} ${pt[1].toFixed(2)}`;
  return [
    `L${p(at(0.38, 0))}`,
    `C${p(at(0.28, 0.62))} ${p(at(0.72, 0.62))} ${p(at(0.62, 0))}`,
    `L${p(at(1, 0))}`
  ].join('');
}

/**
 * Cut a scene into cols x rows pieces.
 * @returns {{cols,rows,cellW,cellH,tab,pad,pieces:Array}}
 */
export function cut(sceneId, cols, rows) {
  const rnd = mulberry32(seedFrom(`${sceneId}:${cols}x${rows}`));
  const cellW = SCENE_W / cols;
  const cellH = SCENE_H / rows;
  const tab = Math.min(cellW, cellH) * 0.22;
  // Room in each piece's viewBox for a knob plus its outline stroke.
  const pad = tab * 1.15 + 3;

  // vSign[r][c] = knob on the edge between (r,c) and (r,c+1), +1 bulges right.
  // hSign[r][c] = knob on the edge between (r,c) and (r+1,c), +1 bulges down.
  const vSign = [];
  const hSign = [];
  for (let r = 0; r < rows; r++) {
    vSign[r] = [];
    hSign[r] = [];
    for (let c = 0; c < cols; c++) {
      vSign[r][c] = rnd() < 0.5 ? -1 : 1;
      hSign[r][c] = rnd() < 0.5 ? -1 : 1;
    }
  }

  const pieces = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = c * cellW;
      const y = r * cellH;
      // Signs are negated on the two edges travelled "backwards", so that a
      // shared edge comes out as tab on one piece and blank on the other.
      const top = r === 0 ? 0 : -hSign[r - 1][c];
      const right = c === cols - 1 ? 0 : vSign[r][c];
      const bottom = r === rows - 1 ? 0 : hSign[r][c];
      const left = c === 0 ? 0 : -vSign[r][c - 1];

      const d = [
        `M${x.toFixed(2)} ${y.toFixed(2)}`,
        edge(x, y, x + cellW, y, top, tab),
        edge(x + cellW, y, x + cellW, y + cellH, right, tab),
        edge(x + cellW, y + cellH, x, y + cellH, bottom, tab),
        edge(x, y + cellH, x, y, left, tab),
        'Z'
      ].join('');

      pieces.push({
        i: pieces.length,
        row: r,
        col: c,
        d,
        // The piece's window onto the scene, padded so knobs are not cropped.
        vb: { x: x - pad, y: y - pad, w: cellW + pad * 2, h: cellH + pad * 2 }
      });
    }
  }
  return { cols, rows, cellW, cellH, tab, pad, pieces };
}

/** Markup for one piece: the whole scene, clipped to the piece outline. */
export function pieceMarkup(piece, sceneSvg, uid) {
  const clip = `clip-${uid}-${piece.i}`;
  const { x, y, w, h } = piece.vb;
  return `<svg class="piece-art" viewBox="${x.toFixed(2)} ${y.toFixed(2)} ${w.toFixed(2)} ${h.toFixed(2)}"
      xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
    <defs><clipPath id="${clip}"><path d="${piece.d}"/></clipPath></defs>
    <g clip-path="url(#${clip})">${sceneSvg}</g>
    <path class="piece-edge" d="${piece.d}"/>
  </svg>`;
}

/** Faint guide drawn inside the empty frame: the picture, plus piece outlines. */
export function guideMarkup(cutting, sceneSvg) {
  const outlines = cutting.pieces.map((p) => `<path d="${p.d}"/>`).join('');
  return `<svg class="guide-art" viewBox="0 0 ${SCENE_W} ${SCENE_H}"
      xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
    <g class="guide-picture">${sceneSvg}</g>
    <g class="guide-lines">${outlines}</g>
  </svg>`;
}
