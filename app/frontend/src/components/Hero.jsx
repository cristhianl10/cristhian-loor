import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from './ui/button';

export const Hero = ({ data }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const nameLines = data.name.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const lineVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      clipPath: 'inset(0 0 100% 0)'
    },
    visible: { 
      opacity: 1, 
      y: 0,
      clipPath: 'inset(0 0 0% 0)',
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const taglineVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.section 
      className="hero-section"
      style={{ opacity }}
    >
      <motion.div 
        className="hero-gradient-orb"
        style={{ y }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      <div className="hero-content">
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="badge-dot" />
          {data.location}
        </motion.div>

        <motion.div
          className="hero-title"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          {nameLines.map((line, index) => (
            <div key={index} className="title-line-wrapper">
              <motion.h1
                variants={lineVariants}
                className="title-line"
              >
                {line}
              </motion.h1>
            </div>
          ))}
        </motion.div>

        <motion.p
          className="hero-tagline"
          variants={taglineVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          {data.tagline}
        </motion.p>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <Button 
            className="cta-primary"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver proyectos
            <ArrowRight className="ml-2" size={20} />
          </Button>
          <Button 
            variant="outline" 
            className="cta-secondary"
            onClick={() => window.open(data.cvUrl, '_blank')}
          >
            <Download className="mr-2" size={20} />
            Descargar CV
          </Button>
        </motion.div>
      </div>

      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          className="scroll-line"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.section>
  );
};
