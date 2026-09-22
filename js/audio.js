/* Every sound is synthesised — no audio files to download or cache.
 * Kept deliberately short and soft: this gets played a few hundred times in a
 * sitting, and a shrill snap sound is how a toy ends up muted forever. */

const KEY = 'kidpuzzles.muted';
let ctx = null;
let muted = localStorage.getItem(KEY) === '1';

export const isMuted = () => muted;

export function setMuted(v) {
  muted = !!v;
  localStorage.setItem(KEY, muted ? '1' : '0');
}

/* Browsers only allow an AudioContext to start inside a user gesture, so this
 * is called from the first pointerdown rather than at load. */
export function wake() {
  if (muted) return;
  if (!ctx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    ctx = new AC();
  }
  if (ctx.state === 'suspended') ctx.resume();
}

function tone(freq, start, dur, { type = 'sine', gain = 0.16 } = {}) {
  if (muted || !ctx) return;
  const t0 = ctx.currentTime + start;
  const osc = ctx.createOscillator();
  const env = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t0);
  env.gain.setValueAtTime(0, t0);
  env.gain.linearRampToValueAtTime(gain, t0 + 0.012);
  env.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  osc.connect(env).connect(ctx.destination);
  osc.start(t0);
  osc.stop(t0 + dur + 0.02);
}

export const pick = () => tone(520, 0, 0.07, { type: 'triangle', gain: 0.1 });

export function snap() {
  tone(660, 0, 0.09, { type: 'triangle' });
  tone(990, 0.06, 0.12, { type: 'triangle', gain: 0.12 });
}

/* A little rising arpeggio for finishing a picture. */
export function win() {
  [523, 659, 784, 1047].forEach((f, i) => tone(f, i * 0.11, 0.3, { type: 'triangle', gain: 0.14 }));
  tone(1568, 0.46, 0.5, { type: 'sine', gain: 0.1 });
}
