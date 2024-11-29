import React from 'react';
import { motion } from 'framer-motion';
import FormInput from '../components/FormInput';
import TeamMemberInput from '../components/TeamMemberInput';
import { UserGroupIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';

const TeamStep = ({ formData, updateFormData }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-8"
    >
      <div>
        <h3 className="text-xl font-semibold mb-2">Set Up Your Team</h3>
        <p className="text-gray-600">
          Create your team workspace and invite members to collaborate.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
          <BuildingOfficeIcon className="w-8 h-8 text-primary mb-3" />
          <h4 className="font-medium mb-2">Company Workspace</h4>
          <p className="text-sm text-gray-600">
            A shared space for your team to collaborate and track social insights.
          </p>
        </div>
        <div className="p-4 rounded-lg bg-secondary/5 border border-secondary/20">
          <UserGroupIcon className="w-8 h-8 text-secondary mb-3" />
          <h4 className="font-medium mb-2">Team Collaboration</h4>
          <p className="text-sm text-gray-600">
            Work together with your team members in real-time.
          </p>
        </div>
      </div>

      <FormInput
        label="Team/Company Name"
        name="teamName"
        type="text"
        placeholder="Enter your team or company name"
        value={formData.teamName}
        onChange={(e) => updateFormData({ teamName: e.target.value })}
      />

      <div className="space-y-4">
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

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-medium mb-2">What's Next?</h4>
        <ul className="text-sm text-gray-600 space-y-2">
          <li>• Set up your team workspace</li>
          <li>• Customize notification preferences</li>
          <li>• Start monitoring your selected platforms</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default TeamStep;