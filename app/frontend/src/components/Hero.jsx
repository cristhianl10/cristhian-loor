import { motion } from 'framer-motion';
import { ArrowDownRight, Github, Linkedin } from 'lucide-react';
import { getGitHubUrl } from '../utils/links';

const reveal = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

export const Hero = ({ data, contact }) => (
  <section className="hero" id="top" aria-labelledby="hero-title">
    <div className="hero-backdrop" aria-hidden="true" />
    <motion.div className="hero-inner" initial="hidden" animate="visible" transition={{ staggerChildren: 0.11, delayChildren: 0.12 }}>
      <motion.p className="hero-location" variants={reveal}>{data.location}</motion.p>
      <motion.h1 id="hero-title" variants={reveal}>{data.name}</motion.h1>
      <motion.p className="hero-role" variants={reveal}>{data.role}</motion.p>
      <motion.p className="hero-focus" variants={reveal}>{data.focus}</motion.p>
      <motion.p className="hero-statement" variants={reveal}>{data.statement}</motion.p>
      <motion.div className="hero-actions" variants={reveal}>
        <a className="button button-primary" href="#projects">View projects <ArrowDownRight size={18} /></a>
        <a className="button button-secondary" href={`mailto:${contact.email}`}>Contact me</a>
      </motion.div>
      <motion.div className="hero-social" variants={reveal} aria-label="Social profiles">
        <a href={getGitHubUrl(contact.github)} target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
        <a href={contact.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
      </motion.div>
    </motion.div>
    <div className="hero-index" aria-hidden="true"><span>Software</span><span>Engineering</span><span>Product thinking</span></div>
  </section>
);
