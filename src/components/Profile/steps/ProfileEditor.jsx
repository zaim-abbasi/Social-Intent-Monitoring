import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Tab } from '@headlessui/react';
import FormInput from '../../Auth/components/FormInput';
import KeywordInput from '../../Auth/components/KeywordInput';
import { useAuth } from '../../Auth/AuthContext';
import api from '../../../utils/api';
import { toast } from 'react-hot-toast';

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
  keywordIntent: Yup.string()
});

const ProfileEditor = ({ user, onClose }) => {
  const { login } = useAuth();
  const [selectedTab, setSelectedTab] = useState(0);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await api.put('/api/user/profile', {
        name: values.name,
        newPassword: values.newPassword || undefined,
        keywords: values.keywords,
        keywordIntent: values.keywordIntent
      });

      if (response.data.token && response.data.user) {
        await login(response.data);
        toast.success('Profile updated successfully');
        onClose();
      } else {
        throw new Error('Invalid server response');
      }
    } catch (error) {
      console.error('Profile update error:', error);
      toast.error(error.response?.data?.message || 'Failed to update profile');
    } finally {
      setSubmitting(false);
    }
  };

  const tabs = [
    { name: 'Basic Info', id: 'basic' },
    { name: 'Password', id: 'password' },
    { name: 'Keywords', id: 'keywords' }
  ];

  return (
    <Formik
      initialValues={{
        name: user.name || '',
        newPassword: '',
        confirmPassword: '',
        keywords: user.keywords?.map(k => k.text) || [],
        keywordIntent: user.keywordIntent || ''
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, setFieldValue }) => (
        <Form className="space-y-6">
          <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
            <Tab.List className="flex space-x-4 border-b mb-6">
              {tabs.map((tab) => (
                <Tab
                  key={tab.id}
                  className={({ selected }) =>
                    `pb-3 text-base font-medium border-b-2 transition-all focus:outline-none ${
                      selected
                        ? 'text-primary border-primary'
                        : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'
                    }`
                  }
                >
                  {tab.name}
                </Tab>
              ))}
            </Tab.List>

            <Tab.Panels>
              <Tab.Panel>
                <div className="space-y-4">
                  <FormInput
                    name="name"
                    label="Full Name"
                    placeholder="Enter your full name"
                    error={errors.name}
                    touched={touched.name}
                  />
                </div>
              </Tab.Panel>

              <Tab.Panel>
                <div className="space-y-4">
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
                </div>
              </Tab.Panel>

              <Tab.Panel>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Keywords
                    </label>
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
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Keyword Intent
                    </label>
                    <textarea
                      name="keywordIntent"
                      value={values.keywordIntent}
                      onChange={(e) => setFieldValue('keywordIntent', e.target.value)}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary"
                      rows="3"
                      placeholder="Describe your intent for monitoring these keywords"
                    />
                  </div>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>

          <div className="flex justify-end space-x-4 pt-6 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 bg-primary text-white rounded-lg hover:bg-secondary transition-colors"
            >
              Save Changes
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ProfileEditor;