import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './Slider.module.css';

export default function Slider ({ label, name, min, max, value, onChange }) {
  const rangeRef = useRef(null);
  const onValueChange = ({ target }) => {
    const changedValue = target.value;
    renderSliderProgress(rangeRef.current, changedValue, min, max);
    onChange(changedValue);
  };
  useEffect(() => {
    renderSliderProgress(rangeRef.current, value, min, max);
  }, [min, max, value]);
  return (
    <div className={styles.slider}>
      <label htmlFor={name} className={styles.sliderLabelHidden}>{ label }</label>
      <input type="range" ref={rangeRef} className={styles.sliderInput} id={name} name={name} min={min} max={max} value={value} step="1" onInput={onValueChange} />
      <div className={styles.sliderCharlengthLabel}>
        <p className={styles.sliderLabel}>{ label }</p>
        <p className={styles.sliderCharlengthValue}>{ value }</p>
      </div>
    </div>
  );
}

function renderSliderProgress (el, currentValue, min, max) {
  const current = Math.ceil((currentValue - min) / (max - min) * 100);
  const rem = 100 - current;
  el.style.background = current < 50 ? `linear-gradient(to left, var(--black) ${current}% ${rem}%, var(--lime-green) ${rem}%)` : `linear-gradient(to right, var(--lime-green) ${current}% ${rem}%, var(--black) ${rem}%)`;
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