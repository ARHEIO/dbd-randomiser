import React from 'react';

import {
  render,
} from '@testing-library/react';
import pretty from 'pretty';
import DiamondIcon from './DiamondIcon';

describe('Diamond Icon', () => {
  it('should render when the default object is passed', () => {
    const { container } = render(<DiamondIcon name="Adam" rank={1} icon="" />);
    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });

  it('should render even when rank is null', () => {
    const { container } = render(<DiamondIcon name="Adam" rank={null} icon="" />);
    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });
});
