import React from 'react';
import { render } from '@testing-library/react';
import SurvivorView from './SurvivorView';

test('renders learn react link', () => {
  const { getByText } = render(<SurvivorView />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
