import { body } from 'express-validator';

// Path: src/server/validators/authValidators.js
export const loginValidator = [
  body('email')
    .trim()
    .isEmail()
    .withMessage('Please enter a valid email address'),
  body('password')
    .trim()
    .notEmpty()
    .withMessage('Password is required')
];


// Path: src/server/validators/authValidators.js
export const signupValidator = [
  body('name')
    .trim()
    .isLength({ min: 2 })
    .withMessage('Name must be at least 2 characters long'),
  body('email')
    .trim()
    .isEmail()
    .withMessage('Please enter a valid email address'),
  body('password')
    .trim()
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
    .withMessage('Password must contain at least one uppercase letter, one lowercase letter, and one number'),
  body('keywords')
    .optional()
    .isArray()
    .withMessage('Keywords must be an array'),
  body('platforms')
    .optional()
    .isArray()
    .withMessage('Platforms must be an array'),
  body('teamName')
    .optional()
    .trim()
    .notEmpty()
    .withMessage('Team name cannot be empty if provided'),
  body('teamMembers')
    .optional()
    .isArray()
    .withMessage('Team members must be an array')
];