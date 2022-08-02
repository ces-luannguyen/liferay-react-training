import { Button, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { steps } from '../../constants/stepConstants';
import { goPrev, setFormData } from '../../form/formSlice';
import PropTypes from 'prop-types';
export default function Buttons(props) {
  const { retainedData } = props;
  const dispatch = useDispatch();
  const step = useSelector((state) => state.form.step);
  const goBack = () => {
    dispatch(setFormData({ data: retainedData }));
    dispatch(goPrev());
  };

  const submitButtonText = step == steps.length - 2 ? 'Submit' : 'Next';
  return (
    <Grid container direction="row" justifyContent="space-between" alignItems="center">
      {step > 0 && (
        <Button variant="contained" onClick={goBack}>
          Previous
        </Button>
      )}
      <Button variant="contained" type="submit">
        {submitButtonText}
      </Button>
    </Grid>
  );
}

Buttons.propTypes = {
  retainedData: PropTypes.object
};
