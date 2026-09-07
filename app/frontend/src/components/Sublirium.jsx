import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles } from 'lucide-react';

export const Sublirium = ({ data }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section className="sublirium-section" id="sublirium" ref={ref}>
      <motion.div 
        className="sublirium-gradient-bg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
      
      <div className="section-container sublirium-container">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="section-header sublirium-header">
            <span className="section-number">03</span>
            <div>
              <h2 className="section-title sublirium-title">{data.title}</h2>
              <motion.p 
                className="sublirium-tagline"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Sparkles className="inline mr-2" size={20} />
                {data.tagline}
              </motion.p>
            </div>
          </div>

          <div className="sublirium-content">
            <motion.p 
              className="sublirium-description"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {data.description}
            </motion.p>

            <motion.div 
              className="sublirium-products"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.6 }}
            >
              {data.products.map((product, index) => (
                <motion.div
                  key={index}
                  className="product-badge"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05, x: 5 }}
                >
                  {product}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="sublirium-pattern"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.1 } : { opacity: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
      />
    </section>
  );
};
