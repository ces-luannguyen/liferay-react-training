import { useSelector } from 'react-redux';
import { STEPS } from '../../constants/stepConstants';

export default function Forms() {
  const step = useSelector((state) => state.form.step);
  return STEPS[step].component;
}
