import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Tab } from '@headlessui/react';
import ResourceCard from './ResourceCard';

const resources = [
  {
    title: 'Maximizing Social Media ROI',
    description: 'Learn how to measure and improve your social media return on investment.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    category: 'Guide',
    readTime: 15
  },
  {
    title: 'Social Intent Monitoring 101',
    description: 'A beginners guide to understanding and leveraging social intent.',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a',
    category: 'Tutorial',
    readTime: 10
  },
  {
    title: 'Case Study: Leading Brand Success',
    description: 'How a leading brand increased leads by 300% using our platform.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692',
    category: 'Case Study',
    readTime: 8
  },
  {
    title: 'Social Intent Webinar Series',
    description: 'Join our experts for an in-depth look at social intent monitoring strategies.',
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7',
    category: 'Webinar',
    readTime: 45
  }
];

const categories = ['All', 'Guides', 'Tutorials', 'Case Studies', 'Webinars'];

const ResourcesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredResources = selectedCategory === 0
    ? resources
    : resources.filter(resource => 
        resource.category.toLowerCase() === categories[selectedCategory].toLowerCase().slice(0, -1)
      );

  return (
    <section id="resources" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Resources & Insights</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our collection of guides, tutorials, and success stories.
          </p>
        </motion.div>

        <Tab.Group onChange={setSelectedCategory}>
          <Tab.List className="flex space-x-2 rounded-xl bg-gray-100 p-1 mb-12">
            {categories.map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  `w-full rounded-lg py-2.5 text-sm font-medium leading-5 transition-colors
                  ${
                    selected
                      ? 'bg-white text-primary shadow'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-primary'
                  }`
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>

          <Tab.Panels>
            <Tab.Panel>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredResources.map((resource, index) => (
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
          </Tab.Panels>
        </Tab.Group>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-secondary transition-colors">
            View All Resources
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ResourcesSection;