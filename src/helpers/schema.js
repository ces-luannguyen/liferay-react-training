import * as yup from 'yup';
import { MESSAGES } from '../constants/messageConstants';
import {
  REGEX_ONLY_DIGIT,
  REGEX_ONLY_DIGIT_10,
  REGEX_ONLY_LETTER
} from '../constants/regexConstants';
export const insuranceSchema = yup.object().shape({
  firstName: yup
    .string()
    .required(MESSAGES.REQUIRED)
    .max(30, MESSAGES.MAX_CHARACTER_30)
    .matches(REGEX_ONLY_LETTER, MESSAGES.ONLY_LETTER),
  lastName: yup
    .string()
    .required(MESSAGES.REQUIRED)
    .max(30, MESSAGES.MAX_CHARACTER_30)
    .matches(REGEX_ONLY_LETTER, MESSAGES.ONLY_LETTER),
  birthday: yup.date().required(MESSAGES.REQUIRED).max(new Date(), MESSAGES.LESS_THAN_CURRENT_DATE),
  idCard: yup
    .string()
    .required(MESSAGES.REQUIRED)
    .matches(REGEX_ONLY_DIGIT_10, MESSAGES.ONLY_DIGIT_10),
  phoneNumber: yup
    .string()
    .required(MESSAGES.REQUIRED)
    .matches(REGEX_ONLY_DIGIT_10, MESSAGES.ONLY_DIGIT_10),
  monthlySaving: yup
    .string()
    .required(MESSAGES.REQUIRED)
    .matches(REGEX_ONLY_DIGIT, MESSAGES.ONLY_DIGIT)
    .min(6, MESSAGES.MIN_VALUE_100000)
});
export const beneficiarySchema = yup.object().shape({
  beneficiaryFirstName: yup
    .string()
    .required(MESSAGES.REQUIRED)
    .max(30, MESSAGES.MAX_CHARACTER_30)
    .matches(REGEX_ONLY_LETTER, MESSAGES.ONLY_LETTER),
  beneficiaryLastName: yup
    .string()
    .required(MESSAGES.REQUIRED)
    .max(30, MESSAGES.MAX_CHARACTER_30)
    .matches(REGEX_ONLY_LETTER, MESSAGES.ONLY_LETTER),
  beneficiaryBirthday: yup
    .date()
    .required(MESSAGES.REQUIRED)
    .max(new Date(), MESSAGES.LESS_THAN_CURRENT_DATE),
  beneficiaryIdCard: yup
    .string()
    .required(MESSAGES.REQUIRED)
    .matches(REGEX_ONLY_DIGIT_10, MESSAGES.ONLY_DIGIT_10),
  beneficiaryPhoneNumber: yup
    .string()
    .required(MESSAGES.REQUIRED)
    .matches(REGEX_ONLY_DIGIT_10, MESSAGES.ONLY_DIGIT_10)
});
export const confirmSchema = yup.object().shape({
  agreeSubmit: yup.boolean().oneOf([true], MESSAGES.TERM_AGREEMENT)
});
