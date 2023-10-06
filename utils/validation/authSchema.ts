import * as z from 'zod';
import {
  FIELD_INTEGER_REGEX,
  FIELD_IS_REQUIRED,
  INVALID_EMAIL,
} from '../constants/string.constants';

export type SignUpFormValues = z.infer<typeof SignUpSchema>;

export const SignUpSchema = z
  .object({
    email: z
      .string()
      .email({ message: 'Invalid email format' })
      .trim()
      .min(1, { message: 'Email is required' }),

    name: z
      .string()
      .min(1, { message: 'Name is required' }),

    password: z
      .string()
      .trim()
      .min(1, { message: 'Password is required' }),

    confirmPassword: z
      .string()
      .min(1, { message: 'Confirm Password is required' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });
