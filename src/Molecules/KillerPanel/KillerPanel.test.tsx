import React from 'react';

import { render } from '@testing-library/react';
import pretty from 'pretty';
import KillerPanel from './KillerPanel';
import * as generators from '../../Services/generator/generate';

const defaultObject: generators.GeneratedKiller = {
  name: 'Adam',
  icon: 'assets/adam.png',
  addons: [
    { icon: '', name: 'Evoluent Vertical Mouse 4', rank: 5 },
    { icon: '', name: 'OLKB Preonic', rank: 5 },
  ],
  perks: [
    { icon: '', rank: 5, name: 'Archetecture' },
    { icon: '', rank: 5, name: 'Dockerised' },
    { icon: '', rank: 5, name: 'Carpel Tunneling' },
    { icon: '', rank: 5, name: '8 Hour Nap' },
  ],
};

describe('Search View', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should render when the default object is passed', () => {
    const { container } = render(<KillerPanel killer={defaultObject} />);
    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });
});
