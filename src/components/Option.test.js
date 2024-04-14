import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { jest } from '@jest/globals';

import CheckboxOption from './Option';

describe('Option component', () => {
  const noop = jest.fn();
  render(<CheckboxOption label='Test' name='test' value={false} onChange={noop} />);

  test('Should call onChange when clicked', async () => {
    fireEvent.click(screen.getByRole('checkbox'));
    await waitFor(() => expect(noop).toHaveBeenCalled());
  });
});
