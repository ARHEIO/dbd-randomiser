import React from 'react';
import { render } from '@testing-library/react';
import pretty from 'pretty';
import { MemoryRouter } from 'react-router-dom';
import LandingView from './LandingView';

describe('Landing View', () => {
  it('should render', () => {
    const { container } = render(
      <MemoryRouter>
        <LandingView />
      </MemoryRouter>,
    );
    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });
});
