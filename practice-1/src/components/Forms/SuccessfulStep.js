import { Alert, Container } from '@mui/material';
import React from 'react';
const SuccessfulStep = () => {
  return (
    <Container maxWidth="md">
      <Alert severity="success">Form submit successful</Alert>
    </Container>
  );
};

export default SuccessfulStep;
