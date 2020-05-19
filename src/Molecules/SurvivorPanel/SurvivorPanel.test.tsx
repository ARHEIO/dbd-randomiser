import React from 'react';

import {
  render,
} from '@testing-library/react';
import pretty from 'pretty';
import SurvivorPanel from './SurvivorPanel';
import * as generators from '../../Services/generator/generate';

const defaultObject: generators.GeneratedSurvivor = {
  name: 'Adam',
  icon: 'assets/adam.png',
  addons: [
    { icon: '', name: 'Evoluent Vertical Mouse 4', rank: 5 },
    { icon: '', name: 'OLKB Preonic', rank: 5 },
  ],
  item: {
    name: 'MacBook Pro 2018',
    rank: 5,
    icon: '',
    upgradables: [],
  },
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
    const { container } = render(<SurvivorPanel survivor={defaultObject} />);
    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });

  it('should render when no addons are passed', () => {
    const addonlessObject = defaultObject;
    addonlessObject.addons = [];
    const { container } = render(<SurvivorPanel survivor={addonlessObject} />);
    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });
});
