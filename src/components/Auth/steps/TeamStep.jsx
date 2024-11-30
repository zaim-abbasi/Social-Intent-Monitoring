import React from 'react';
import { motion } from 'framer-motion';
import FormInput from '../components/FormInput';
import TeamMemberInput from '../components/TeamMemberInput';

const TeamStep = ({ formData, updateFormData }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="h-[420px] flex flex-col"
    >
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900">Team Setup</h3>
        <p className="text-gray-600 mt-2">Set up your team workspace</p>
      </div>

      <div className="flex-1 space-y-6">
        <FormInput
          label="Team/Company Name"
          name="teamName"
          type="text"
          placeholder="Enter your team or company name"
          value={formData.teamName}
          onChange={(e) => updateFormData({ teamName: e.target.value })}
        />

        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700">
            Team Members
          </label>
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
    </motion.div>
  );
};

export default TeamStep;