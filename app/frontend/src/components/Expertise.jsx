import { motion } from 'framer-motion';

export const Expertise = ({ data }) => (
  <section className="section expertise" id="stack" aria-labelledby="stack-title">
    <div className="section-shell">
      <div className="section-heading"><h2 id="stack-title">Core stack</h2><p>A focused toolkit for building reliable applications, from domain logic to the interface.</p></div>
      <div className="expertise-list">
        {data.map((group, index) => (
          <motion.article className="expertise-row" key={group.area} initial={false} whileInView={{ y: [10, 0] }} viewport={{ once: true, amount: 0.4 }} transition={{ delay: index * 0.06 }}>
            <h3>{group.area}</h3>
            <div className="expertise-primary">{group.primary.map((item) => <span key={item}>{item}</span>)}</div>
            <p>{group.supporting.join(' · ')}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
