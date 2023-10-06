import * as z from 'zod';
import {
  FIELD_INTEGER_REGEX,
  FIELD_IS_REQUIRED,
  ONLY_NUMBERS_ALLOWED,
} from '../constants/string.constants';

export const CoalSchema = z.object({
  piecesPerKg: z.string(),
  
  coalPriceKg: z
    .string()
    .trim()
    .min(1, { message: FIELD_IS_REQUIRED })
    .max(12)
    .regex(FIELD_INTEGER_REGEX, { message: ONLY_NUMBERS_ALLOWED }),

  coalConsumption: z
    .string()
    .trim()
    .min(1, { message: FIELD_IS_REQUIRED })
    .max(12)
    .regex(FIELD_INTEGER_REGEX, { message: ONLY_NUMBERS_ALLOWED }),
});
