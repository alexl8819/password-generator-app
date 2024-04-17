import { render, fireEvent, waitFor } from '@testing-library/react';
import { jest } from '@jest/globals';

import Slider from './Slider';

const noop = jest.fn();

describe('Slider component', () => {
  const { container } = render(<Slider label='Test' name='test' min={1} max={20} value={5} onValueChange={noop} />);
  const slider = container.querySelector('input[type="range"]');

  test('Should trigger onValueChange fn whenever value is changed from input', async () => {
    await fireEvent.input(slider, { target: { value: 10 }});
    await waitFor(() => expect(noop).toHaveBeenCalled());
  });
});
