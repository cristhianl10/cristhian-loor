import React from 'react';
import { motion } from 'framer-motion';

export const SkillsMarquee = ({ skills }) => {
  const duplicatedSkills = [...skills, ...skills];

  return (
    <div className="marquee-container">
      <motion.div
        className="marquee-content"
        animate={{
          x: [0, -1000],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicatedSkills.map((skill, index) => (
          <span key={index} className="marquee-item">
            {skill}
          </span>
        ))}
      </motion.div>
    </div>
  );
};
