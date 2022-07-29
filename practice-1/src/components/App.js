import React from 'react';
import { steps } from '../constants/stepConstants';
import './App.css';
import {
  Container,
  createTheme,
  CssBaseline,
  Step,
  StepLabel,
  Stepper,
  ThemeProvider
} from '@mui/material';
import FormWrapper from './Forms/FormWrapper';
import { useSelector } from 'react-redux';
const theme = createTheme();

const App = () => {
  const step = useSelector((state) => state.form.step);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Stepper activeStep={step} alternativeLabel>
          {steps.map((step, index) => (
            <Step key={index}>
              <StepLabel>{step.title}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <FormWrapper />
      </Container>
    </ThemeProvider>
  );
};

export default App;
