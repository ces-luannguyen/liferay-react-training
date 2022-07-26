import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    step: 1,
    data: {
      firstName: "",
      middleName: "",
      lastName: "",
      birthday: "",
      idCard: "",
      phoneNumber: "",
      monthlySaving: "",
      relationship: "spouse",
      beneficiaryFirstName: "",
      beneficiaryMiddleName: "",
      beneficiaryLastName: "",
      beneficiaryBirthday: "",
      beneficiaryIdCard: "",
      beneficiaryPhoneNumber: "",
      agreeSubmit: false,
    },
    error: {
      firstName: "",
      middleName: "",
      lastName: "",
      birthday: "",
      idCard: "",
      phoneNumber: "",
      monthlySaving: "",
      relationship: "",
      beneficiaryFirstName: "",
      beneficiaryMiddleName: "",
      beneficiaryLastName: "",
      beneficiaryBirthday: "",
      beneficiaryIdCard: "",
      beneficiaryPhoneNumber: "",
      agreeSubmit: "",
    },
  },
  reducers: {
    setData: (state, { payload: { fieldName, value } }) => {
      state.data[fieldName] = value;
    },
    setError: (state, { payload: { fieldName, error } }) => {
      state.error[fieldName] = error;
    },
    goNext: (state) => {
      if (state.step === 4) return;
      state.step += 1;
    },
    goPrev: (state) => {
      if (state.step === 1) return;
      state.step -= 1;
    },
  },
});

export const { setData, setError, goNext, goPrev } = formSlice.actions;

export default formSlice.reducer;
