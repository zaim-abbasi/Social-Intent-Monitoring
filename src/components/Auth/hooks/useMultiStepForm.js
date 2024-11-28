import { useState } from 'react';

export const useMultiStepForm = (initialData = {}) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initialData);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  
  const updateFormData = (newData) => {
    setFormData(prev => ({ ...prev, ...newData }));
  };

  return {
    step,
    formData,
    nextStep,
    prevStep,
    updateFormData
  };
};