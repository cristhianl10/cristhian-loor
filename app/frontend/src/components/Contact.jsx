import { ArrowUpRight, Download, Github, Linkedin } from 'lucide-react';

export const Contact = ({ data, cvUrl }) => (
  <footer className="contact" id="contacto">
    <div className="shell contact-grid">
      <div><h2>Hablemos.</h2><p className="contact-note">Disponible para prácticas, proyectos y oportunidades de desarrollo de software.</p></div>
      <div className="contact-main">
        <a className="email" href={`mailto:${data.email}`}>{data.email}<ArrowUpRight /></a>
        <div className="contact-links">
          <a href={data.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
          <a href={data.github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
          <a href={cvUrl} download="CV-Cristhian-Loor.pdf"><Download size={18} /> Descargar CV</a>
        </div>
      </div>
    </div>
    <div className="shell footer-bottom"><span>© {new Date().getFullYear()} Cristhian Loor</span><span>Guayaquil, Ecuador</span></div>
  </footer>
);
