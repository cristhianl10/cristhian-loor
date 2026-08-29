import { ArrowUpRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { getGitHubUrl } from '../utils/links';

export const Contact = ({ data, cvUrl }) => (
  <footer className="contact" id="contact">
    <div className="section-shell contact-layout">
      <div><p className="contact-intro">Let’s build thoughtful software.</p><h2>Open to internships,<br />projects, and opportunities.</h2></div>
      <div className="contact-actions">
        <a className="contact-email" href={`mailto:${data.email}`}>{data.email}<ArrowUpRight size={20} /></a>
        <div className="contact-links">
          <a href={data.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
          <a href={getGitHubUrl(data.github)} target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
          <a href={cvUrl} download="CV-Cristhian-Loor.pdf"><Download size={18} /> Download CV</a>
        </div>
      </div>
    </div>
    <div className="section-shell footer-line"><p>© {new Date().getFullYear()} Cristhian Loor</p><p><Mail size={15} /> Guayaquil, Ecuador</p></div>
  </footer>
);
