import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

const item = { hidden: { y: 14 }, visible: { y: 0 } };

export const Hero = ({ data, contact }) => (
  <section
    className="hero"
    id="inicio"
    onPointerMove={(event) => {
      const bounds = event.currentTarget.getBoundingClientRect();
      event.currentTarget.style.setProperty('--pointer-x', `${event.clientX - bounds.left}px`);
      event.currentTarget.style.setProperty('--pointer-y', `${event.clientY - bounds.top}px`);
    }}
  >
    <div className="hero-glow" aria-hidden="true" />
    <motion.div className="hero-shell" initial="hidden" animate="visible" transition={{ staggerChildren: 0.1 }}>
      <div className="hero-copy">
        <motion.p className="hero-label" variants={item}>{data.role}</motion.p>
        <motion.h1 variants={item}>{data.name}</motion.h1>
        <motion.p className="hero-specialty" variants={item}>{data.specialty}</motion.p>
        <motion.p className="hero-summary" variants={item}>{data.summary}</motion.p>
        <motion.div className="hero-actions" variants={item}>
          <a className="action primary" href="#proyectos">Ver proyectos <ArrowDownRight size={18} /></a>
          <a className="action text" href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={17} /></a>
        </motion.div>
      </div>
      <div className="hero-aside" aria-label="Perfil técnico">
        <p>perfil_tecnico</p>
        <dl>
          <div><dt>enfoque</dt><dd>&quot;Backend y APIs&quot;</dd></div>
          <div><dt>principios</dt><dd>[&quot;SOLID&quot;, &quot;Clean Architecture&quot;]</dd></div>
          <div><dt>ubicación</dt><dd>&quot;{data.location}&quot;</dd></div>
        </dl>
      </div>
    </motion.div>
    <div className="hero-ticker" aria-hidden="true"><span>java --version</span><strong>Spring Boot</strong><span>ng serve</span><strong>Angular</strong><span>dotnet run</span></div>
  </section>
);
