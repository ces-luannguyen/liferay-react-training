import { Grid, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { goNext, setFormData } from '../../../form/formSlice';
import { insuranceSchema } from '../../../helpers/schema';
import FormWrapper from '../FormWrapper';
const InsuranceForm = () => {
  const data = useSelector((state) => state.form.data);

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: data,
    onSubmit: function (values) {
      dispatch(setFormData({ data: values }));

      dispatch(goNext());
    },
    validationSchema: insuranceSchema
  });
  return (
    <FormWrapper submit={formik.handleSubmit} values={formik.values}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField
            error={formik.touched.firstName && !!formik.errors.firstName}
            fullWidth
            label="First Name *"
            name="firstName"
            variant="filled"
            size="small"
            margin="normal"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            onBlur={formik.handleBlur}
            helperText={formik.touched.firstName && formik.errors.firstName}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
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
            error={formik.touched.lastName && !!formik.errors.lastName}
            fullWidth
            label="Last Name *"
            name="lastName"
            variant="filled"
            size="small"
            margin="normal"
            onChange={formik.handleChange}
            value={formik.values.lastName}
            onBlur={formik.handleBlur}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            error={formik.touched.birthday && !!formik.errors.birthday}
            id="date"
            label="Birthday *"
            type="date"
            InputLabelProps={{
              shrink: true
            }}
            fullWidth
            size="medium"
            margin="normal"
            name="birthday"
            onChange={formik.handleChange}
            value={formik.values.birthday}
            onBlur={formik.handleBlur}
            helperText={formik.touched.birthday && formik.errors.birthday}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            error={formik.touched.idCard && !!formik.errors.idCard}
            fullWidth
            label="ID Card *"
            name="idCard"
            variant="filled"
            size="small"
            margin="normal"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.idCard}
            onBlur={formik.handleBlur}
            helperText={formik.touched.idCard && formik.errors.idCard}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            error={formik.touched.phoneNumber && !!formik.errors.phoneNumber}
            fullWidth
            label="Phone Number *"
            name="phoneNumber"
            variant="filled"
            size="small"
            margin="normal"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
            onBlur={formik.handleBlur}
            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            error={formik.touched.monthlySaving && !!formik.errors.monthlySaving}
            fullWidth
            label="Monthly Saving *"
            name="monthlySaving"
            variant="filled"
            size="small"
            margin="normal"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.monthlySaving}
            onBlur={formik.handleBlur}
            helperText={formik.touched.monthlySaving && formik.errors.monthlySaving}
          />
        </Grid>
      </Grid>
    </FormWrapper>
  );
};

export default InsuranceForm;
