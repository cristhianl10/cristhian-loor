import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ProjectCase from './ProjectCase';

function ProjectCarousel({ proyectos, interfaz }) {
  const [activo, setActivo] = useState(0);
  const selectores = useRef([]);
  const pista = useRef(null);

  const seleccionar = (indice) => {
    const normalizado = (indice + proyectos.length) % proyectos.length;
    setActivo(normalizado);
  };

  useEffect(() => {
    const contenedor = pista.current;
    const selector = selectores.current[activo];
    if (!contenedor || !selector || contenedor.scrollWidth <= contenedor.clientWidth) return;
    const distancia = selector.getBoundingClientRect().left - contenedor.getBoundingClientRect().left;
    contenedor.scrollTo({
      left: contenedor.scrollLeft + distancia - (contenedor.clientWidth - selector.clientWidth) / 2,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    });
  }, [activo]);

  const navegarConTeclado = (evento, indice) => {
    const teclas = { ArrowRight: indice + 1, ArrowLeft: indice - 1, Home: 0, End: proyectos.length - 1 };
    if (!(evento.key in teclas)) return;
    evento.preventDefault();
    const siguiente = (teclas[evento.key] + proyectos.length) % proyectos.length;
    seleccionar(siguiente);
    selectores.current[siguiente]?.focus({ preventScroll: true });
  };

  return (
    <div className="carrusel-proyectos" data-reveal="project">
      <div className="carrusel-controles">
        <p aria-live="polite" aria-atomic="true"><span>{String(activo + 1).padStart(2, '0')}</span> {interfaz.de} {String(proyectos.length).padStart(2, '0')}<span className="solo-lector"> — {proyectos[activo].nombre}</span></p>
        <div>
          <button type="button" onClick={() => seleccionar(activo - 1)} aria-label={interfaz.proyectoAnterior}><ArrowLeft aria-hidden="true" size={19} /></button>
          <button type="button" onClick={() => seleccionar(activo + 1)} aria-label={interfaz.proyectoSiguiente}><ArrowRight aria-hidden="true" size={19} /></button>
        </div>
      </div>

      <div ref={pista} className="carrusel-pista" role="tablist" aria-label={interfaz.seleccionarProyecto}>
        {proyectos.map((proyecto, indice) => {
          const distancia = indice - activo;
          return (
            <button
              ref={(elemento) => { selectores.current[indice] = elemento; }}
              type="button"
              role="tab"
              id={`selector-${proyecto.id}`}
              aria-selected={indice === activo}
              aria-controls="panel-proyecto"
              tabIndex={indice === activo ? 0 : -1}
              className={`selector-proyecto ${indice === activo ? 'selector-activo' : ''}`}
              style={{ '--distancia': distancia }}
              key={proyecto.id}
              onClick={() => seleccionar(indice)}
              onKeyDown={(evento) => navegarConTeclado(evento, indice)}
            >
              <span>{proyecto.indice}</span>
              <strong>{proyecto.nombre}</strong>
              <small>{proyecto.tipo}</small>
            </button>
          );
        })}
      </div>

      <div id="panel-proyecto" role="tabpanel" aria-labelledby={`selector-${proyectos[activo].id}`} tabIndex="0" key={proyectos[activo].id}>
        <ProjectCase proyecto={proyectos[activo]} interfaz={interfaz} />
      </div>
    </div>
  );
}

export default ProjectCarousel;
