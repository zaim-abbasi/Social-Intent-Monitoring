import React from 'react';
import { motion } from 'framer-motion';
import FormInput from '../components/FormInput';
import TeamMemberInput from '../components/TeamMemberInput';
import { FiUsers, FiBriefcase, FiGlobe } from 'react-icons/fi';

const TeamStep = ({ formData, updateFormData }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="h-full flex flex-col"
    >
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900">Team Setup</h3>
        <p className="text-gray-600 mt-2">Set up your team workspace</p>
      </div>

      <div className="space-y-6">
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

        <div className="bg-gray-50 rounded-lg p-6 mt-6">
          <h4 className="font-semibold text-gray-900 mb-4">Team Benefits</h4>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <FiUsers className="text-primary mt-1" />
              <div>
                <h5 className="font-medium">Collaborative Workspace</h5>
                <p className="text-sm text-gray-600">Work together seamlessly with your team members</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <FiBriefcase className="text-primary mt-1" />
              <div>
                <h5 className="font-medium">Shared Resources</h5>
                <p className="text-sm text-gray-600">Access and share monitoring data across your team</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <FiGlobe className="text-primary mt-1" />
              <div>
                <h5 className="font-medium">Global Insights</h5>
                <p className="text-sm text-gray-600">Collaborate on social monitoring across time zones</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamStep;