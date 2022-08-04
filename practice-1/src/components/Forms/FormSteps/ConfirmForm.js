import { Alert, Checkbox, FormControlLabel, FormGroup, Grid } from '@mui/material';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TERM_AGREEMENT_LABEL } from '../../../constants/messageConstants';
import { setFormData, goNext } from '../../../form/formSlice';
import { confirmSchema } from '../../../helpers/schema';
import { createInsuranceProfile } from '../../../services/insuranceProfileService';
import FormWrapper from '../FormWrapper';

const ConfirmForm = () => {
  const data = useSelector((state) => state.form.data);
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: data,
    onSubmit: async function (values) {
      dispatch(setFormData({ data: values }));

      try {
        await createInsuranceProfile(data);

        dispatch(goNext());
      } catch (error) {
        setError(error.message);
      }
    },
    validationSchema: confirmSchema
  });

  return (
    <FormWrapper submit={formik.handleSubmit} values={formik.values}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div>
            Please see the detailed contract &nbsp;
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.chubb.com/content/dam/chubb-sites/chubb-com/personal/future-asset-management-universal-life/documents/pdf/easset_upload_file46289_1304437_e.pdf">
              here
            </a>
          </div>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  name="agreeSubmit"
                  onChange={formik.handleChange}
                  checked={formik.values.agreeSubmit}
                />
              }
              label={TERM_AGREEMENT_LABEL}
            />
          </FormGroup>
          {formik.errors.agreeSubmit && <Alert severity="error">{formik.errors.agreeSubmit}</Alert>}
          {error && <Alert severity="error">{error}</Alert>}
        </Grid>
      </Grid>
    </FormWrapper>
  );
};

export default ConfirmForm;
