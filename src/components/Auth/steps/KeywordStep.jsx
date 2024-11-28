import React from 'react';
import { motion } from 'framer-motion';
import { useDropzone } from 'react-dropzone';
import KeywordInput from '../components/KeywordInput';

const KeywordStep = ({ formData, updateFormData }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png']
    },
    maxFiles: 1,
    onDrop: acceptedFiles => {
      updateFormData({ logo: acceptedFiles[0] });
    }
  });

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-4"
    >
      <h3 className="text-xl font-semibold mb-4">Keywords</h3>
      <p className="text-gray-600 mb-4">
        Choose keywords you want us to track for you. You can track up to 3 keywords.
      </p>
      <KeywordInput
        keywords={formData.keywords}
        onAdd={(keyword) => updateFormData({
          keywords: [...formData.keywords, keyword]
        })}
        onRemove={(index) => updateFormData({
          keywords: formData.keywords.filter((_, i) => i !== index)
        })}
      />
      <textarea
        placeholder="What's your intent? (e.g., Looking for companies who search for a social listening tool)"
        value={formData.keywordIntent}
        onChange={(e) => updateFormData({ keywordIntent: e.target.value })}
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
        rows="4"
      />
      <div
        {...getRootProps()}
        className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-primary transition-colors"
      >
        <input {...getInputProps()} />
        <p className="text-gray-600">
          {formData.logo ? formData.logo.name : "Drag 'n' drop your logo here, or click to select"}
        </p>
      </div>
    </motion.div>
  );
};

export default KeywordStep;