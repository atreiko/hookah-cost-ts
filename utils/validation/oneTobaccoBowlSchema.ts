import * as z from 'zod';
import {
  FIELD_IS_REQUIRED,
  ONLY_NUMBERS_ALLOWED,
  FIELD_REGEX,
} from '@/utils/constants/string.constants';

export const OneTobaccoBowlSchema = z.object({
  bowlCapacity: z
    .string()
    .trim()
    .min(1, { message: FIELD_IS_REQUIRED })
    .max(12)
    .regex(FIELD_REGEX, { message: ONLY_NUMBERS_ALLOWED }),
});
