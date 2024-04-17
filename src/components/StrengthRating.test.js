import { render } from '@testing-library/react';

import StrengthRating from './StrengthRating';
import { Rating } from '../util/rating';

describe('StrengthRating component', () => {
  const { container } = render(<StrengthRating rating={Rating.WEAK} />);
  const listContainer = container.querySelector('ul');
  const list = listContainer.querySelectorAll('li');

  test('StrengthRating should always contain a data attribute of the current rating', () => {
    expect(listContainer).toHaveAttribute('data-rating', 'weak');
  });
  test('StrengthRating should take any rating and display four bars', () => {
    expect(list).toHaveLength(4);
  });
});
