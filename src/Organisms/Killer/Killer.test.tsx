import React from 'react';
import { render } from '@testing-library/react';
import Killer from './Killer';

test('renders learn react link', () => {
  const { getByText } = render(<Killer />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
