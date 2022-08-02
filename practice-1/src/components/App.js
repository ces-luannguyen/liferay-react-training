import React from 'react';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import FormWrapper from './Forms/FormWrapper';
import { Provider } from 'react-redux';
import store from '../form/store';
import StepIndicator from './StepIndicator';
import theme from '../config/themeConfig';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <StepIndicator />
          <FormWrapper />
        </Container>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
