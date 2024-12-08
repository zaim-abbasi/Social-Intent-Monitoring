import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { useMultiStepForm } from './hooks/useMultiStepForm';
import BasicInfoStep from './steps/BasicInfoStep';
import KeywordStep from './steps/KeywordStep';
import PlatformStep from './steps/PlatformStep';
import TeamStep from './steps/TeamStep';
import ProgressBar from './components/ProgressBar';
import { Formik, Form } from 'formik';
import { signupSchema } from './validation/authSchemas';
import api from '../../utils/api';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SignupForm = ({ onClose }) => {
  const navigate = useNavigate();
  const { step, formData, nextStep, prevStep, updateFormData } = useMultiStepForm({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    keywords: [],
    keywordIntent: '',
    platforms: [],
    teamName: '',
    teamMembers: []
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    const updatedValues = { ...values };
    updateFormData(updatedValues);
    
    if (values._submitType === 'next') {
      if (step < 4) {
        nextStep();
        setSubmitting(false);
      } else {
        try {
          const response = await api.post('/auth/signup', {
            ...formData,
            ...updatedValues
          });

          const { token, user } = response.data;
          localStorage.setItem('token', token);
          
          toast.success('Account created successfully!');
          onClose();
          navigate('/dashboard');
        } catch (error) {
          toast.error(error.response?.data?.message || 'Failed to create account');
        } finally {
          setSubmitting(false);
        }
      }
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
        initialValues={{ ...formData, _submitType: '' }}
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
                  className="px-6 py-2.5 border border-black/10 rounded-lg hover:bg-black/5 transition-colors text-black"
                >
                  Back
                </button>
              )}
              <button
                type="submit"
                onClick={() => formikProps.setFieldValue('_submitType', 'next')}
                disabled={!formikProps.isValid || formikProps.isSubmitting}
                className={`px-6 py-2.5 bg-black text-white rounded-lg hover:bg-black/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                  step === 1 ? 'w-full' : 'ml-auto'
                }`}
              >
                {step === 4 
                  ? (formikProps.isSubmitting ? 'Creating Account...' : 'Create Account') 
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