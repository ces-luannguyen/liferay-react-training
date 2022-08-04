import { BeneficiaryForm, ConfirmForm, InsuranceForm, SuccessfulStep } from '../components/Forms';

export const STEPS = [
  { title: 'Insurance Form', component: <InsuranceForm /> },
  { title: 'Beneficiary Form', component: <BeneficiaryForm /> },
  { title: 'Confirm Form', component: <ConfirmForm /> },
  { title: 'Successful Step', component: <SuccessfulStep /> }
];
