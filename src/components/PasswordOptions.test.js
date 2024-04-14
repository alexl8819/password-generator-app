import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { jest } from '@jest/globals';

import PasswordOptions from './Option';

const formOptions = Object.freeze({
    charLength: {
      label: 'Character Length',
      name: 'charlengh',
      min: 6,
      max: 20,
      currentValue: '',
      onChange: (value) => setCharLength(value)
    },
    includes: [
    {
      label: 'Include Uppercase Letters',
      name: 'uppercase',
      currentValue: false,
      onChange: () => {}
    }],
  });

describe('PasswordOptions component', () => {
  render(<PasswordOptions options={formOptions} />);

  test('Should contain one slider and one include option', () => {
    expect();
  });
});
