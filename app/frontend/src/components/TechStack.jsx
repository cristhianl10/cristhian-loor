import { useRef, useState } from 'react';
import { Database, Layers3, Server, Wrench, FlaskConical } from 'lucide-react';
import SectionHeading from './SectionHeading';

const iconosCategoria = {
  backend: Server,
  frontend: Layers3,
  datos: Database,
  arquitectura: Layers3,
  testing: FlaskConical,
  herramientas: Wrench,
};

function Etiquetas({ items, etiqueta, variante = '' }) {
  return <ul className={`etiquetas ${variante}`} aria-label={etiqueta}>{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

function TechStack({ contenido }) {
  const { tecnologias, proyectos, interfaz } = contenido;
  const [proyectoActivo, setProyectoActivo] = useState(0);
  const selectores = useRef([]);
  const proyecto = tecnologias.porProyecto[proyectoActivo];
  const caso = proyectos[proyectoActivo];

  const navegarConTeclado = (evento, indice) => {
    const teclas = { ArrowRight: indice + 1, ArrowLeft: indice - 1, Home: 0, End: tecnologias.porProyecto.length - 1 };
    if (!(evento.key in teclas)) return;
    evento.preventDefault();
    const siguiente = (teclas[evento.key] + tecnologias.porProyecto.length) % tecnologias.porProyecto.length;
    setProyectoActivo(siguiente);
    selectores.current[siguiente]?.focus();
  };

  return (
    <section className="seccion tecnologias" id="tecnologias" aria-labelledby="titulo-tecnologias">
      <SectionHeading id="titulo-tecnologias" etiqueta={tecnologias.etiqueta} titulo={tecnologias.titulo} descripcion={tecnologias.introduccion} />
      <div className="constelacion-tecnica" data-reveal="cluster">
        {tecnologias.categorias.map((categoria) => {
          const Icono = iconosCategoria[categoria.id];
          return (
            <article className={`categoria-tecnica categoria-${categoria.id}`} key={categoria.id} data-foco>
              <div className="categoria-titulo"><Icono aria-hidden="true" size={19} /><h3>{categoria.nombre}</h3></div>
              <Etiquetas items={categoria.items} etiqueta={interfaz.tecnologias} />
            </article>
          );
        })}
      </div>

      <div className="stack-contexto" data-reveal="panel" data-foco>
        <div className="stack-contexto-cabecera">
          <h3>{tecnologias.relacionTitulo}</h3>
          <div role="tablist" aria-label={interfaz.tecnologiasPorProyecto}>
            {tecnologias.porProyecto.map((item, indice) => (
              <button
                ref={(elemento) => { selectores.current[indice] = elemento; }}
                type="button"
                role="tab"
                id={`stack-selector-${indice}`}
                aria-controls="stack-panel"
                aria-selected={indice === proyectoActivo}
                tabIndex={indice === proyectoActivo ? 0 : -1}
                key={item.nombre}
                onClick={() => setProyectoActivo(indice)}
                onKeyDown={(evento) => navegarConTeclado(evento, indice)}
              >{item.nombre}</button>
            ))}
          </div>
        </div>
        <div className="stack-contexto-activo" id="stack-panel" role="tabpanel" aria-labelledby={`stack-selector-${proyectoActivo}`} key={proyecto.nombre}>
          <span>{interfaz.proyecto}</span><strong>{proyecto.nombre}</strong><Etiquetas items={proyecto.items} etiqueta={interfaz.tecnologiasProyecto} variante="etiquetas-compactas" />
          {caso?.visual && (
            <div className="stack-flujo" aria-hidden="true">
              {caso.visual.etapas.map((etapa, i) => (
                <span key={etapa}>{etapa}{i < caso.visual.etapas.length - 1 ? <i /> : null}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
