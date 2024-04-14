import PropTypes from 'prop-types';

import SliderDisplay from './Slider';
import CheckboxOption from './Option';
import styles from './PasswordOptions.module.css';

export default function PasswordOptions ({ options }) {
  return (
    <div className={styles.passwordOptions}>
      <SliderDisplay label={options.charLength.label} name={options.charLength.name} min={options.charLength.min} max={options.charLength.max} value={options.charLength.currentValue} onChange={options.charLength.onChange} />
      <div className={styles.passwordOptionsIncludes}>
      {
        options.includes.map((option, index) => <CheckboxOption key={index} name={option.name} label={option.label} value={option.currentValue} onChange={option.onChange} />)
      }
      </div>
    </div>
  );
}

PasswordOptions.propTypes = {
  options: PropTypes.object.isRequired
};
