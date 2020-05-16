// pick one killer
// pick two killer addons
// pick 4 perks
import { survivorItems } from './Items/items.survivor';
import { survivorAddons } from './Addons/addons.survivor';
import { SurvivorPerks } from './Perks/perks.survivor';
import { getMultiple, randomNumberGenerator } from './helpers';
import { IGameObject } from './Common/game-object.model';

const getAddons = (survivorAddons: IGameObject[]) => getMultiple(survivorAddons, 2)

const getPerks = (killerPerks: any[]) => getMultiple(killerPerks, 4)

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
