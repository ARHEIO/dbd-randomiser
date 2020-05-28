import React from 'react';

import {
  render,
} from '@testing-library/react';
import pretty from 'pretty';
import SurvivorPanel from './SurvivorPanel';
import { GeneratedSurvivor } from '../../Services/generator/models';

const defaultObject: GeneratedSurvivor = {
  name: 'Adam',
  icon: 'assets/adam.png',
  item: {
    addons: [
      { icon: '', name: 'Evoluent Vertical Mouse 4', rank: 5 },
      { icon: '', name: 'OLKB Preonic', rank: 5 },
    ],
    name: 'MacBook Pro 2018',
    rank: 5,
    icon: '',
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
    addonlessObject.item.addons = [];
    const { container } = render(<SurvivorPanel survivor={addonlessObject} />);
    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });
});
