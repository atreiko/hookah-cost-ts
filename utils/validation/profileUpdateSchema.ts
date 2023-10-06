import * as z from 'zod';
import {
  FIELD_INTEGER_REGEX,
  FIELD_IS_REQUIRED,
  ONLY_NUMBERS_ALLOWED,
} from '../constants/string.constants';

export const profileUpdateSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: FIELD_IS_REQUIRED }),
  
  image: z
    .string()
    .trim()
    .min(1, { message: FIELD_IS_REQUIRED })
})