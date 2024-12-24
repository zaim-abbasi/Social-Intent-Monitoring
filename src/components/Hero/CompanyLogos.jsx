import React from 'react';
import { motion } from 'framer-motion';

const companies = [
  {
    name: 'Salesforce',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg',
    width: 120
  },
  {
    name: 'Shopify',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg',
    width: 110
  },
  {
    name: 'Stripe',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg',
    width: 90
  },
  {
    name: 'Slack',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg',
    width: 35
  },
  {
    name: 'Twilio',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Twilio-logo-red.svg',
    width: 100
  }
];

const CompanyLogos = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="mt-16 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="text-gray-600">
            <span className="font-semibold text-black">500+</span> companies already using Trend
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/70 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                style={{ width: company.width }}
                className="h-8 object-contain opacity-50 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
              />
            </motion.div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-8 mt-12">
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400 text-xl">
              {'★'.repeat(5)}
            </div>
            <span className="text-gray-600">
              <span className="font-semibold text-black">4.9/5</span> rating
            </span>
          </div>
          <div className="w-px h-8 bg-gray-200" />
          <div className="flex -space-x-4">
            {[...Array(4)].map((_, i) => (
              <img
                key={i}
                className="w-12 h-12 rounded-full border-4 border-white"
                src={`https://i.pravatar.cc/100?img=${i + 1}`}
                alt="User avatar"
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CompanyLogos;