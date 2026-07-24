import { useEffect, useRef } from 'react';
export function usePointerDynamics(reducedMotion: boolean) {
  const pointer = useRef({ x: 0, y: 0, vx: 0, vy: 0, dragging: false });
  useEffect(() => {
    if (reducedMotion) return;
    let lastX = innerWidth / 2,
      lastY = innerHeight / 2;
    const move = (e: PointerEvent) => {
      const x = (e.clientX / innerWidth) * 2 - 1,
        y = -((e.clientY / innerHeight) * 2 - 1);
      pointer.current.vx += (e.clientX - lastX) * 0.0005;
      pointer.current.vy += (e.clientY - lastY) * 0.0005;
      pointer.current.x = x;
      pointer.current.y = y;
      lastX = e.clientX;
      lastY = e.clientY;
    };
    const down = () => (pointer.current.dragging = true);
    const up = () => (pointer.current.dragging = false);
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerdown', down);
    window.addEventListener('pointerup', up);
    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerdown', down);
      window.removeEventListener('pointerup', up);
    };
  }, [reducedMotion]);
  return pointer;
}
