import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';

function Contact({ contenido }) {
  const { contacto, persona, interfaz } = contenido;
  return (
    <section className="seccion contacto" id="contacto" aria-labelledby="titulo-contacto">
      <div className="contacto-intro" data-reveal="slice"><span className="mono">{contacto.etiqueta}</span><h2 id="titulo-contacto">{contacto.titulo}</h2><p>{contacto.descripcion}</p></div>
      <div className="contacto-enlaces" data-reveal="flow">
        <a className="contacto-correo" data-foco href={`mailto:${persona.correo}`}><Mail aria-hidden="true" size={18} />{persona.correo}<ArrowUpRight aria-hidden="true" size={17} /></a>
        <a data-foco href={persona.linkedin} target="_blank" rel="noreferrer" aria-label={`LinkedIn, ${interfaz.abrirNuevaPestana}`}><Linkedin aria-hidden="true" size={18} />LinkedIn<ArrowUpRight aria-hidden="true" size={17} /></a>
        <a data-foco href={persona.github} target="_blank" rel="noreferrer" aria-label={`GitHub, ${interfaz.abrirNuevaPestana}`}><Github aria-hidden="true" size={18} />GitHub<ArrowUpRight aria-hidden="true" size={17} /></a>
        <p data-foco><MapPin aria-hidden="true" size={18} /><span><small>{contacto.ubicacionEtiqueta}</small>{persona.ubicacion}</span></p>
      </div>
    </section>
  );
}

export default Contact;
