import yup from "./yupCustom";
export const InsuranceSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("First Name is required")
    .onlyLetter("First Name must be only letters"),
  lastName: yup
    .string()
    .required("Last Name is required")
    .onlyLetter("Last Name must be only letters"),
  birthday: yup
    .date()
    .max(new Date(), "Birthday must be less than current date"),
  idCard: yup
    .string()
    .required("ID Card is required")
    .onlyNumber("ID Card must be only numbers")
    .min(10, "ID Card must be 10 numbers")
    .max(10, "ID Card must be 10 numbers"),
  phoneNumber: yup
    .string()
    .required("Phone Number is required")
    .onlyNumber("Phone Number must be only numbers")
    .min(10, "Phone Number must be 10 numbers")
    .max(10, "Phone Number must be 10 numbers"),
  monthlySaving: yup
    .string()
    .required("Monthly Saving is required")
    .onlyNumber("Monthly Saving must be only numbers")
    .min(6, "Monthly Saving must be at least 100000 VND"),
});
export const BeneficiarySchema = yup.object().shape({
  beneficiaryFirstName: yup
    .string()
    .required("First Name is required")
    .onlyLetter("First Name must be only letters"),
  beneficiaryLastName: yup
    .string()
    .required("Last Name is required")
    .onlyLetter("Last Name must be only letters"),
  beneficiaryBirthday: yup
    .date()
    .max(new Date(), "Birthday must be less than current date"),
  beneficiaryIdCard: yup
    .string()
    .required("ID Card is required")
    .onlyNumber("ID Card must be only numbers")
    .min(10, "ID Card must be 10 numbers")
    .max(10, "ID Card must be 10 numbers"),
  beneficiaryPhoneNumber: yup
    .string()
    .required("Phone Number is required")
    .onlyNumber("Phone Number must be only numbers")
    .min(10, "Phone Number must be 10 numbers")
    .max(10, "Phone Number must be 10 numbers"),
});
export const ConfirmSchema = yup.object().shape({
  agreeSubmit: yup
    .boolean()
    .oneOf([true], "You must accept the terms and conditions")
});