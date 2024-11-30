import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { useMultiStepForm } from './hooks/useMultiStepForm';
import { useAuthForm } from './hooks/useAuthForm';
import BasicInfoStep from './steps/BasicInfoStep';
import KeywordStep from './steps/KeywordStep';
import PlatformStep from './steps/PlatformStep';
import TeamStep from './steps/TeamStep';
import ProgressBar from './components/ProgressBar';
import { Formik, Form } from 'formik';
import { signupSchema } from './validation/authSchemas';

const SignupForm = ({ onClose }) => {
  const { step, formData, nextStep, prevStep, updateFormData } = useMultiStepForm({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    keywords: [],
    keywordIntent: '',
    keywordImage: null,
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

  const getCurrentValidationSchema = (step) => {
    const schemas = {
      1: signupSchema.pick(['name', 'email', 'password', 'confirmPassword']),
      2: signupSchema.pick(['keywords', 'keywordIntent']),
      3: signupSchema.pick(['platforms']),
      4: signupSchema.pick(['teamName'])
    };
    return schemas[step];
  };

  return (
    <div className="h-[600px] flex flex-col">
      <ProgressBar currentStep={step} totalSteps={4} />
      
      <Formik
        initialValues={formData}
        validationSchema={getCurrentValidationSchema(step)}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {(formikProps) => (
          <Form className="flex-1 flex flex-col">
            <div className="flex-1 overflow-y-auto custom-scrollbar px-1">
              <AnimatePresence mode="wait" initial={false}>
                {renderStep(formikProps)}
              </AnimatePresence>
            </div>

            <div className="flex justify-between mt-4 pt-3 border-t bg-white">
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
                disabled={!formikProps.isValid || formikProps.isSubmitting}
                className={`px-6 py-2.5 bg-primary text-white rounded-lg hover:bg-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                  step === 1 ? 'w-full' : 'ml-auto'
                }`}
              >
                {step === 4 
                  ? (isSubmitting ? 'Creating Account...' : 'Create Account') 
                  : 'Next'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignupForm;