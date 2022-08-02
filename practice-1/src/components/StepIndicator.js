import { Step, StepLabel, Stepper } from '@mui/material';
import { useSelector } from 'react-redux';
import { steps } from '../constants/stepConstants';

export default function StepIndicator() {
  const step = useSelector((state) => state.form.step);
  return (
    <Stepper activeStep={step} alternativeLabel>
      {steps.map((step, index) => (
        <Step key={index}>
          <StepLabel>{step.title}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}
