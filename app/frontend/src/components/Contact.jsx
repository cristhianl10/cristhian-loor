import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from './ui/button';

export const Contact = ({ data }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <footer className="contact-section" id="contact" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-header">
            <span className="section-number">04</span>
            <h2 className="section-title">Conectemos</h2>
          </div>

          <div className="contact-content">
            <motion.p 
              className="contact-text"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3 }}
            >
              Abierto a oportunidades de desarrollo backend en Guayaquil.
              <br />
              ¿Te gustaría trabajar juntos?
            </motion.p>

            <motion.div 
              className="contact-links"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5 }}
            >
              <motion.a
                href={data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={24} />
                <span>LinkedIn</span>
              </motion.a>

              <motion.a
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={24} />
                <span>GitHub</span>
              </motion.a>

              <motion.a
                href={`mailto:${data.email}`}
                className="contact-link"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={24} />
                <span>Email</span>
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Button className="cv-download-btn">
                <Download size={20} className="mr-2" />
                Descargar CV Completo
              </Button>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="footer-credits"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1 }}
        >
          <p>© 2025 Cristhian Loor Quimí. Hecho con café y Clean Architecture.</p>
        </motion.div>
      </div>
    </footer>
  );
};
