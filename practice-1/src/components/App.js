import React from 'react';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import store from '../form/store';
import theme from '../config/themeConfig';
import { Forms, StepIndicator } from './Forms';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <StepIndicator />
          <Forms />
        </Container>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
