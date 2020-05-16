import { killers, IKiller } from './Killers/killers';
import { killerAddons } from './Addons/addons.killer';
import { killerPerks } from './Perks/perks.killer';
import { randomNumberGenerator, getAddons, getPerks } from './helpers';
import { survivorItems } from './Items/items.survivor';
import { survivorAddons } from './Addons/addons.survivor';
import { SurvivorPerks } from './Perks/perks.survivor';
import { IGameObject } from './Common/game-object.model';

export const generateKiller = () => {
  const killer: IKiller = killers[randomNumberGenerator(killers.length)];
  const selectedAddons = getAddons((<any>killerAddons)[`${killer.link}`]);
  const selectedPerks = getPerks(killerPerks);
  return {
    name: killer.name,
    addons: selectedAddons,
    perks: selectedPerks
  }
}

export const generateSurvivor = () => {
  const item: IGameObject = survivorItems[randomNumberGenerator(survivorItems.length)];
  const selectedAddons = getAddons((<any>survivorAddons)[`${item.link}`]);
  const selectedPerks = getPerks(SurvivorPerks);
  return {
    item: item,
    addons: selectedAddons,
    perks: selectedPerks
  }
}
