import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import { FiUser, FiLock, FiTag } from 'react-icons/fi';
import FormInput from '../../Auth/components/FormInput';
import KeywordInput from '../../Auth/components/KeywordInput';
import { useProfileUpdate } from '../../../hooks/useProfileUpdate';
import { toast } from 'react-hot-toast';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .required('Name is required'),
  newPassword: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'Must include uppercase, lowercase, and number'
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'Passwords must match'),
  keywords: Yup.array()
    .max(3, 'Maximum 3 keywords allowed')
});

const ProfileEditor = ({ user, onClose }) => {
  const { isSubmitting, updateProfile } = useProfileUpdate(onClose);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await updateProfile({
        ...values,
        keywords: values.keywords
      });
      toast.success('Profile updated successfully');
      onClose();
    } catch (error) {
      toast.error(error.message || 'Failed to update profile');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{
        name: user?.name || '',
        newPassword: '',
        confirmPassword: '',
        keywords: user?.keywords?.map(k => k.text) || []
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, setFieldValue, dirty, isValid }) => (
        <Form className="p-3">
          <div className="space-y-3">
            {/* Basic Info */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-black/5 p-3 rounded-lg"
            >
              <div className="flex items-center space-x-2 mb-2">
                <FiUser className="text-black w-3.5 h-3.5" />
                <h3 className="text-sm font-medium text-black">Basic Info</h3>
              </div>
              <FormInput
                name="name"
                placeholder="Full Name"
                error={errors.name}
                touched={touched.name}
                className="bg-white text-sm py-2"
              />
            </motion.div>

            {/* Password Update */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-black/5 p-3 rounded-lg"
            >
              <div className="flex items-center space-x-2 mb-2">
                <FiLock className="text-black w-3.5 h-3.5" />
                <h3 className="text-sm font-medium text-black">Password</h3>
              </div>
              <div className="grid gap-2">
                <FormInput
                  name="newPassword"
                  type="password"
                  placeholder="New Password"
                  error={errors.newPassword}
                  touched={touched.newPassword}
                  className="bg-white text-sm py-2"
                />
                <FormInput
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  error={errors.confirmPassword}
                  touched={touched.confirmPassword}
                  className="bg-white text-sm py-2"
                />
              </div>
            </motion.div>

            {/* Keywords */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-black/5 p-3 rounded-lg"
            >
              <div className="flex items-center space-x-2 mb-2">
                <FiTag className="text-black w-3.5 h-3.5" />
                <h3 className="text-sm font-medium text-black">Keywords</h3>
              </div>
              <KeywordInput
                keywords={values.keywords}
                onAdd={(keyword) => {
                  if (values.keywords.length < 3) {
                    setFieldValue('keywords', [...values.keywords, keyword]);
                  }
                }}
                onRemove={(index) => {
                  setFieldValue(
                    'keywords',
                    values.keywords.filter((_, i) => i !== index)
                  );
                }}
              />
              {errors.keywords && touched.keywords && (
                <div className="text-red-500 text-xs mt-1">{errors.keywords}</div>
              )}
            </motion.div>
          </div>

          <div className="flex justify-end space-x-2 mt-4 pt-3 border-t border-gray-100">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-black bg-black/5 rounded-lg hover:bg-black/10 transition-colors"
            >
              Cancel
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting || !dirty || !isValid}
              className="px-4 py-2 text-xs font-medium text-white bg-black rounded-lg hover:bg-black/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Saving...' : 'Save Changes'}
            </motion.button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ProfileEditor;