import React from 'react';
import { motion } from 'framer-motion';
import FormInput from '../components/FormInput';
import TeamMemberInput from '../components/TeamMemberInput';
import { FiUsers, FiBriefcase } from 'react-icons/fi';

const TeamStep = ({ formData, updateFormData }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="h-full flex flex-col"
    >
      <div className="text-center mb-8">
        <h3 className="text-3xl font-display font-bold text-black mb-3">
          Team Setup
        </h3>
        <p className="text-gray-600 text-base font-medium">
          Set up your collaborative workspace
        </p>
      </div>

      <div className="space-y-8">
        <div className="space-y-4">
          <label className="block text-base font-semibold text-gray-800 mb-2 flex items-center">
            <FiBriefcase className="mr-2 text-primary" />
            Team/Company Name
          </label>
          <FormInput
            name="teamName"
            type="text"
            placeholder="Enter your team or company name"
            value={formData.teamName}
            onChange={(e) => updateFormData({ teamName: e.target.value })}
            className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:bg-white hover:border-primary/30 transition-all duration-300"
          />
        </div>

        <div className="space-y-4">
          <label className="block text-base font-semibold text-gray-800 mb-2 flex items-center">
            <FiUsers className="mr-2 text-primary" />
            Team Members
          </label>
          <div className="bg-gray-50/70 rounded-xl p-6 border-2 border-gray-100">
            <TeamMemberInput
              members={formData.teamMembers}
              onAdd={(email) => updateFormData({
                teamMembers: [...formData.teamMembers, email]
              })}
              onRemove={(index) => updateFormData({
                teamMembers: formData.teamMembers.filter((_, i) => i !== index)
              })}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamStep;