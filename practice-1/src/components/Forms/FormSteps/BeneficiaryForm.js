import { Grid, TextField, InputLabel, MenuItem } from '@mui/material';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { RELATIONSHIPS } from '../../../constants/relationshipConstants';
import { goNext, setFormData } from '../../../form/formSlice';
import { beneficiarySchema } from '../../../helpers/schema';
import FormWrapper from '../FormWrapper';
const BeneficiaryForm = () => {
  const data = useSelector((state) => state.form.data);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: data,
    onSubmit: function (values) {
      dispatch(setFormData({ data: values }));

      dispatch(goNext());
    },
    validationSchema: beneficiarySchema
  });
  return (
    <FormWrapper submit={formik.handleSubmit} values={formik.values}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField
            error={formik.touched.beneficiaryFirstName && !!formik.errors.beneficiaryFirstName}
            fullWidth
            label="First Name *"
            name="beneficiaryFirstName"
            variant="filled"
            size="small"
            margin="normal"
            onChange={formik.handleChange}
            value={formik.values.beneficiaryFirstName}
            onBlur={formik.handleBlur}
            helperText={formik.touched.beneficiaryFirstName && formik.errors.beneficiaryFirstName}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
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
            error={formik.touched.beneficiaryLastName && !!formik.errors.beneficiaryLastName}
            fullWidth
            label="Last Name *"
            name="beneficiaryLastName"
            variant="filled"
            size="small"
            margin="normal"
            onChange={formik.handleChange}
            value={formik.values.beneficiaryLastName}
            onBlur={formik.handleBlur}
            helperText={formik.touched.beneficiaryLastName && formik.errors.beneficiaryLastName}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            error={formik.touched.beneficiaryBirthday && !!formik.errors.beneficiaryBirthday}
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
            helperText={formik.touched.beneficiaryBirthday && formik.errors.beneficiaryBirthday}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            error={formik.touched.beneficiaryIdCard && !!formik.errors.beneficiaryIdCard}
            fullWidth
            label="ID Card *"
            name="beneficiaryIdCard"
            variant="filled"
            size="small"
            margin="normal"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.beneficiaryIdCard}
            onBlur={formik.handleBlur}
            helperText={formik.touched.beneficiaryIdCard && formik.errors.beneficiaryIdCard}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            error={formik.touched.beneficiaryPhoneNumber && !!formik.errors.beneficiaryPhoneNumber}
            fullWidth
            label="Phone Number *"
            name="beneficiaryPhoneNumber"
            variant="filled"
            size="small"
            margin="normal"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.beneficiaryPhoneNumber}
            onBlur={formik.handleBlur}
            helperText={
              formik.touched.beneficiaryPhoneNumber && formik.errors.beneficiaryPhoneNumber
            }
          />
        </Grid>
        <Grid item xs={6}>
          <InputLabel id="relationship-select-label">Relationship *</InputLabel>
          <TextField
            select
            error={formik.touched.relationship && !!formik.errors.relationship}
            fullWidth
            name="relationship"
            onChange={formik.handleChange}
            value={formik.values.relationship}
            onBlur={formik.handleBlur}
            helperText={formik.touched.relationship && formik.errors.relationship}>
            {RELATIONSHIPS.map((ele, index) => {
              return (
                <MenuItem value={ele.value} key={index}>
                  {ele.label}
                </MenuItem>
              );
            })}
          </TextField>
        </Grid>
      </Grid>
    </FormWrapper>
  );
};

export default BeneficiaryForm;
