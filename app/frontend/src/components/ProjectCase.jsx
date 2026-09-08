import { Check, Trophy } from 'lucide-react';

function EtiquetasProyecto({ items, etiqueta }) {
  return <ul className="etiquetas-proyecto" aria-label={etiqueta}>{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

function VisualProyecto({ visual }) {
  if (visual.tipo === 'capas') return <div className="visual-proyecto visual-capas" aria-hidden="true">{visual.etapas.map((etapa, indice) => <span key={etapa} style={{ '--nivel': indice }}>{etapa}</span>)}</div>;
  return <div className={`visual-proyecto visual-flujo visual-${visual.tipo}`} aria-hidden="true">{visual.etapas.map((etapa, indice) => <div className="flujo-fragmento" key={etapa}><span>{etapa}</span>{indice < visual.etapas.length - 1 && <i />}</div>)}</div>;
}

function ProjectCase({ proyecto, interfaz }) {
  return (
    <article className={`caso-proyecto caso-${proyecto.id}`}>
      <header className="proyecto-cabecera"><span className="proyecto-indice" aria-hidden="true">{proyecto.indice}</span><div>{proyecto.reconocimiento && <p className="proyecto-reconocimiento"><Trophy aria-hidden="true" size={15} />{proyecto.reconocimiento}</p>}<h3>{proyecto.nombre}</h3><p className="proyecto-tipo">{proyecto.tipo}</p></div></header>
      <div className="proyecto-cuerpo">
        <div className="proyecto-resumen">{proyecto.contexto && <p className="proyecto-contexto">{proyecto.contexto}</p>}<p>{proyecto.descripcion}</p><EtiquetasProyecto items={proyecto.tecnologias} etiqueta={interfaz.tecnologiasProyecto} /></div>
        <div className="proyecto-arquitectura"><VisualProyecto visual={proyecto.visual} />{proyecto.explicacionVisual && <p>{proyecto.explicacionVisual}</p>}{proyecto.arquitectura && <p className="capas-texto">{interfaz.capas}: {proyecto.arquitectura.join(' · ')}</p>}</div>
        <div className="proyecto-detalles"><h4>{interfaz.aspectosDestacados}</h4><ul>{proyecto.destacados.map((destacado) => <li key={destacado}><Check aria-hidden="true" size={16} /><span>{destacado}</span></li>)}</ul></div>
        {proyecto.roles && <div className="proyecto-alcance roles"><h4>{interfaz.rolesImplementados}</h4><p>{proyecto.roles.join(' · ')}</p></div>}
        {proyecto.alcanceActual && <div className="proyecto-alcance"><h4>{interfaz.alcanceActual}</h4><p>{proyecto.alcanceActual.join(' · ')}</p></div>}
      </div>
    </article>
  );
}

export default ProjectCase;
