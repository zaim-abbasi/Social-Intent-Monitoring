import React, { useState } from 'react';
import Modal from 'react-modal';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

const LoginModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-8 max-w-md w-full"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-50"
    >
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-6">
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </h2>
        
        <div className="space-y-4">
          <button className="w-full flex items-center justify-center space-x-2 border rounded-lg p-3 hover:bg-gray-50 transition-colors">
            <FcGoogle className="text-2xl" />
            <span>Continue with Google</span>
          </button>
          
          <button className="w-full flex items-center justify-center space-x-2 border rounded-lg p-3 hover:bg-gray-50 transition-colors">
            <FaFacebook className="text-2xl text-blue-600" />
            <span>Continue with Facebook</span>
          </button>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>
          
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary"
            />
            
            <button className="w-full bg-primary text-white p-3 rounded-lg hover:bg-secondary transition-colors">
              {isLogin ? 'Sign In' : 'Sign Up'}
            </button>
          </form>
          
          <p className="text-sm text-gray-600">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-primary hover:underline"
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;