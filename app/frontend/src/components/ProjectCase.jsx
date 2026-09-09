import { Check, ExternalLink, Trophy } from 'lucide-react';

function EtiquetasProyecto({ items, etiqueta }) {
  return <ul className="etiquetas-proyecto" aria-label={etiqueta}>{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

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

function EnlaceProyecto({ href, etiqueta, variante, deshabilitado, textoDeshabilitado }) {
  if (deshabilitado) {
    return (
      <span className={`boton-proyecto boton-proyecto-${variante} boton-deshabilitado`} aria-disabled="true" title={textoDeshabilitado}>
        <ExternalLink aria-hidden="true" size={15} />
        {etiqueta}
      </span>
    );
  }
  if (!href) return null;
  return (
    <a className={`boton-proyecto boton-proyecto-${variante}`} href={href} target="_blank" rel="noopener noreferrer">
      <ExternalLink aria-hidden="true" size={15} />
      {etiqueta}
    </a>
  );
}

function MetadatosProyecto({ proyecto, interfaz }) {
  if (!proyecto.roles) return null;

  return (
    <div className="proyecto-meta">
      {proyecto.roles && (
        <div className="proyecto-meta-grupo">
          <h4>{interfaz.rolesImplementados}</h4>
          <ul>{proyecto.roles.map((rol) => <li key={rol}>{rol}</li>)}</ul>
        </div>
      )}
    </div>
  );
}

function ProjectCase({ proyecto, interfaz }) {
  const tieneEnlaces = proyecto.enlaces && Object.keys(proyecto.enlaces).length > 0;

  return (
    <article className={`proyecto-activo proyecto-${proyecto.id}`} data-foco>
      <header className="proyecto-cabecera">
        <div className="proyecto-identidad">
          <span className="proyecto-indice" aria-hidden="true">{proyecto.indice}</span>
          {proyecto.reconocimiento && <p className="proyecto-reconocimiento"><Trophy aria-hidden="true" size={15} />{proyecto.reconocimiento}</p>}
        </div>
        <h3>{proyecto.nombre}</h3>
        <p className="proyecto-tipo">{proyecto.tipo}</p>
      </header>

      <div className="proyecto-historia">
        <div className="proyecto-resumen">
          {proyecto.contexto && <p className="proyecto-contexto">{proyecto.contexto}</p>}
          <p>{proyecto.descripcion}</p>
          <EtiquetasProyecto items={proyecto.tecnologias} etiqueta={interfaz.tecnologiasProyecto} />
          <MetadatosProyecto proyecto={proyecto} interfaz={interfaz} />
        </div>

        <div className="proyecto-arquitectura">
          <VisualProyecto visual={proyecto.visual} />
          {proyecto.explicacionVisual && <p>{proyecto.explicacionVisual}</p>}
          {proyecto.arquitectura && <p className="capas-texto">{interfaz.capas}: {proyecto.arquitectura.join(' · ')}</p>}
        </div>
      </div>

      <section className="proyecto-detalles" aria-labelledby={`detalles-${proyecto.id}`}>
        <h4 id={`detalles-${proyecto.id}`}>{interfaz.aspectosDestacados}</h4>
        <ul>{proyecto.destacados.map((destacado) => <li key={destacado}><Check aria-hidden="true" size={16} /><span>{destacado}</span></li>)}</ul>
      </section>

      {tieneEnlaces && (
        <div className="proyecto-enlaces" aria-label={interfaz.enlacesProyecto}>
          <EnlaceProyecto
            href={proyecto.enlaces?.demo}
            etiqueta={interfaz.verDemo}
            variante="primario"
            deshabilitado={!proyecto.enlaces?.demo}
            textoDeshabilitado={interfaz.demoProximamente}
          />
          <EnlaceProyecto
            href={proyecto.enlaces?.repositorio}
            etiqueta={interfaz.verCodigo}
            variante="secundario"
            deshabilitado={!proyecto.enlaces?.repositorio}
            textoDeshabilitado={interfaz.repositorioProximamente}
          />
          {proyecto.enlaces?.documentacion && (
            <EnlaceProyecto
              href={proyecto.enlaces.documentacion}
              etiqueta={interfaz.verDocumentacion}
              variante="secundario"
            />
          )}
        </div>
      )}

    </article>
  );
}

export default ProjectCase;
