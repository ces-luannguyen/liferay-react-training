import { useSelector } from 'react-redux';
import { steps } from '../../constants/stepConstants';

export default function FormWrapper() {
  const step = useSelector((state) => state.form.step);
  return steps[step].component;
}
