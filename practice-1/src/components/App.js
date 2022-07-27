import React from "react";
import { useSelector } from "react-redux";
import { steps } from "../constants/steps";
import BeneficiaryForm from "./BeneficiaryForm";
import ConfirmForm from "./ConfirmForm";
import InsuranceForm from "./InsuranceForm";
import SuccessfulPage from "./SuccessfulPage";
import './App.css';
const App = (props) => {
  const step = useSelector((state) => state.form.step);

  switch (step) {
    case steps.INSURANCE_FORM:
      return (
        <div>
          <InsuranceForm />
        </div>
      );
    case steps.BENEFICIARY_FORM:
      return (
        <div>
          <BeneficiaryForm />
        </div>
      );
    case steps.CONFIRM_FORM:
      return (
        <div>
          <ConfirmForm />
        </div>
      );
    case steps.SUCCESSFUL_PAGE:
      return (
        <div>
          <SuccessfulPage />
        </div>
      );
  }
};

export default App;
