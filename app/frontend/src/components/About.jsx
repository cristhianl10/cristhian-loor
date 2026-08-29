import { motion } from 'framer-motion';

export const About = ({ data }) => (
  <section className="section about" id="about" aria-labelledby="about-title">
    <div className="section-shell about-layout">
      <motion.h2 id="about-title" initial={false} whileInView={{ y: [10, 0] }} viewport={{ once: true, amount: 0.5 }}>Software with structure<br />and purpose.</motion.h2>
      <motion.div className="about-copy" initial={false} whileInView={{ y: [10, 0] }} viewport={{ once: true, amount: 0.35 }}>
        {data.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        <p className="about-note">{data.note}</p>
      </motion.div>
    </div>
  </section>
);
