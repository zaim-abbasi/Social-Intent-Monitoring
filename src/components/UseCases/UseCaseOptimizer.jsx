import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const UseCaseOptimizer = memo(({ useCase, index, onClick }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onClick={() => onClick(useCase)}
      className="group relative bg-white p-8 rounded-2xl border border-black/5 hover:border-black/20 transition-all duration-300 hover:shadow-lg cursor-pointer will-change-transform"
    >
      <div className="flex items-center mb-6">
        <div className="bg-black/5 p-4 rounded-xl transform group-hover:scale-110 transition-transform duration-300">
          <useCase.icon className="w-6 h-6 text-black" />
        </div>
        <h3 className="text-2xl font-bold ml-6 text-black group-hover:text-black transition-colors duration-300">
          {useCase.title}
        </h3>
      </div>
      
      <p className="text-gray-600 leading-relaxed mb-6">
        {useCase.description}
      </p>
    </motion.div>
  );
});

UseCaseOptimizer.displayName = 'UseCaseOptimizer';
export default UseCaseOptimizer;