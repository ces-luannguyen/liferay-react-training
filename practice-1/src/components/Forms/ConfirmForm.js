import { Container, Grid } from '@mui/material';
import { red } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFormData, goNext } from '../../form/formSlice';
import { ConfirmSchema } from '../../helpers/schema';
import { createInsuranceProfile } from '../../services/insuranceProfileService';
import Buttons from './Buttons';

const useStyles = makeStyles((theme) => ({
  error: {
    color: red[500]
  }
}));

const ConfirmForm = () => {
  const classes = useStyles();
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
    validationSchema: ConfirmSchema
  });

  return (
    <Container maxWidth="md">
      <div>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <h1>Terms and Agreements</h1>
                <div>
                  Please see the detailed contract &nbsp;
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.chubb.com/content/dam/chubb-sites/chubb-com/personal/future-asset-management-universal-life/documents/pdf/easset_upload_file46289_1304437_e.pdf">
                    here
                  </a>
                </div>
                <input
                  type="checkbox"
                  name="agreeSubmit"
                  id="agreeSubmit"
                  onChange={formik.handleChange}
                  checked={formik.values.agreeSubmit}
                />
                I agree to submit my information to the Insurance Company after checking the online
                contract
                <div className={classes.error}>{formik.errors.agreeSubmit}</div>
                <div className={classes.error}>{error}</div>
              </Grid>
            </Grid>
          </div>

          <Buttons retainedData={formik.values} />
        </form>
      </div>
    </Container>
  );
};

export default ConfirmForm;
