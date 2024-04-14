import PropTypes from 'prop-types';

import styles from './ActionForm.module.css';
import rightArrow from '../assets/images/icon-arrow-right.svg';

export default function PasswordGenerationForm ({ children, canGenerate, onSubmit }) {
  return (
    <form className={styles.generationForm} onSubmit={onSubmit} noValidate>
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
  onSubmit: PropTypes.func.isRequired,
  canGenerate: PropTypes.bool.isRequired
};
