import React, { ReactElement } from 'react';
import {
  render, fireEvent, wait, act,
} from '@testing-library/react';
import pretty from 'pretty';
import KillerView from './KillerView';

import * as generators from '../../Services/generator/generateLoadoutApi';

jest.mock('../../Molecules/KillerPanel/KillerPanel', () => (): ReactElement => (<p>KillerPanel</p>));
describe('Killer View', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should render', () => {
    const { container } = render(<KillerView />);
    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });

  it('should generate a killer loadout', async () => {
    const killerSpy = jest.spyOn(generators, 'generateKiller').mockImplementation(jest.fn(() => Promise.resolve({} as any)));
    render(<KillerView />);
    await wait(() => {
      expect(killerSpy).toHaveBeenCalledTimes(1);
    });
  });

  it('should generate a new killer loadout on button press', async () => {
    const killerSpy = jest.spyOn(generators, 'generateKiller').mockImplementation(jest.fn(() => Promise.resolve({} as any)));
    const { container } = render(<KillerView />);
    await wait(() => {
      expect(killerSpy).toHaveBeenCalledTimes(1);
    });

    const button = container.querySelector('.btn-generate-killer');
    if (button) {
      await act(async () => {
        fireEvent.click(button);
      });
      await wait(() => {
        expect(killerSpy).toHaveBeenCalledTimes(2);
      });
    } else {
      expect(true).toBeFalsy();
    }
  });
});
