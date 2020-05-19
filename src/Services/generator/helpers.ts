import { Addon, Perk, BasicObject } from './models';

export const randomNumberGenerator = (max: number): number => Math.floor(Math.random() * max);

function getMultiple<T extends BasicObject>(arrayOfThings: T[], numberToGet: number): T[] {
  return (arrayOfThings && arrayOfThings.length
    ? arrayOfThings
      .map((x) => ({ x, r: Math.random() }))
      .sort((a, b) => a.r - b.r)
      .map((a) => a.x)
      .slice(0, numberToGet)
    : []);
}

export const getAddons = (addons: Addon[]): Addon[] => getMultiple(addons, 2);

export const getPerks = (perks: Perk[]): Addon[] => getMultiple(perks, 4);
