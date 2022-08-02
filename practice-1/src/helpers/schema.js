import * as yup from 'yup';
import { messages } from '../constants/messageConstants';
export const insuranceSchema = yup.object().shape({
  firstName: yup
    .string()
    .required(messages.REQUIRED)
    .max(30, messages.MAX_CHARACTER_30)
    .matches(/^[A-Za-z ]*$/, messages.ONLY_LETTER),
  lastName: yup
    .string()
    .required(messages.REQUIRED)
    .max(30, messages.MAX_CHARACTER_30)
    .matches(/^[A-Za-z ]*$/, messages.ONLY_LETTER),
  birthday: yup.date().required(messages.REQUIRED).max(new Date(), messages.LESS_THAN_CURRENT_DATE),
  idCard: yup
    .string()
    .required(messages.REQUIRED)
    .matches(/^[0-9]{10}$/, messages.ONLY_DIGIT_10),
  phoneNumber: yup
    .string()
    .required(messages.REQUIRED)
    .matches(/^[0-9]{10}$/, messages.ONLY_DIGIT_10),
  monthlySaving: yup
    .string()
    .required(messages.REQUIRED)
    .matches(/^[0-9]*$/, messages.ONLY_DIGIT)
    .min(6, messages.MIN_VALUE_100000)
});
export const beneficiarySchema = yup.object().shape({
  beneficiaryFirstName: yup
    .string()
    .required(messages.REQUIRED)
    .max(30, messages.MAX_CHARACTER_30)
    .matches(/^[A-Za-z ]*$/, messages.ONLY_LETTER),
  beneficiaryLastName: yup
    .string()
    .required(messages.REQUIRED)
    .max(30, messages.MAX_CHARACTER_30)
    .matches(/^[A-Za-z ]*$/, messages.ONLY_LETTER),
  beneficiaryBirthday: yup
    .date()
    .required(messages.REQUIRED)
    .max(new Date(), messages.LESS_THAN_CURRENT_DATE),
  beneficiaryIdCard: yup
    .string()
    .required(messages.REQUIRED)
    .matches(/^[0-9]{10}$/, messages.ONLY_DIGIT_10),
  beneficiaryPhoneNumber: yup
    .string()
    .required(messages.REQUIRED)
    .matches(/^[0-9]{10}$/, messages.ONLY_DIGIT_10)
});
export const confirmSchema = yup.object().shape({
  agreeSubmit: yup.boolean().oneOf([true], messages.TERM_AGREEMENT)
});
