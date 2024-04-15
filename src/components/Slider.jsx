import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './Slider.module.css';

export default function Slider ({ label, name, min, max, value, onChange }) {
  const rangeRef = useRef(null);
  const onValueChange = ({ target }) => {
    const changedValue = target.value;
    renderSliderProgress(rangeRef, changedValue, min, max);
    onChange(changedValue);
  };
  useEffect(() => {
    renderSliderProgress(rangeRef, value, min, max);
  }, [min, max, value]);
  return (
    <div className={styles.slider}>
      <input type="range" ref={rangeRef} className={styles.sliderInput} name={name} min={min} max={max} value={value} step="1" onInput={onValueChange} />
      <label htmlFor={name} className={styles.sliderLabelHidden}>{ label }</label>
      <div className={styles.sliderCharlengthLabel}>
        <p className={styles.sliderLabel}>{ label }</p>
        <p className={styles.sliderCharlengthValue}>{ value }</p>
      </div>
    </div>
  );
}

function renderSliderProgress (ref, currentValue, min, max) {
  const current = Math.ceil((currentValue - min) / (max - min) * 100);
  const total = 100 - current;
  ref.current.style.background = current < 50 ? `linear-gradient(to left, var(--black) ${current}% ${total}%, var(--lime-green) ${total}%)` : `linear-gradient(to right, var(--lime-green) ${current}% ${total}%, var(--black) ${total}%)`;
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
  onChange: PropTypes.func.isRequired
};
