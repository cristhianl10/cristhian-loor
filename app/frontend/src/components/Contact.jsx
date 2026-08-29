import { motion } from 'framer-motion';
import { ArrowUpRight, Download, Github, Linkedin } from 'lucide-react';

export const Contact = ({ data, cvUrl }) => (
  <footer className="contact" id="contacto">
    <motion.div className="shell contact-grid" initial={{ y: 56, opacity: .45 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: .45 }} transition={{ duration: .75, ease: [0.16, 1, 0.3, 1] }}>
      <div><h2>Hablemos.</h2><p className="contact-note">Disponible para prácticas, proyectos y oportunidades de desarrollo de software.</p></div>
      <motion.div className="contact-main" whileHover={{ x: 6 }} transition={{ duration: .22 }}>
        <a className="email" href={`mailto:${data.email}`}>{data.email}<ArrowUpRight /></a>
        <div className="contact-links">
          <a href={data.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
          <a href={data.github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
          <a href={cvUrl} download="CV-Cristhian-Loor.pdf"><Download size={18} /> Descargar CV</a>
        </div>
      </motion.div>
    </motion.div>
    <div className="shell footer-bottom"><span>© {new Date().getFullYear()} Cristhian Loor</span><span>Guayaquil, Ecuador</span></div>
  </footer>
);
