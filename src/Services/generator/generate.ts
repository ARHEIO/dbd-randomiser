import { killers } from './data/killer/killers';
import { killerPerks } from './data/killer/perks';
import { randomNumberGenerator, getAddons, getPerks } from './helpers';
import { survivorItems } from './data/survivor/items';
import { SurvivorPerks } from './data/survivor/perks';
import { Addon, Perk, Item, Killer } from './models';

export interface GeneratedKiller {
  name: string;
  killerIcon: string;
  addons: Addon[];
  perks: Perk[];
}

export const generateKiller = () => {
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
  const item: Item = survivorItems[randomNumberGenerator(survivorItems.length)];
  const selectedAddons: Addon[] = getAddons(item.upgradables);
  const selectedPerks = getPerks(SurvivorPerks);
  return {
    item: item,
    icon: item.icon,
    addons: selectedAddons,
    perks: selectedPerks
  }
}
