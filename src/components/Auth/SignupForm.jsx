import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { useMultiStepForm } from './hooks/useMultiStepForm';
import { useAuthForm } from './hooks/useAuthForm';
import BasicInfoStep from './steps/BasicInfoStep';
import KeywordStep from './steps/KeywordStep';
import PlatformStep from './steps/PlatformStep';
import TeamStep from './steps/TeamStep';

const SignupForm = ({ onClose }) => {
  const { step, formData, nextStep, prevStep, updateFormData } = useMultiStepForm({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    keywords: [],
    keywordIntent: '',
    platforms: [],
    teamName: '',
    teamMembers: [],
    logo: null
  });

  const { isSubmitting, handleSignup } = useAuthForm(onClose);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (step < 4) {
      nextStep();
      return;
    }
    await handleSignup(formData);
  };

  const renderStep = () => {
    const steps = {
      1: <BasicInfoStep key="basic-info" formData={formData} updateFormData={updateFormData} />,
      2: <KeywordStep key="keyword" formData={formData} updateFormData={updateFormData} />,
      3: <PlatformStep key="platform" formData={formData} updateFormData={updateFormData} />,
      4: <TeamStep key="team" formData={formData} updateFormData={updateFormData} />
    };
    return steps[step];
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <AnimatePresence mode="wait" initial={false}>
        {renderStep()}
      </AnimatePresence>

      <div className="flex justify-between">
        {step > 1 && (
          <button
            type="button"
            onClick={prevStep}
            className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Back
          </button>
        )}
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors ml-auto"
        >
          {step === 4 ? (isSubmitting ? 'Creating Account...' : 'Create Account') : 'Next'}
        </button>
      </div>
    </form>
  );
};

export default SignupForm;