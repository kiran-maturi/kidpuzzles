/* E Ink support.
 *
 * On a Boox-style screen the enemies are colour (there is none), animation
 * (smears) and ghosting (leftover grey). So this mode: drops to high-contrast
 * greys, disables transitions, makes drags move in small steps instead of
 * continuously, and offers a manual full-screen flash to clear ghosting —
 * the same trick the Talking Cat app uses.
 */

const KEY = 'kidpuzzles.eink';

/* Boox and most other E Ink Android tablets say so in the UA string. */
export function looksLikeEink() {
  return /onyx|boox|eink|e-ink|kobo|remarkable/i.test(navigator.userAgent);
}

export function getPref() {
  const saved = localStorage.getItem(KEY);
  if (saved === null) return looksLikeEink();
  return saved === '1';
}

export function setPref(on) {
  localStorage.setItem(KEY, on ? '1' : '0');
  apply(on);
}

export function apply(on) {
  document.body.classList.toggle('eink', !!on);
}

export const isOn = () => document.body.classList.contains('eink');

/* Quantise drag movement so a slow screen repaints a handful of times instead
 * of on every pointer sample. */
export const dragStep = () => (isOn() ? 10 : 0);

/* Flip the screen black then white to shake off ghosting. */
export function flash() {
  const el = document.createElement('div');
  el.className = 'eink-flash';
  document.body.appendChild(el);
  requestAnimationFrame(() => {
    el.style.background = '#000';
    setTimeout(() => { el.style.background = '#fff'; }, 120);
    setTimeout(() => el.remove(), 260);
  });
}
