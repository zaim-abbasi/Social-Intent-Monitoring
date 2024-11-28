import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import UseCaseCard from './UseCaseCard';
import UseCaseModal from './UseCaseModal';
import { FiBriefcase, FiShoppingBag, FiUsers, FiGlobe } from 'react-icons/fi';

const useCases = [
  {
    icon: FiBriefcase,
    title: 'Marketing Agencies',
    description: 'Streamline social media monitoring and lead generation for multiple clients.',
    fullDescription: 'Help your clients identify and capture high-intent leads from social media conversations in real-time.',
    benefits: [
      'Manage multiple client accounts from a single dashboard',
      'Automated lead scoring and qualification',
      'Custom reporting and white-label options',
      'Integration with popular CRM platforms'
    ]
  },
  {
    icon: FiShoppingBag,
    title: 'E-commerce',
    description: 'Convert social discussions into sales opportunities.',
    fullDescription: 'Track product mentions and buying signals across social platforms to drive sales.',
    benefits: [
      'Identify purchase intent signals',
      'Track competitor mentions',
      'Monitor product sentiment',
      'Automated response to customer inquiries'
    ]
  },
  {
    icon: FiUsers,
    title: 'Sales Teams',
    description: 'Find and engage with qualified prospects at the right moment.',
    fullDescription: 'Empower your sales team with real-time insights about potential customers showing buying intent.',
    benefits: [
      'Real-time lead notifications',
      'Social selling insights',
      'Prospect engagement tracking',
      'Integration with sales tools'
    ]
  },
  {
    icon: FiGlobe,
    title: 'Enterprise',
    description: 'Scale your social monitoring across departments and regions.',
    fullDescription: 'Enterprise-grade social intent monitoring solution for large organizations.',
    benefits: [
      'Global social listening',
      'Multi-department collaboration',
      'Advanced analytics and reporting',
      'Custom integration options'
    ]
  }
];

const UseCasesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedUseCase, setSelectedUseCase] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUseCaseClick = (useCase) => {
    setSelectedUseCase(useCase);
    setIsModalOpen(true);
  };

  return (
    <section id="use-cases" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Who Can Benefit?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how different industries leverage our platform to drive growth
            and engagement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <UseCaseCard
                {...useCase}
                onClick={() => handleUseCaseClick(useCase)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <UseCaseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        useCase={selectedUseCase}
      />
    </section>
  );
};

export default UseCasesSection;