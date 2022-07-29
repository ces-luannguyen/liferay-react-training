import { createSlice } from '@reduxjs/toolkit';
import { steps } from '../constants/stepConstants';

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    step: 0,
    data: {
      firstName: '',
      middleName: '',
      lastName: '',
      birthday: '',
      idCard: '',
      phoneNumber: '',
      monthlySaving: '',
      relationship: 'spouse',
      beneficiaryFirstName: '',
      beneficiaryMiddleName: '',
      beneficiaryLastName: '',
      beneficiaryBirthday: '',
      beneficiaryIdCard: '',
      beneficiaryPhoneNumber: '',
      agreeSubmit: false
    }
  },
  reducers: {
    setFormData: (state, { payload: { data } }) => {
      state.data = { ...state.data, ...data };
    },
    goNext: (state) => {
      if (state.step === steps.length - 1) return;
      state.step += 1;
    },
    goPrev: (state) => {
      if (state.step === 0) return;
      state.step -= 1;
    }
  }
});

export const { setFormData, goNext, goPrev } = formSlice.actions;

export default formSlice.reducer;
