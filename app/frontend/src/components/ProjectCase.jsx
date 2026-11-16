import { Check } from './Icono';

function VisualProyecto({ visual }) {
  if (visual.tipo === 'capas') {
    return <div className="visual-proyecto visual-capas" aria-hidden="true">{visual.etapas.map((etapa) => <span key={etapa}>{etapa}</span>)}</div>;
  }

  return (
    <div className={`visual-proyecto visual-flujo visual-${visual.tipo}`} aria-hidden="true">
      {visual.etapas.map((etapa, indice) => (
        <div className="flujo-fragmento" key={etapa}>
          <span>{etapa}</span>
          {indice < visual.etapas.length - 1 && <i />}
        </div>
      ))}
    </div>
  );
}

function MetadatosProyecto({ proyecto, interfaz }) {
  if (!proyecto.roles) return null;

  return (
    <div className="proyecto-meta">
      <div className="proyecto-meta-grupo">
        <h5>{interfaz.rolesImplementados}</h5>
        <ul>{proyecto.roles.map((rol) => <li key={rol}>{rol}</li>)}</ul>
      </div>
    </div>
  );
}

function ProjectCase({ proyecto, interfaz }) {
  return (
    <div className="proyecto-caso">
      <div className="proyecto-caso-texto">
        {proyecto.contexto && <p className="proyecto-contexto">{proyecto.contexto}</p>}
        <p className="proyecto-descripcion">{proyecto.descripcion}</p>
        <MetadatosProyecto proyecto={proyecto} interfaz={interfaz} />
      </div>

      <div className="proyecto-arquitectura">
        <VisualProyecto visual={proyecto.visual} />
        {proyecto.explicacionVisual && <p>{proyecto.explicacionVisual}</p>}
        {proyecto.arquitectura && <p className="capas-texto">{interfaz.capas}: {proyecto.arquitectura.join(' · ')}</p>}
      </div>

      <section className="proyecto-detalles" aria-labelledby={`detalles-${proyecto.id}`}>
        <h5 id={`detalles-${proyecto.id}`}>{interfaz.aspectosDestacados}</h5>
        <ul>{proyecto.destacados.map((destacado) => <li key={destacado}><Check aria-hidden="true" size={16} /><span>{destacado}</span></li>)}</ul>
      </section>

      <div className="proyecto-enlaces" aria-label={interfaz.enlacesProyecto}>
        {proyecto.enlaces?.demo ? <a className="boton boton-principal" href={proyecto.enlaces.demo} target="_blank" rel="noopener noreferrer">{interfaz.verDemo}</a> : <span className="proyecto-demo-pendiente" aria-label={interfaz.demoProximamente}>{interfaz.demoProximamente}</span>}
        {proyecto.enlaces?.api && <a className="boton boton-secundario" href={proyecto.enlaces.api} target="_blank" rel="noopener noreferrer">{interfaz.verApi}</a>}
        {proyecto.enlaces?.repositorio && <a className="boton boton-secundario" href={proyecto.enlaces.repositorio} target="_blank" rel="noopener noreferrer">{interfaz.verCodigo}</a>}
        {proyecto.enlaces?.documentacion && <a className="boton boton-secundario proyecto-documentacion" href={proyecto.enlaces.documentacion} target="_blank" rel="noopener noreferrer">{interfaz.verDocumentacion}</a>}
      </div>
    </div>
  );
}

export default ProjectCase;
