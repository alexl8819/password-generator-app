import { render, screen } from '@testing-library/react';

import ActionForm from './ActionForm';

const noop = () => {};

describe('ActionForm component', () => {
  render(<ActionForm canGenerate={false} onSubmit={noop} />);

  test('Should only be able to submit if canGenerate is true', () => {
    expect(screen.getByText('Generate')).toBeDisabled();
  });
});
