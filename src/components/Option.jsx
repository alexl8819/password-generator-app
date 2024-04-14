import PropTypes from 'prop-types';

import styles from './Option.module.css';

export default function CheckboxOption ({ label, name, value, onChange }) {
  return (
    <div className={styles.option}>
      <input type="checkbox" className={styles.optionCheckbox} id={name} name={name} onChange={onChange} checked={value} />
      <label htmlFor={name} className={styles.optionLabel}>{ label }</label>
    </div>
  );
}

CheckboxOption.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};
