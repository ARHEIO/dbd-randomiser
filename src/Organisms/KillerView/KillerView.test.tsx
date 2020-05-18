import React from 'react';
import { render } from '@testing-library/react';
import KillerView from './KillerView';

test('renders learn react link', () => {
  const { getByText } = render(<KillerView />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
