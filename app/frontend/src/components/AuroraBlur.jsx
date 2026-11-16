import { useEffect, useRef } from 'react';

function AuroraBlur() {
  const fondo = useRef(null);

  useEffect(() => {
    const reduceMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduceMovimiento.matches) return undefined;

    let frame;
    const seguirPuntero = (evento) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (!fondo.current) return;
        fondo.current.style.setProperty('--par-x', `${(evento.clientX / window.innerWidth - 0.5) * 28}px`);
        fondo.current.style.setProperty('--par-y', `${(evento.clientY / window.innerHeight - 0.28) * 18}px`);
      });
    };

    window.addEventListener('pointermove', seguirPuntero, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', seguirPuntero);
    };
  }, []);

  return (
    <div className="aurora" ref={fondo} aria-hidden="true">
      <span className="aurora-halo" />
      <span className="aurora-haz aurora-haz-uno" />
      <span className="aurora-haz aurora-haz-dos" />
      <span className="aurora-haz aurora-haz-tres" />
    </div>
  );
}

export default AuroraBlur;
