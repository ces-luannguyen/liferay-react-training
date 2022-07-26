import { useDispatch, useSelector } from "react-redux";
import { goNext, goPrev, setData, setError } from "../form/formSlice";
import { Button, Container, Grid } from "@mui/material";
import React from "react";
import { createInsuranceProfile } from "../services/insuranceProfileService";
const ConfirmForm = (props) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.form.data);
  const error = useSelector((state) => state.form.error);

  const submitForm = async () => {
    try {
      await createInsuranceProfile(data);
      dispatch(goNext());
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.agreeSubmit === false) {
      dispatch(
        setError({
          fieldName: "agreeSubmit",
          error: "Term agreement must be checked",
        })
      );
      return;
    } else {
      dispatch(setError({ fieldName: "agreeSubmit", error: "" }));
      submitForm();
    }
  };

  const agreeSubmitHandler = (e) => {
    dispatch(setData({ fieldName: "agreeSubmit", value: !data.agreeSubmit }));
  };

  const _goPrev = (e) => {
    dispatch(goPrev());
  };

  return (
    <div>
      <Container maxWidth="md">
        <div>
          <form onSubmit={handleSubmit}>
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
                    checked={data.agreeSubmit}
                    onChange={agreeSubmitHandler}
                  />{" "}
                  I agree to submit my information to the Insurance Company
                  after checking the online contract
                  <div id="agreement-error" style={{ color: "red" }}>
                    {error.agreeSubmit}
                  </div>
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
