import { Button, Container, Grid } from "@mui/material";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFormData, goPrev, goNext } from "../form/formSlice";
import { ConfirmSchema } from "../helpers/schema";
import { createInsuranceProfile } from "../services/insuranceProfileService";
const ConfirmForm = (props) => {
  const data = useSelector((state) => state.form.data);
  const [error, setError] = useState();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setError("");
    }, [5000]);
    return () => clearTimeout(timeoutId);
  }, [error]);

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
    validationSchema: ConfirmSchema,
  });
  const _goPrev = (e) => {
    dispatch(setFormData({ data: formik.values }));
    dispatch(goPrev());
  };

  return (
    <div>
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
                      href="https://www.chubb.com/content/dam/chubb-sites/chubb-com/personal/future-asset-management-universal-life/documents/pdf/easset_upload_file46289_1304437_e.pdf"
                    >
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
                  I agree to submit my information to the Insurance Company
                  after checking the online contract
                  <div className="error">{formik.errors.agreeSubmit}</div>
                  <div className="error">{error}</div>
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
                Submit
              </Button>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default ConfirmForm;
