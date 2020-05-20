import { killers } from './data/killer/killers';
import { killerPerks } from './data/killer/perks';
import { randomNumberGenerator, getAddons, getPerks } from './helpers';
import { survivorItems } from './data/survivor/items';
import { SurvivorPerks } from './data/survivor/perks';
import { survivors } from './data/survivor/survivors';
import {
  Addon, Perk, Item, Killer, Survivor,
} from './models';

export interface GeneratedKiller {
  name: string;
  icon: string;
  addons: Addon[];
  perks: Perk[];
}

export const generateKiller = (): Promise<GeneratedKiller> => new Promise((resolve) => {
  setTimeout(() => { // simulate api call
    const killer: Killer = killers[randomNumberGenerator(killers.length)];
    const selectedAddons: Addon[] = getAddons(killer.upgradables);
    const selectedPerks = getPerks(killerPerks);
    resolve({
      name: killer.name,
      icon: killer.icon,
      addons: selectedAddons,
      perks: selectedPerks,
    });
  }, 100);
});

export interface GeneratedSurvivor {
  name: string;
  icon: string;
  item: Item;
  addons: Addon[];
  perks: Perk[];
}

export const generateSurvivor = (): Promise<GeneratedSurvivor> => new Promise((resolve) => {
  setTimeout(() => { // simulate api call
    const survivor: Survivor = survivors[randomNumberGenerator(survivors.length)];
    const item: Item = survivorItems[randomNumberGenerator(survivorItems.length)];
    const selectedAddons: Addon[] = getAddons(item.upgradables);
    const selectedPerks = getPerks(SurvivorPerks);
    resolve({
      name: survivor.name,
      icon: survivor.icon,
      item,
      addons: selectedAddons,
      perks: selectedPerks,
    });
  }, 100);
});