import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SkillsMarquee } from './SkillsMarquee';

export const About = ({ data }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="about-section" id="about" ref={ref}>
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="section-header" variants={itemVariants}>
            <span className="section-number">01</span>
            <h2 className="section-title">Sobre mí</h2>
          </motion.div>

          <motion.div className="about-content" variants={itemVariants}>
            <div className="about-grid">
              <div className="about-text">
                <p>{data.description}</p>
              </div>
              <div className="about-stack">
                <h3 className="stack-title">Stack Técnico</h3>
                <div className="stack-grid">
                  {data.stack.map((tech, index) => (
                    <motion.div
                      key={index}
                      className="stack-badge"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: 0.4 + index * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      <span className="badge-code">{tech}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <SkillsMarquee skills={data.stack} />
    </section>
  );
};
