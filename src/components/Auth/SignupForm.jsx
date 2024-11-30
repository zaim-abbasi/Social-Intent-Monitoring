import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { useMultiStepForm } from './hooks/useMultiStepForm';
import { useAuthForm } from './hooks/useAuthForm';
import BasicInfoStep from './steps/BasicInfoStep';
import KeywordStep from './steps/KeywordStep';
import PlatformStep from './steps/PlatformStep';
import TeamStep from './steps/TeamStep';
import ProgressBar from './components/ProgressBar';
import { Formik } from 'formik';
import { signupSchema } from './validation/authSchemas';

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
  });

  const { isSubmitting, handleSignup } = useAuthForm(onClose);

  const handleSubmit = async (values, { setSubmitting }) => {
    if (step < 4) {
      updateFormData(values);
      nextStep();
      setSubmitting(false);
    } else {
      await handleSignup({ ...formData, ...values });
    }
  };

  const renderStep = (formikProps) => {
    const steps = {
      1: <BasicInfoStep formData={formData} updateFormData={updateFormData} {...formikProps} />,
      2: <KeywordStep formData={formData} updateFormData={updateFormData} {...formikProps} />,
      3: <PlatformStep formData={formData} updateFormData={updateFormData} {...formikProps} />,
      4: <TeamStep formData={formData} updateFormData={updateFormData} {...formikProps} />
    };
    return steps[step];
  };

  const isStepValid = (values) => {
    switch (step) {
      case 1:
        return values.name && values.email && values.password && values.confirmPassword &&
               values.password === values.confirmPassword;
      case 2:
        return values.keywords && values.keywords.length > 0;
      case 3:
        return values.platforms && values.platforms.length > 0;
      case 4:
        return values.teamName;
      default:
        return false;
    }
  };

  return (
    <div className="h-[500px] flex flex-col">
      <ProgressBar currentStep={step} totalSteps={4} />
      
      <Formik
        initialValues={formData}
        validationSchema={signupSchema}
        onSubmit={handleSubmit}
        validateOnMount
      >
        {(formikProps) => (
          <form onSubmit={formikProps.handleSubmit} className="flex-1 flex flex-col">
            <div className="flex-1">
              <AnimatePresence mode="wait" initial={false}>
                {renderStep(formikProps)}
              </AnimatePresence>
            </div>

            <div className="flex justify-between mt-4 pt-3 border-t">
              {step > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-gray-700"
                >
                  Back
                </button>
              )}
              <button
                type="submit"
                disabled={!isStepValid(formikProps.values) || formikProps.isSubmitting}
                className={`px-6 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                  step === 1 ? 'w-full' : 'ml-auto'
                }`}
              >
                {step === 4 
                  ? (formikProps.isSubmitting ? 'Creating Account...' : 'Create Account') 
                  : 'Next'}
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default SignupForm;