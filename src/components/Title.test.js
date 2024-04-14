import { render, screen } from '@testing-library/react';

import Title from './Title';

describe('Title component', () => {
  render(<Title text="My Custom Title" />);

  test('Should have rendered the text My Custom Title', () => {
    expect(screen.getByText('My Custom Title')).toHaveTextContent('My Custom Title');
  });
});

