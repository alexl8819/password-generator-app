import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { jest } from '@jest/globals';

import PasswordBar from './PasswordBar';

describe('PasswordBar component', () => {
  const passwordCopy = 'ptdtwVtFL1';
  const onCopy = jest.fn();

  const { container } = render(<PasswordBar passwordCopy={passwordCopy} onCopy={onCopy} />);

  const innerInput = container.querySelector('input[type="text"]');

  test('Should trigger onCopy fn when copy is called', async () => {
    fireEvent.click(screen.getByRole('button', { name: /copy/i }));
    await waitFor(() => expect(onCopy).toHaveBeenCalled());
  });
  test('Should display passwordCopy prop as value', () => {
    expect(innerInput).toHaveDisplayValue(passwordCopy);
  });
});
