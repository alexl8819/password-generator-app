import PropTypes from 'prop-types';

import styles from './ActionForm.module.css';
import rightArrow from '../assets/images/icon-arrow-right.svg';

import Slider from './Slider';
import CheckboxOption from './Option';

export default function PasswordGenerationForm ({ formOptions, children, canGenerate, onSubmit }) {
  return (
    <form className={styles.generationForm} onSubmit={onSubmit} noValidate>
      <div className={styles.generationFormOptions}>
        <Slider label={formOptions.charLength.label} name={formOptions.charLength.name} min={formOptions.charLength.min} max={formOptions.charLength.max} value={formOptions.charLength.currentValue} onValueChange={formOptions.charLength.onValueChange} />
        <div className={styles.generationFormOptionsIncludes}>
          {
            formOptions.includes.map((option, index) => 
              <CheckboxOption key={index} name={option.name} label={option.label} value={option.currentValue} onChange={option.onChange} />
            )
          }
        </div>
      </div>
      { children }
      <button type="submit" className={styles.generationFormSubmit} disabled={!canGenerate}>
        Generate <img src={rightArrow} className={styles.generationFormSubmitSvg} alt="right arrow icon" />
      </button>
    </form>
  );
}

PasswordGenerationForm.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  formOptions: PropTypes.object.isRequired, 
  onSubmit: PropTypes.func.isRequired,
  canGenerate: PropTypes.bool.isRequired
};
