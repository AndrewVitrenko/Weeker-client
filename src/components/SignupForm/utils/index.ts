import * as yup from 'yup';

const phoneRegexp =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

export const validationSchema = yup.object().shape({
  email: yup.string().email().required('Email is required'),
  firstName: yup.string().required('Name is required'),
  lastName: yup.string().required('Surname is  required'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password should be at least 8 characters')
    .max(16, 'Password is too long')
    .matches(/(?=.*[0-9])/, 'Password must contain at least one number')
    .matches(
      /(?=.*[a-z])/,
      'Password must contain at least one lowercase letter',
    )
    .matches(
      /(?=.*[A-Z])/,
      'Password must contain at least one uppercase letter',
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Password must match')
    .required('Confirm password is required'),
  phone: yup.string().matches(phoneRegexp, 'Phone number is not valid'),
});
