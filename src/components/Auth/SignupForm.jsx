import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { useMultiStepForm } from './hooks/useMultiStepForm';
import { useAuthForm } from './hooks/useAuthForm';
import BasicInfoStep from './steps/BasicInfoStep';
import KeywordStep from './steps/KeywordStep';
import PlatformStep from './steps/PlatformStep';
import TeamStep from './steps/TeamStep';
import ProgressBar from './components/ProgressBar';

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
    <div className="h-full flex flex-col">
      <ProgressBar currentStep={step} totalSteps={4} />
      
      <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
        <div className="flex-1">
          <AnimatePresence mode="wait" initial={false}>
            {renderStep()}
          </AnimatePresence>
        </div>

        <div className="flex justify-between mt-8">
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="px-6 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-gray-700"
            >
              Back
            </button>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-6 py-2.5 bg-primary text-white rounded-lg hover:bg-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
              step === 1 ? 'w-full' : 'ml-auto'
            }`}
          >
            {step === 4 ? (isSubmitting ? 'Creating Account...' : 'Create Account') : 'Next'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;