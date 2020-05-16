import React from 'react';
import { render } from '@testing-library/react';
import Survivor from './Survivor';

test('renders learn react link', () => {
  const { getByText } = render(<Survivor />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
