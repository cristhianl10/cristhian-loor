import { useEffect, useRef } from 'react';

function MotionController({ etiqueta }) {
  const progreso = useRef(null);

  useEffect(() => {
    const raiz = document.documentElement;
    const reducirMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elementos = [...document.querySelectorAll('[data-reveal]')];
    let observador;

    if (!reducirMovimiento && 'IntersectionObserver' in window) {
      raiz.classList.add('motion-ready');
      observador = new IntersectionObserver(
        (entradas) => {
          entradas.forEach((entrada) => {
            if (!entrada.isIntersecting) return;
            entrada.target.classList.add('reveal-visible');
            observador.unobserve(entrada.target);
          });
        },
        { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
      );
      elementos.forEach((elemento) => observador.observe(elemento));
      window.setTimeout(() => {
        elementos.forEach((elemento) => elemento.classList.add('reveal-visible'));
      }, 2600);
    }

    let frame;
    const actualizarProgreso = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const recorrido = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
        const valor = Math.min(Math.max(window.scrollY / recorrido, 0), 1);
        raiz.style.setProperty('--progreso-pagina', valor.toFixed(4));
        progreso.current?.setAttribute('aria-valuenow', String(Math.round(valor * 100)));
      });
    };

    actualizarProgreso();
    window.addEventListener('scroll', actualizarProgreso, { passive: true });
    window.addEventListener('resize', actualizarProgreso);

    return () => {
      observador?.disconnect();
      cancelAnimationFrame(frame);
      raiz.classList.remove('motion-ready');
      raiz.style.removeProperty('--progreso-pagina');
      window.removeEventListener('scroll', actualizarProgreso);
      window.removeEventListener('resize', actualizarProgreso);
    };
  }, []);

  return <div className="progreso-lectura" ref={progreso} role="progressbar" aria-label={etiqueta} aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><span /></div>;
}

export default MotionController;
