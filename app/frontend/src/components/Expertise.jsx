import { motion } from 'framer-motion';

export const Expertise = ({ data }) => (
  <section className="stack section" id="stack">
    <div className="shell">
      <div className="section-head"><p className="section-id">stack.config</p><h2>Stack técnico</h2></div>
      <div className="stack-table">
        {data.map((group, index) => (
          <motion.article key={group.area} initial={{ x: index % 2 ? 48 : -48, opacity: .5 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, amount: .55 }} transition={{ duration: .62, delay: index * .07, ease: [0.16, 1, 0.3, 1] }}>
            <span className="stack-index">[{String(index).padStart(2, '0')}]</span>
            <h3>{group.area}</h3>
            <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
