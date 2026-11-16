import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ChevronDown, Trophy } from './Icono';
import ProjectCase from './ProjectCase';

function EtiquetasProyecto({ items, etiqueta }) {
  return <ul className="etiquetas-proyecto" aria-label={etiqueta}>{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

function ProjectGrid({ proyectos, interfaz }) {
  const [activo, setActivo] = useState(null);
  const reducirMovimiento = useReducedMotion();

  const alternar = (id) => {
    setActivo((actual) => (actual === id ? null : id));
  };

  return (
    <div className="proyectos-reticula">
      {proyectos.map((proyecto) => {
        const abierto = activo === proyecto.id;
        return (
          <motion.article
            layout
            className={`proyecto-tarjeta${abierto ? ' proyecto-tarjeta-abierta' : ''}`}
            key={proyecto.id}
            data-foco
            transition={{ duration: reducirMovimiento ? 0 : 0.32, ease: [0.16, 1, 0.3, 1] }}
            whileHover={!abierto && !reducirMovimiento ? { y: -2 } : undefined}
          >
            <div className="proyecto-tarjeta-resumen">
              <div className="proyecto-tarjeta-identidad">
                <span className="proyecto-indice" aria-hidden="true">{proyecto.indice}</span>
                {proyecto.reconocimiento && (
                  <p className="proyecto-reconocimiento"><Trophy aria-hidden="true" size={15} />{proyecto.reconocimiento}</p>
                )}
              </div>
              <h4>{proyecto.nombre}</h4>
              <p className="proyecto-tipo">{proyecto.tipo}</p>
              <p className="proyecto-tarjeta-texto">{proyecto.resumen}</p>
              <div className="proyecto-tarjeta-pie">
                <EtiquetasProyecto items={proyecto.tecnologias} etiqueta={interfaz.tecnologiasProyecto} />
                <motion.button
                  className="proyecto-tarjeta-boton"
                  id={`boton-${proyecto.id}`}
                  type="button"
                  aria-expanded={abierto}
                  aria-controls={`detalle-${proyecto.id}`}
                  onClick={() => alternar(proyecto.id)}
                  whileTap={reducirMovimiento ? undefined : { scale: 0.98 }}
                  transition={{ duration: 0.16, ease: [0.4, 0, 0.2, 1] }}
                >
                  <span>{abierto ? interfaz.cerrarProyecto : interfaz.verProyecto}</span>
                  <ChevronDown aria-hidden="true" size={17} />
                </motion.button>
              </div>
            </div>
            <AnimatePresence initial={false}>
              {abierto && (
                <motion.div
                  className="proyecto-tarjeta-detalle"
                  id={`detalle-${proyecto.id}`}
                  key={proyecto.id}
                  initial={reducirMovimiento ? false : { opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reducirMovimiento ? { opacity: 0 } : { opacity: 0, y: -6 }}
                  transition={{ duration: reducirMovimiento ? 0 : 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  <ProjectCase proyecto={proyecto} interfaz={interfaz} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.article>
        );
      })}
    </div>
  );
}

export default ProjectGrid;
