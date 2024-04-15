import { useState } from 'react';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './PasswordBar.module.css';
import copyBtn from '../assets/images/icon-copy.svg';

const cx = classnames.bind(styles);

export default function PasswordBar ({ passwordCopy, onCopy }) {
  const [hasCopied, setHasCopied] = useState(false);
  // TODO: Effect should be pure CSS solution
  const handleCopy = (e) => {
    e.preventDefault();
    if (!hasCopied) {
      setHasCopied(true);
      setTimeout(() => setHasCopied(false), 3000);
      onCopy();
    }
  };
  
  return (
    <div className={styles.passwordBar}>
      <input type="text" id="password" name="password" value={passwordCopy} className={styles.passwordBarInput} placeholder="P4$5W0rD!" readOnly />
      <label htmlFor="password" className={styles.passwordBarLabelHidden}>Password</label>
      <button className={cx({ passwordBarButton: true, passwordBarButtonActivated: hasCopied })} onClick={handleCopy} disabled={!passwordCopy || !passwordCopy.length} aria-label='copy'>
        <img src={copyBtn} className={styles.passwordBarButtonCopyimg} alt="copy icon" />
      </button>
    </div>
  );
}

PasswordBar.propTypes = {
  passwordCopy: PropTypes.string.isRequired,
  onCopy: PropTypes.func.isRequired
};
