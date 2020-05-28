import React, { ReactElement } from 'react';

import {
  render, fireEvent, wait, act,
} from '@testing-library/react';
import pretty from 'pretty';
import SurvivorView from './SurvivorView';
import * as generators from '../../Services/generator/generateLoadoutApi';

jest.mock('../../Molecules/SurvivorPanel/SurvivorPanel', () => (): ReactElement => (<p>SurvivorPanel</p>));
describe('Search View', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should render', () => {
    const { container } = render(<SurvivorView />);
    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });

  it('should generate a survivor loadout', async () => {
    const survivorSpy = jest.spyOn(generators, 'generateSurvivor').mockImplementation(jest.fn(() => Promise.resolve({} as any)));
    render(<SurvivorView />);
    await wait(() => {
      expect(survivorSpy).toHaveBeenCalledTimes(1);
    });
  });

  it('should generate a new survivor loadout on button press', async () => {
    const survivorSpy = jest.spyOn(generators, 'generateSurvivor').mockImplementation(jest.fn(() => Promise.resolve({} as any)));
    const { container } = render(<SurvivorView />);
    await wait(() => {
      expect(survivorSpy).toHaveBeenCalledTimes(1);
    });

    const button = container.querySelector('.btn-generate-survivor');
    if (button) {
      await act(async () => {
        fireEvent.click(button);
      });
      await wait(() => {
        expect(survivorSpy).toHaveBeenCalledTimes(2);
      });
    } else {
      expect(true).toBeFalsy();
    }
  });
});
