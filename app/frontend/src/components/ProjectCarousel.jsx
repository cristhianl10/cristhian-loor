import { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ProjectCase from './ProjectCase';

function ProjectCarousel({ proyectos, interfaz }) {
  const [activo, setActivo] = useState(0);
  const selectores = useRef([]);
  const inicioArrastre = useRef(null);

  const seleccionar = (indice) => {
    const normalizado = (indice + proyectos.length) % proyectos.length;
    setActivo(normalizado);
  };

  const navegarConTeclado = (evento, indice) => {
    const teclas = { ArrowRight: indice + 1, ArrowLeft: indice - 1, Home: 0, End: proyectos.length - 1 };
    if (!(evento.key in teclas)) return;
    evento.preventDefault();
    const siguiente = (teclas[evento.key] + proyectos.length) % proyectos.length;
    seleccionar(siguiente);
    selectores.current[siguiente]?.focus();
  };

  const iniciarArrastre = (evento) => {
    inicioArrastre.current = evento.clientX;
  };

  const terminarArrastre = (evento) => {
    if (inicioArrastre.current === null) return;
    const distancia = evento.clientX - inicioArrastre.current;
    inicioArrastre.current = null;
    if (Math.abs(distancia) < 54) return;
    seleccionar(activo + (distancia < 0 ? 1 : -1));
  };

  return (
    <div className="carrusel-proyectos" data-reveal="project">
      <div className="carrusel-controles">
        <p aria-live="polite"><span>{String(activo + 1).padStart(2, '0')}</span> {interfaz.de} {String(proyectos.length).padStart(2, '0')}</p>
        <div>
          <button type="button" onClick={() => seleccionar(activo - 1)} aria-label={interfaz.proyectoAnterior}><ArrowLeft aria-hidden="true" size={19} /></button>
          <button type="button" onClick={() => seleccionar(activo + 1)} aria-label={interfaz.proyectoSiguiente}><ArrowRight aria-hidden="true" size={19} /></button>
        </div>
      </div>

      <div className="carrusel-pista" role="tablist" aria-label={interfaz.seleccionarProyecto} onPointerDown={iniciarArrastre} onPointerUp={terminarArrastre}>
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
