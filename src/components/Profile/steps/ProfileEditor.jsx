import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import { FiUser, FiLock, FiTag, FiInfo } from 'react-icons/fi';
import FormInput from '../../Auth/components/FormInput';
import KeywordInput from '../../Auth/components/KeywordInput';
import { useProfileUpdate } from '../../../hooks/useProfileUpdate';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .required('Name is required'),
  newPassword: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one number'
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'Passwords must match'),
  keywordIntent: Yup.string(),
  keywords: Yup.array().of(Yup.string())
});

const ProfileEditor = ({ user, onClose }) => {
  const { isSubmitting, updateProfile } = useProfileUpdate(onClose);

  return (
    <Formik
      initialValues={{
        name: user?.name || '',
        newPassword: '',
        confirmPassword: '',
        keywords: user?.keywords?.map(k => k.text) || [],
        keywordIntent: user?.keywordIntent || ''
      }}
      validationSchema={validationSchema}
      onSubmit={updateProfile}
    >
      {({ values, errors, touched, setFieldValue }) => (
        <Form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Basic Info Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4 bg-gray-50 p-6 rounded-xl"
            >
              <div className="flex items-center space-x-2 mb-4">
                <FiUser className="text-primary w-5 h-5" />
                <h3 className="text-lg font-semibold">Basic Information</h3>
              </div>
              <FormInput
                name="name"
                label="Full Name"
                placeholder="Enter your full name"
                error={errors.name}
                touched={touched.name}
              />
            </motion.div>

            {/* Password Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-4 bg-gray-50 p-6 rounded-xl"
            >
              <div className="flex items-center space-x-2 mb-4">
                <FiLock className="text-primary w-5 h-5" />
                <h3 className="text-lg font-semibold">Password Update</h3>
              </div>
              <FormInput
                name="newPassword"
                type="password"
                label="New Password"
                placeholder="Enter new password"
                error={errors.newPassword}
                touched={touched.newPassword}
              />
              <FormInput
                name="confirmPassword"
                type="password"
                label="Confirm Password"
                placeholder="Confirm new password"
                error={errors.confirmPassword}
                touched={touched.confirmPassword}
              />
            </motion.div>
          </div>

          {/* Keywords Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4 bg-gray-50 p-6 rounded-xl"
          >
            <div className="flex items-center space-x-2 mb-4">
              <FiTag className="text-primary w-5 h-5" />
              <h3 className="text-lg font-semibold">Monitoring Keywords</h3>
            </div>
            <KeywordInput
              keywords={values.keywords}
              onAdd={(keyword) => {
                setFieldValue('keywords', [...values.keywords, keyword]);
              }}
              onRemove={(index) => {
                setFieldValue(
                  'keywords',
                  values.keywords.filter((_, i) => i !== index)
                );
              }}
            />
            <div className="mt-4">
              <div className="flex items-center space-x-2 mb-2">
                <FiInfo className="text-primary w-4 h-4" />
                <label className="text-sm font-medium text-gray-700">
                  Keyword Intent
                </label>
              </div>
              <textarea
                name="keywordIntent"
                value={values.keywordIntent}
                onChange={(e) => setFieldValue('keywordIntent', e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
                rows="3"
                placeholder="Describe your intent for monitoring these keywords"
              />
            </div>
          </motion.div>

          <div className="flex justify-end space-x-4 pt-6 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2.5 bg-primary text-white rounded-lg hover:bg-secondary transition-colors disabled:opacity-50"
            >
              {isSubmitting ? 'Saving Changes...' : 'Save Changes'}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ProfileEditor;