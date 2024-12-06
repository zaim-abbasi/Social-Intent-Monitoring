import React from 'react';
import { Formik, Form, Field } from 'formik';
import { loginSchema } from './validation/authSchemas';
import { useAuthForm } from './hooks/useAuthForm';
import FormInput from './components/FormInput';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

const LoginForm = ({ onClose }) => {
  const { isSubmitting, handleLogin } = useAuthForm(onClose);

  return (
    <div className="space-y-4">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-gray-900">Welcome back!</h2>
        <p className="text-gray-600 text-sm">Please enter your details to sign in.</p>
      </div>

      <div className="space-y-3">
        <button className="w-full flex items-center justify-center gap-3 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          <FcGoogle className="text-xl" />
          <span className="text-gray-700">Continue with Google</span>
        </button>
        <button className="w-full flex items-center justify-center gap-3 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          <FaGithub className="text-xl" />
          <span className="text-gray-700">Continue with GitHub</span>
        </button>
      </div>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">Or</span>
        </div>
      </div>

      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={handleLogin}
      >
        {({ errors, touched }) => (
          <Form className="space-y-3">
            <Field
              as={FormInput}
              name="email"
              type="email"
              placeholder="Enter your email"
              error={errors.email}
              touched={touched.email}
            />
            <Field
              as={FormInput}
              name="password"
              type="password"
              placeholder="Enter your password"
              error={errors.password}
              touched={touched.password}
            />
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                />
                <span className="ml-2 text-gray-600">Remember me</span>
              </label>
              <button
                type="button"
                className="text-primary hover:text-secondary"
              >
                Forgot password?
              </button>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-white py-2 rounded-lg hover:bg-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Signing in...' : 'Sign in'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;