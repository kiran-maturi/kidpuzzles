/* Pointer dragging.
 *
 * Deliberately plain: one pointerdown on the piece layer, then pointermove and
 * pointerup on the window. Listening on the window (rather than capturing on
 * the piece) is what keeps a drag alive when a small, fast hand leaves the
 * element or runs off the edge of the screen mid-drag.
 *
 * Pieces hit-test on their painted shape, not their bounding box — see the
 * pointer-events rules in styles.css — so overlapping pieces in the tray pick
 * up the one actually under the finger.
 */

export function attachDrag(root, api) {
  let active = null;

  function onDown(e) {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    const i = api.pieceIndex(e.target);
    if (i < 0) return;
    const start = api.pos(i);
    active = {
      id: e.pointerId,
      i,
      px: e.clientX,
      py: e.clientY,
      ox: start.x,
      oy: start.y,
      moved: false
    };
    // Stops the page from scrolling or text-selecting under the finger.
    e.preventDefault();
    api.pick(i);
    window.addEventListener('pointermove', onMove, { passive: false });
    window.addEventListener('pointerup', onUp);
    window.addEventListener('pointercancel', onUp);
  }

  function onMove(e) {
    if (!active || e.pointerId !== active.id) return;
    e.preventDefault();
    let dx = e.clientX - active.px;
    let dy = e.clientY - active.py;
    const step = api.step();
    if (step > 0) {
      // E Ink: move in visible jumps so the screen repaints a few times, not
      // once per pointer sample.
      dx = Math.round(dx / step) * step;
      dy = Math.round(dy / step) * step;
    }
    if (Math.abs(dx) > 2 || Math.abs(dy) > 2) active.moved = true;
    api.move(active.i, active.ox + dx, active.oy + dy);
  }

  function onUp(e) {
    if (!active || (e.pointerId !== undefined && e.pointerId !== active.id)) return;
    const { i } = active;
    active = null;
    window.removeEventListener('pointermove', onMove);
    window.removeEventListener('pointerup', onUp);
    window.removeEventListener('pointercancel', onUp);
    api.release(i);
  }

  root.addEventListener('pointerdown', onDown);
}
