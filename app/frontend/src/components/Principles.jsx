import { motion } from 'framer-motion';

export const Principles = ({ data }) => (
  <section className="education section" aria-labelledby="formacion-title">
    <motion.div className="shell education-grid" initial="rest" whileInView="show" viewport={{ once: true, amount: .35 }} transition={{ staggerChildren: .12 }}>
      <motion.div variants={{ rest: { y: 44, opacity: .5 }, show: { y: 0, opacity: 1, transition: { duration: .65 } } }}><p className="section-id">formacion.json</p><h2 id="formacion-title">{data.degree}</h2><p>{data.institution}<br />{data.period}</p></motion.div>
      <motion.div className="achievement" variants={{ rest: { y: 44, opacity: .5 }, show: { y: 0, opacity: 1, transition: { duration: .65 } } }}><span>Reconocimiento</span><strong>{data.recognition}</strong></motion.div>
      <motion.div className="languages" variants={{ rest: { y: 44, opacity: .5 }, show: { y: 0, opacity: 1, transition: { duration: .65 } } }}><span>Idiomas</span><strong>{data.languages}</strong></motion.div>
    </motion.div>
  </section>
);
