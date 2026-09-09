import { ArrowUpRight, Mail, Linkedin, Github } from 'lucide-react';
function Footer({ contenido }) {
  const { pie, persona, navegacion, interfaz } = contenido;
  return (
    <footer className="pie-pagina">
      <p className="pie-marca" aria-hidden="true">{pie.marca}</p>
      <div className="pie-contenido">
        <div className="pie-cta" data-reveal="slice">
          <span className="mono">{pie.cta}</span>
          <p className="pie-titulo">{pie.descripcion}</p>
          <a className="boton-lima" href={`mailto:${persona.correo}`}><span>{pie.cta}</span><ArrowUpRight aria-hidden="true" size={19} /></a>
        </div>
        <div className="pie-inferior">
          <nav aria-label={interfaz.navegacionPie}>
            {navegacion.map((enlace) => <a key={enlace.destino} href={enlace.destino}>{enlace.etiqueta}</a>)}
            <a href="#contacto">{interfaz.menuContacto}</a>
          </nav>
          <div className="pie-social">
            <a href={persona.github} target="_blank" rel="noopener noreferrer" aria-label={`${contenido.presentacion.acciones.github}, ${interfaz.abrirNuevaPestana}`}><Github aria-hidden="true" size={17} /></a>
            <a href={persona.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${contenido.presentacion.acciones.linkedin}, ${interfaz.abrirNuevaPestana}`}><Linkedin aria-hidden="true" size={17} /></a>
            <a href={`mailto:${persona.correo}`} aria-label={persona.correo}><Mail aria-hidden="true" size={17} /></a>
          </div>
          <p>{pie.derechos}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
