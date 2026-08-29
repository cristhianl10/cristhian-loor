import { motion } from 'framer-motion';

export const Principles = ({ data }) => (
  <section className="section principles" aria-labelledby="principles-title">
    <div className="section-shell principles-layout">
      <div className="section-heading principles-heading"><h2 id="principles-title">Beyond the stack</h2><p>The practices and adjacent disciplines that shape how I approach software.</p></div>
      <div className="principle-list">
        {data.map((item, index) => (
          <motion.article key={item.title} initial={false} whileInView={{ x: [8, 0] }} viewport={{ once: true, amount: 0.45 }} transition={{ delay: index * 0.07 }}>
            <h3>{item.title}</h3><p>{item.text}</p><span>{item.items.join(' · ')}</span>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
