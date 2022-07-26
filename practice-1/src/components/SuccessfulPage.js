import { Alert, Container } from "@mui/material";
import React from "react";
const SuccessfulPage = (props) => {
  return (
    <div>
      <Container maxWidth="md">
        <Alert severity="success">Form submit successful</Alert>
      </Container>
    </div>
  );
};

export default SuccessfulPage;
