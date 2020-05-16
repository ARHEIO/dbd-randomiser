import { killers } from './data/killer/killers';
import { killerPerks } from './data/killer/perks';
import { randomNumberGenerator, getAddons, getPerks } from './helpers';
import { survivorItems } from './data/survivor/items';
import { SurvivorPerks } from './data/survivor/perks';
import { survivors } from './data/survivor/survivors';
import { Addon, Perk, Item, Killer, Survivor } from './models';

export interface GeneratedKiller {
  name: string;
  icon: string;
  addons: Addon[];
  perks: Perk[];
}

export const generateKiller = (): GeneratedKiller => {
  const killer: Killer = killers[randomNumberGenerator(killers.length)];
  const selectedAddons: Addon[] = getAddons(killer.upgradables);
  const selectedPerks = getPerks(killerPerks);
  return {
    name: killer.name,
    icon: killer.icon,
    addons: selectedAddons,
    perks: selectedPerks
  }
}

export const generateSurvivor = () => {
  const survivor: Survivor = survivors[randomNumberGenerator(survivors.length)];
  const item: Item = survivorItems[randomNumberGenerator(survivorItems.length)];
  const selectedAddons: Addon[] = getAddons(item.upgradables);
  const selectedPerks = getPerks(SurvivorPerks);
  return {
    name: survivor.name,
    icon: survivor.icon,
    item: item,
    addons: selectedAddons,
    perks: selectedPerks
  }
}
