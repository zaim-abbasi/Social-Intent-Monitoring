import React from 'react';
import { Formik, Form, Field } from 'formik';
import { loginSchema } from './validation/authSchemas';
import { useAuthForm } from './hooks/useAuthForm';
import FormInput from './components/FormInput';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const LoginForm = ({ onClose }) => {
  const { isSubmitting, handleLogin } = useAuthForm(onClose);

  const socialButtons = [
    {
      icon: FcGoogle,
      label: 'Continue with Google',
      bgColor: 'bg-white',
      hoverBg: 'hover:bg-gray-50',
      textColor: 'text-gray-700'
    },
    {
      icon: FaGithub,
      label: 'Continue with GitHub',
      bgColor: 'bg-[#24292F]',
      hoverBg: 'hover:bg-[#1b1f23]',
      textColor: 'text-white'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold text-gray-900 font-display"
        >
          Welcome back!
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-500 mt-2"
        >
          Please enter your details to sign in
        </motion.p>
      </div>

      <div className="space-y-3">
        {socialButtons.map((button, index) => (
          <motion.button
            key={index}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full flex items-center justify-center gap-3 px-4 py-2.5 rounded-xl border border-gray-200 ${button.bgColor} ${button.hoverBg} ${button.textColor} transition-all duration-200 shadow-sm hover:shadow-md`}
          >
            <button.icon className="text-xl flex-shrink-0" />
            <span className="font-medium">{button.label}</span>
          </motion.button>
        ))}
      </div>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">or continue with email</span>
        </div>
      </div>

      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={handleLogin}
      >
        {({ errors, touched }) => (
          <Form className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Field
                as={FormInput}
                name="email"
                type="email"
                placeholder="name@company.com"
                error={errors.email}
                touched={touched.email}
                className="w-full px-4 py-2.5 rounded-xl border focus:ring-2 focus:ring-black/20 focus:border-black transition-all"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Field
                as={FormInput}
                name="password"
                type="password"
                placeholder="••••••••"
                error={errors.password}
                touched={touched.password}
                className="w-full px-4 py-2.5 rounded-xl border focus:ring-2 focus:ring-black/20 focus:border-black transition-all"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-between"
            >
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <button
                type="button"
                className="text-sm font-medium text-black hover:text-black/80 transition-colors"
              >
                Forgot password?
              </button>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-black text-white py-2.5 rounded-xl hover:bg-black/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-medium shadow-lg shadow-black/25 hover:shadow-xl hover:shadow-black/30"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span className="ml-2">Signing in...</span>
                </div>
              ) : (
                'Sign in'
              )}
            </motion.button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;