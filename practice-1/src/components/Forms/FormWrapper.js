import { Container } from '@mui/material';
import Buttons from './Buttons';
import PropTypes from 'prop-types';
import { STEPS } from '../../constants/stepConstants';
import { useSelector } from 'react-redux';

export default function FormWrapper({ children, submit, values }) {
  const step = useSelector((state) => state.form.step);
  return (
    <Container maxWidth="md">
      <h1>{STEPS[step].title}</h1>
      <form onSubmit={submit}>
        {children}
        <Buttons retainedData={values} />
      </form>
    </Container>
  );
}
FormWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element.isRequired
  ]),
  submit: PropTypes.func,
  values: PropTypes.object
};
