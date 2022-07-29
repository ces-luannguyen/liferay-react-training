import { Container, Grid, TextField, InputLabel, Select, MenuItem } from '@mui/material';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { goNext, setFormData } from '../../form/formSlice';
import { BeneficiarySchema } from '../../helpers/schema';
import Buttons from './Buttons';
const BeneficiaryForm = () => {
  const data = useSelector((state) => state.form.data);

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: data,
    onSubmit: function (values) {
      dispatch(setFormData({ data: values }));

      dispatch(goNext());
    },
    validationSchema: BeneficiarySchema
  });
  return (
    <Container maxWidth="md">
      <h1>Beneficiary Form</h1>
      <div>
        <form onSubmit={formik.handleSubmit}>
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
                  onChange={formik.handleChange}
                  value={formik.values.beneficiaryFirstName}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.beneficiaryFirstName && formik.errors.beneficiaryFirstName && (
                  <span className="error">{formik.errors.beneficiaryFirstName}</span>
                )}
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
                  onChange={formik.handleChange}
                  value={formik.values.beneficiaryMiddleName}
                  onBlur={formik.handleBlur}
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
                  onChange={formik.handleChange}
                  value={formik.values.beneficiaryLastName}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.beneficiaryLastName && formik.errors.beneficiaryLastName && (
                  <span className="error">{formik.errors.beneficiaryLastName}</span>
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
                    shrink: true
                  }}
                  fullWidth
                  size="medium"
                  margin="normal"
                  name="beneficiaryBirthday"
                  onChange={formik.handleChange}
                  value={formik.values.beneficiaryBirthday}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.beneficiaryBirthday && formik.errors.beneficiaryBirthday && (
                  <span className="error">{formik.errors.beneficiaryBirthday}</span>
                )}
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
                  type="number"
                  onChange={formik.handleChange}
                  value={formik.values.beneficiaryIdCard}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.beneficiaryIdCard && formik.errors.beneficiaryIdCard && (
                  <span className="error">{formik.errors.beneficiaryIdCard}</span>
                )}
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
                  type="number"
                  onChange={formik.handleChange}
                  value={formik.values.beneficiaryPhoneNumber}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.beneficiaryPhoneNumber && formik.errors.beneficiaryPhoneNumber && (
                  <span className="error">{formik.errors.beneficiaryPhoneNumber}</span>
                )}
              </Grid>
              <Grid item xs={6}>
                <InputLabel id="relationship-select-label">Relationship *</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  fullWidth
                  name="relationship"
                  onChange={formik.handleChange}
                  value={formik.values.relationship}
                  onBlur={formik.handleBlur}>
                  <MenuItem value="spouse">Spouse</MenuItem>
                  <MenuItem value="children">Children</MenuItem>
                  <MenuItem value="relatives">Relatives</MenuItem>
                </Select>
                {formik.touched.relationship && formik.errors.relationship && (
                  <span className="error">{formik.errors.relationship}</span>
                )}
              </Grid>
            </Grid>
          </div>

          <Buttons retainedData={formik.values} />
        </form>
      </div>
    </Container>
  );
};

export default BeneficiaryForm;
