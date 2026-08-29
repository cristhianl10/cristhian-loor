import { motion } from 'framer-motion';

export const About = ({ data }) => (
  <section className="about section" id="perfil">
    <div className="shell split">
      <motion.p className="section-id" initial={{ x: -40, opacity: .45 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, amount: .7 }} transition={{ duration: .65, ease: [0.16, 1, 0.3, 1] }}>perfil.ts</motion.p>
      <motion.div initial={{ x: 64, opacity: .45, filter: 'blur(5px)' }} whileInView={{ x: 0, opacity: 1, filter: 'blur(0px)' }} viewport={{ once: true, amount: .35 }} transition={{ duration: .8, ease: [0.16, 1, 0.3, 1] }}>
        <h2>{data.title}</h2>
        <p className="lead">{data.text}</p>
      </motion.div>
    </div>
  </section>
);
