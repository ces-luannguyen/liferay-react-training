import {
  Button,
  Container,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { goNext, goPrev, setData, setError } from "../form/formSlice";
import React from "react";
const BeneficiaryForm = (props) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.form.data);
  const error = useSelector((state) => state.form.error);
  const handleChange = (e) => {
    dispatch(setData({ fieldName: e.target.name, value: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInput() === false) return;
    dispatch(goNext());
  };

  const validateInput = () => {
    const regexp = /^\d{10,11}$/;

    if (data.beneficiaryFirstName.length === 0) {
      dispatch(
        setError({
          fieldName: "beneficiaryFirstName",
          error: "First Name can not be empty",
        })
      );
      return false;
    }
    if (data.beneficiaryLastName.length === 0) {
      dispatch(
        setError({
          fieldName: "beneficiaryLastName",
          error: "Last Name can not be empty",
        })
      );
      return false;
    }
    if (data.beneficiaryBirthday.length === 0) {
      dispatch(
        setError({
          fieldName: "beneficiaryBirthday",
          error: "Birthday can not be empty",
        })
      );
      return false;
    }
    if (data.beneficiaryIdCard.length === 0) {
      dispatch(
        setError({
          fieldName: "beneficiaryIdCard",
          error: "ID Card can not be empty",
        })
      );
      return false;
    }
    if (data.beneficiaryPhoneNumber.length === 0) {
      dispatch(
        setError({
          fieldName: "beneficiaryPhoneNumber",
          error: "Phone Number can not be empty",
        })
      );
      return false;
    }
    const checkingResult = regexp.exec(data.beneficiaryPhoneNumber);
    if (checkingResult == null) {
      dispatch(
        setError({
          fieldName: "beneficiaryPhoneNumber",
          error: "Phone Number has only 10-11 digits",
        })
      );
      return false;
    }
    if (data.relationship.length === 0) {
      dispatch(
        setError({
          fieldName: "relationship",
          error: "Relationship can not be empty",
        })
      );
      return false;
    }
  };

  const _goPrev = (e) => {
    dispatch(goPrev());
  };

  const handleInputValidation = (e) => {
    const field = e.target.name;

    if (field === "beneficiaryFirstName") {
      if (data.beneficiaryFirstName.length === 0)
        dispatch(
          setError({ fieldName: field, error: "First Name can not be empty" })
        );
      else dispatch(setError({ fieldName: e.target.name, error: "" }));
    }
    if (field === "beneficiaryLastName") {
      if (data.beneficiaryLastName.length === 0)
        dispatch(
          setError({ fieldName: field, error: "Last Name can not be empty" })
        );
      else dispatch(setError({ fieldName: e.target.name, error: "" }));
    }
    if (field === "beneficiaryBirthday") {
      if (data.beneficiaryBirthday.length === 0)
        dispatch(
          setError({ fieldName: field, error: "Birthday can not be empty" })
        );
      else dispatch(setError({ fieldName: e.target.name, error: "" }));
    }
    if (field === "beneficiaryIdCard") {
      if (data.beneficiaryIdCard.length === 0)
        dispatch(
          setError({ fieldName: field, error: "ID Card can not be empty" })
        );
      else dispatch(setError({ fieldName: e.target.name, error: "" }));
    }
    if (field === "beneficiaryPhoneNumber") {
      const regexp = /^\d{10,11}$/;
      const checkingResult = regexp.exec(data.beneficiaryPhoneNumber);
      if (data.beneficiaryPhoneNumber.length === 0) {
        dispatch(
          setError({ fieldName: field, error: "Phone Number can not be empty" })
        );
      } else if (checkingResult == null) {
        dispatch(
          setError({
            fieldName: field,
            error: "Phone Number has only 10-11 digits",
          })
        );
      } else dispatch(setError({ fieldName: e.target.name, error: "" }));
    }
    if (field === "relationship") {
      if (data.relationship.length === 0)
        dispatch(
          setError({ fieldName: field, error: "Relationship can not be empty" })
        );
      else dispatch(setError({ fieldName: e.target.name, error: "" }));
    }
  };
  return (
    <div>
      <Container maxWidth="md">
        <h1>Beneficiary Form</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="First Name *"
                    name="beneficiaryFirstName"
                    variant="filled"
                    size="small"
                    margin="normal"
                    error={error.beneficiaryFirstName !== ""}
                    helperText={error ? error.beneficiaryFirstName : ""}
                    value={data.beneficiaryFirstName}
                    onChange={handleChange}
                    onBlur={handleInputValidation}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Middle Name"
                    name="beneficiaryMiddleName"
                    variant="filled"
                    size="small"
                    margin="normal"
                    value={data.beneficiaryMiddleName}
                    onChange={handleChange}
                    onBlur={handleInputValidation}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Last Name *"
                    name="beneficiaryLastName"
                    variant="filled"
                    size="small"
                    margin="normal"
                    error={error.beneficiaryLastName !== ""}
                    helperText={error ? error.beneficiaryLastName : ""}
                    value={data.beneficiaryLastName}
                    onChange={handleChange}
                    onBlur={handleInputValidation}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    id="date"
                    label="Birthday *"
                    type="date"
                    defaultValue="2017-05-24"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    fullWidth
                    size="medium"
                    margin="normal"
                    name="beneficiaryBirthday"
                    error={error.beneficiaryBirthday !== ""}
                    helperText={error ? error.beneficiaryBirthday : ""}
                    onChange={handleChange}
                    onBlur={handleInputValidation}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="ID Card *"
                    name="beneficiaryIdCard"
                    variant="filled"
                    size="small"
                    margin="normal"
                    error={error.beneficiaryIdCard !== ""}
                    helperText={error ? error.beneficiaryIdCard : ""}
                    value={data.beneficiaryIdCard}
                    onChange={handleChange}
                    onBlur={handleInputValidation}
                    type="number"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Phone Number *"
                    name="beneficiaryPhoneNumber"
                    variant="filled"
                    size="small"
                    margin="normal"
                    error={error.beneficiaryPhoneNumber !== ""}
                    helperText={error ? error.beneficiaryPhoneNumber : ""}
                    value={data.beneficiaryPhoneNumber}
                    onChange={handleChange}
                    onBlur={handleInputValidation}
                    type="number"
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel id="relationship-select-label">
                    Relationship *
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    fullWidth
                    value={data.relationship}
                    onChange={handleChange}
                    name="relationship"
                  >
                    <MenuItem value="spouse">Spouse</MenuItem>
                    <MenuItem value="children">Children</MenuItem>
                    <MenuItem value="relatives">Relatives</MenuItem>
                  </Select>
                </Grid>
              </Grid>
            </div>

            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Button variant="contained" onClick={_goPrev}>
                Previous
              </Button>
              <Button variant="contained" type="submit">
                Next
              </Button>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
};
export default BeneficiaryForm;
