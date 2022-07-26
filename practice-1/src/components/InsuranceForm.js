import React from "react";
import { Button, Container, Grid, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { goNext, setData, setError } from "../form/formSlice";

const InsuranceForm = (props) => {
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
    if (data.firstName.length === 0) {
      dispatch(
        setError({
          fieldName: "firstName",
          error: "First Name can not be empty",
        })
      );
      return false;
    }
    if (data.lastName.length === 0) {
      dispatch(
        setError({
          fieldName: "lastName",
          error: "Last Name can not be empty",
        })
      );
      return false;
    }
    if (data.birthday.length === 0) {
      dispatch(
        setError({
          fieldName: "birthday",
          error: "Birthday can not be empty",
        })
      );
      return false;
    }
    if (data.idCard.length === 0) {
      dispatch(
        setError({
          fieldName: "idCard",
          error: "ID Card can not be empty",
        })
      );
      return false;
    }
    if (data.phoneNumber.length === 0) {
      dispatch(
        setError({
          fieldName: "phoneNumber",
          error: "Phone Number can not be empty",
        })
      );
      return false;
    }
    const checkingResult = regexp.exec(data.phoneNumber);
    if (checkingResult == null) {
      dispatch(
        setError({
          fieldName: "phoneNumber",
          error: "Phone Number has only 10-11 digits",
        })
      );
      return false;
    }
    if (data.monthlySaving.length === 0) {
      dispatch(
        setError({
          fieldName: "monthlySaving",
          error: "Monthly Saving can not be empty",
        })
      );
      return false;
    }
  };

  const handleInputValidation = (e) => {
    const field = e.target.name;

    if (field === "firstName") {
      if (data.firstName.length === 0)
        dispatch(
          setError({ fieldName: field, error: "First Name can not be empty" })
        );
      else dispatch(setError({ fieldName: e.target.name, error: "" }));
    }
    if (field === "lastName") {
      if (data.lastName.length === 0)
        dispatch(
          setError({ fieldName: field, error: "Last Name can not be empty" })
        );
      else dispatch(setError({ fieldName: e.target.name, error: "" }));
    }
    if (field === "birthday") {
      if (data.birthday.length === 0)
        dispatch(
          setError({ fieldName: field, error: "Birthday can not be empty" })
        );
      else dispatch(setError({ fieldName: e.target.name, error: "" }));
    }
    if (field === "idCard") {
      if (data.idCard.length === 0)
        dispatch(
          setError({ fieldName: field, error: "ID Card can not be empty" })
        );
      else dispatch(setError({ fieldName: e.target.name, error: "" }));
    }
    if (field === "phoneNumber") {
      const regexp = /^\d{10,11}$/;
      const checkingResult = regexp.exec(data.phoneNumber);
      if (data.phoneNumber.length === 0) {
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
    if (field === "monthlySaving") {
      if (data.monthlySaving.length === 0)
        dispatch(
          setError({
            fieldName: field,
            error: "Monthly Saving can not be empty",
          })
        );
      else dispatch(setError({ fieldName: e.target.name, error: "" }));
    }
  };
  return (
    <Container maxWidth="md">
      <h1>Insurance Form</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="First Name *"
                  name="firstName"
                  variant="filled"
                  size="small"
                  margin="normal"
                  error={error.firstName !== ""}
                  helperText={error ? error.firstName : ""}
                  value={data.firstName}
                  onChange={handleChange}
                  onBlur={handleInputValidation}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Middle Name"
                  name="middleName"
                  variant="filled"
                  size="small"
                  margin="normal"
                  value={data.middleName}
                  onChange={handleChange}
                  onBlur={handleInputValidation}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Last Name *"
                  name="lastName"
                  variant="filled"
                  size="small"
                  margin="normal"
                  error={error.lastName !== ""}
                  helperText={error ? error.lastName : ""}
                  value={data.lastName}
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
                  name="birthday"
                  error={error.birthday !== ""}
                  helperText={error ? error.birthday : ""}
                  onChange={handleChange}
                  onBlur={handleInputValidation}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="ID Card *"
                  name="idCard"
                  variant="filled"
                  size="small"
                  margin="normal"
                  error={error.idCard !== ""}
                  helperText={error ? error.idCard : ""}
                  value={data.idCard}
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
                  name="phoneNumber"
                  variant="filled"
                  size="small"
                  margin="normal"
                  error={error.phoneNumber !== ""}
                  helperText={error ? error.phoneNumber : ""}
                  value={data.phoneNumber}
                  onChange={handleChange}
                  onBlur={handleInputValidation}
                  type="number"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Monthly Saving *"
                  name="monthlySaving"
                  variant="filled"
                  size="small"
                  margin="normal"
                  error={error.monthlySaving !== ""}
                  helperText={error ? error.monthlySaving : ""}
                  value={data.monthlySaving}
                  onChange={handleChange}
                  onBlur={handleInputValidation}
                  type="number"
                />
              </Grid>
            </Grid>
          </div>

          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Button variant="contained" type="submit">
              Next
            </Button>
          </Grid>
        </form>
      </div>
    </Container>
  );
};
export default InsuranceForm;
