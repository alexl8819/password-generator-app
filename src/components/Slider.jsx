import PropTypes from 'prop-types';

import styles from './Slider.module.css';

export default function Slider ({ label, name, min, max, value, onValueChange }) {
  const calculatedRange = { '--range': value, '--offset': min, '--max': max };
  const onLocalChange = ({ target }) => onValueChange(target.value);
  return (
    <div className={styles.slider}>
      <label htmlFor={name} className={styles.sliderLabelHidden}>{ label }</label>
      <input type="range" className={styles.sliderInput} style={calculatedRange} id={name} name={name} min={min} max={max} value={value} step="1" onInput={onLocalChange} />
      <div className={styles.sliderCharlengthLabel}>
        <p className={styles.sliderLabel}>{ label }</p>
        <p className={styles.sliderCharlengthValue}>{ value }</p>
      </div>
    </div>
  );
}

Slider.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  onValueChange: PropTypes.func.isRequired
};
