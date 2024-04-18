import { render, screen, within, fireEvent, waitFor, /*prettyDOM*/ } from '@testing-library/react';
import { jest } from '@jest/globals';

import App from './App';

describe('App component', () => {
  const { container } = render(<App />);

  const charLengthSlider = container.querySelector('input[type="range"]');
  const formContainer = container.querySelector('form');

  test('Should display the number 13 as a value chosen when slider value becomes 13', async () => {
    fireEvent.input(charLengthSlider, { target: { value: 13 }});
    await waitFor(() => expect(screen.getByText('13')).toHaveTextContent('13'));
  });

  test('Should be able to select an include option', async () => {
    fireEvent.click(within(formContainer).getByRole('checkbox', { name: 'Include Uppercase Letters' }));
    await waitFor(() => expect(within(formContainer).getByLabelText('Include Uppercase Letters')).toBeChecked());
  });

  /*test('Should be able to generate a password as long as charlength is greater than 0 and 1 or more options have been selected', async () => {
    // console.log(prettyDOM(formContainer));
    expect(within(formContainer).getByRole('button')).toBeEnabled();
  });*/

  /*test('Should be able to copy password to clipboard', () => {
    fireEvent.click(screen.getByRole('button', { name: /copy/i }));
    await waitFor(() => expect(onCopy).toHaveBeenCalled());
  });*/
});
