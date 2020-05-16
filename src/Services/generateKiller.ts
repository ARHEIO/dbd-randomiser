// pick one killer
// pick two killer addons
// pick 4 perks
import { killers, IKiller } from './Killers/killers';
import { killerAddons, IKillerAddon } from './Addons/addons.killer';
import { killerPerks } from './Perks/perks.killer';
import { getMultiple, randomNumberGenerator } from './helpers';

const getAddons = (killerAddons: IKillerAddon[]) => getMultiple(killerAddons, 2)

const getPerks = (killerPerks: any[]) => getMultiple(killerPerks, 4)

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
