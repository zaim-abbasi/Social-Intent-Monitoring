import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Tab } from '@headlessui/react';
import ResourceCard from './ResourceCard';
import { allResources } from './data/resources';

const categories = ['All', 'Guides', 'Tutorials', 'Case Studies', 'Webinars'];

const ResourcesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getResourcesByCategory = (category) => {
    if (category === 'All') {
      return [
        ...allResources.guides,
        ...allResources.tutorials,
        ...allResources.casestudies,
        ...allResources.webinars
      ].slice(0, 6);
    }
    const key = category.toLowerCase().replace(' ', '');
    return allResources[key] || [];
  };

  return (
    <section id="resources" className="py-24">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Resources & Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our collection of guides, tutorials, and success stories to help you get the most out of our platform.
          </p>
        </motion.div>

        <Tab.Group onChange={setSelectedCategory}>
          <Tab.List className="flex space-x-2 rounded-xl bg-white p-2 mb-12 shadow-lg max-w-2xl mx-auto">
            {categories.map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  `w-full rounded-lg py-3 text-sm font-medium leading-5 transition-all duration-300
                  ${
                    selected
                      ? 'bg-black text-white shadow-lg'
                      : 'text-gray-600 hover:bg-black/5 hover:text-black'
                  }`
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>

          <Tab.Panels>
            {categories.map((category, idx) => (
              <Tab.Panel key={idx} className="focus:outline-none">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {getResourcesByCategory(category).map((resource, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <ResourceCard {...resource} />
                    </motion.div>
                  ))}
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-black rounded-xl hover:bg-black/90 transition-all duration-300"
          >
            View All Resources
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ResourcesSection;