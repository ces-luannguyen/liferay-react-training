import { Button, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { goPrev, setFormData } from '../../form/formSlice';

export default function Buttons(props) {
  const dispatch = useDispatch();
  const step = useSelector((state) => state.form.step);
  const goBack = () => {
    dispatch(setFormData({ data: props.retainedData }));
    dispatch(goPrev());
  };
  return (
    <Grid container direction="row" justifyContent="space-between" alignItems="center">
      {step > 0 && (
        <Button variant="contained" onClick={goBack}>
          Previous
        </Button>
      )}
      <Button variant="contained" type="submit">
        Next
      </Button>
    </Grid>
  );
}
