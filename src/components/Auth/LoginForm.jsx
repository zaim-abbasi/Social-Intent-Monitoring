import React from 'react';
import { Formik, Form } from 'formik';
import { loginSchema } from './validation/authSchemas';
import { useAuthForm } from './hooks/useAuthForm';
import FormInput from './components/FormInput';

const LoginForm = ({ onClose }) => {
  const { isSubmitting, handleLogin } = useAuthForm(onClose);

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={loginSchema}
      onSubmit={handleLogin}
    >
      {({ errors, touched }) => (
        <Form className="space-y-4">
          <FormInput
            name="email"
            type="email"
            placeholder="Email"
            error={errors.email}
            touched={touched.email}
          />
          <FormInput
            name="password"
            type="password"
            placeholder="Password"
            error={errors.password}
            touched={touched.password}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-white py-2 rounded-lg hover:bg-secondary transition-colors disabled:opacity-50"
          >
            {isSubmitting ? 'Logging in...' : 'Login'}
          </button>
          <div className="text-center">
            <button
              type="button"
              className="text-primary hover:text-secondary text-sm"
            >
              Forgot Password?
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;