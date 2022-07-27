import { Button, Container, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { goNext, setFormData } from "../form/formSlice";
import { InsuranceSchema } from "../helpers/schema";
const InsuranceForm = (props) => {
  const data = useSelector((state) => state.form.data);

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: data,
    onSubmit: function (values) {
      dispatch(setFormData({ data: values }));

      dispatch(goNext());
    },
    validationSchema: InsuranceSchema,
  });

  return (
    <Container maxWidth="md">
      <h1>Insurance Form</h1>
      <div>
        <form onSubmit={formik.handleSubmit}>
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
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.firstName && formik.errors.firstName && (
                  <span className="error">{formik.errors.firstName}</span>
                )}
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
                  onChange={formik.handleChange}
                  value={formik.values.middleName}
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
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.lastName && formik.errors.lastName && (
                  <span className="error">{formik.errors.lastName}</span>
                )}
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  id="date"
                  label="Birthday *"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  fullWidth
                  size="medium"
                  margin="normal"
                  name="birthday"
                  onChange={formik.handleChange}
                  value={formik.values.birthday}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.birthday && formik.errors.birthday && (
                  <span className="error">{formik.errors.birthday}</span>
                )}
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
                  type="number"
                  onChange={formik.handleChange}
                  value={formik.values.idCard}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.idCard && formik.errors.idCard && (
                  <span className="error">{formik.errors.idCard}</span>
                )}
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
                  type="number"
                  onChange={formik.handleChange}
                  value={formik.values.phoneNumber}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                  <span className="error">{formik.errors.phoneNumber}</span>
                )}
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
                  type="number"
                  onChange={formik.handleChange}
                  value={formik.values.monthlySaving}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.monthlySaving &&
                  formik.errors.monthlySaving && (
                    <span className="error">{formik.errors.monthlySaving}</span>
                  )}
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
