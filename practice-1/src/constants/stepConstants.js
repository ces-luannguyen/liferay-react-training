import BeneficiaryForm from '../components/Forms/BeneficiaryForm';
import ConfirmForm from '../components/Forms/ConfirmForm';
import InsuranceForm from '../components/Forms/InsuranceForm';
import SuccessfulStep from '../components/Forms/SuccessfulStep';

export const steps = [
  { title: 'Insurance Form', component: <InsuranceForm /> },
  { title: 'Beneficiary Form', component: <BeneficiaryForm /> },
  { title: 'Confirm Form', component: <ConfirmForm /> },
  { title: 'Successful Step', component: <SuccessfulStep /> }
];
