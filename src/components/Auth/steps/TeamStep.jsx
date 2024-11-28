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
      className="space-y-4"
    >
      <h3 className="text-xl font-semibold mb-4">Team Setup</h3>
      <FormInput
        name="teamName"
        type="text"
        placeholder="Team Name"
        value={formData.teamName}
        onChange={(e) => updateFormData({ teamName: e.target.value })}
      />
      <TeamMemberInput
        members={formData.teamMembers}
        onAdd={(email) => updateFormData({
          teamMembers: [...formData.teamMembers, email]
        })}
        onRemove={(index) => updateFormData({
          teamMembers: formData.teamMembers.filter((_, i) => i !== index)
        })}
      />
    </motion.div>
  );
};

export default TeamStep;