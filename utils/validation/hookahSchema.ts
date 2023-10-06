'use client';

import * as z from 'zod';
import {
  FIELD_IS_REQUIRED,
  ONLY_NUMBERS_ALLOWED,
  FIELD_REGEX,
} from '@/utils/constants/string.constants';

export const HookahSchema = z.object({
  hookahPrice: z
    .string()
    .trim()
    .min(1, { message: FIELD_IS_REQUIRED })
    .max(12)
    .regex(FIELD_REGEX, { message: ONLY_NUMBERS_ALLOWED }),

  salaryPerOneHookah: z
    .string()
    .trim()
    .min(1, { message: FIELD_IS_REQUIRED })
    .max(12)
    .regex(FIELD_REGEX, { message: ONLY_NUMBERS_ALLOWED }),

  additionalExpenses: z
    .string()
    .trim()
    .min(1, { message: FIELD_IS_REQUIRED })
    .max(12)
    .regex(FIELD_REGEX, { message: ONLY_NUMBERS_ALLOWED }) 
});


// .refine((val) => !Number.isNaN(parseInt(val, 10)), {
//   message: 'Expected number, received a string',
// }),