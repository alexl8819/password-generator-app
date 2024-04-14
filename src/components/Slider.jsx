import PropTypes from 'prop-types';

import styles from './Slider.module.css';

export default function SliderDisplay ({ label, name, min, max, value, onChange }) {
  const onValueChange = ({ target }) => {
    const value = target.value;
    /*const percentageUsed = '50%';/// Math.ceil();*/
    // charLengthRef.current.style.background = `linear-gradient(to right, var(--lime-green), ${percentageUsed}, var(--black))`;
    onChange(value);
  }
  return (
    <div className={styles.slider}>
      <input type="range" className={styles.sliderInput} name={name} min={min} max={max} value={value} step="1" onInput={onValueChange} />
      <div className={styles.sliderCharlengthLabel}>
        <label htmlFor={name} className={styles.sliderLabel}>{ label }</label>
        <p className={styles.sliderCharlengthValue}>{ value }</p>
      </div>
    </div>
  );
}

SliderDisplay.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  onChange: PropTypes.func.isRequired
};
