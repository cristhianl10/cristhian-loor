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
        fondo.current.style.setProperty('--puntero-x', `${(evento.clientX / window.innerWidth) * 100}%`);
        fondo.current.style.setProperty('--puntero-y', `${(evento.clientY / window.innerHeight) * 100}%`);
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
      <span className="aurora-capa aurora-capa-uno" />
      <span className="aurora-capa aurora-capa-dos" />
      <span className="aurora-capa aurora-capa-tres" />
      <span className="aurora-reflejo" />
    </div>
  );
}

export default AuroraBlur;
