import { render, screen } from '@testing-library/react';
import { jest } from '@jest/globals';

import ActionForm from './ActionForm';

const noop = jest.fn();

const formOptions = {
  charLength: {
    label: 'Test Value',
    name: 'test',
    min: 10,
    max: 20,
    currentValue: 10,
    onValueChange: () => {}
  },
  includes: [
    {
      label: 'Test Checkbox',
      name: 'testCheckbox',
      currentValue: false,
      onChange: () => {}
    }
  ]
 };


describe('ActionForm component', () => {
  render(<ActionForm formOptions={formOptions} canGenerate={false} onSubmit={noop} />);

  test('Should only be able to submit if canGenerate is true', () => {
    expect(screen.getByText('Generate')).toBeDisabled();
  });
});
