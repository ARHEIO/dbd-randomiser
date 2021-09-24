import deadByDaylight, { AddonModel, Killer, PerkModel } from '@stephenpoole/deadbydaylight';
import { KillerLoadout } from '../types/killer';
import { SurvivorLoadout } from '../types/survivor';
import { pickNumber } from '../utils/pickNumber';

export const generateSurvivorLoadout = (client: ReturnType<typeof deadByDaylight>): SurvivorLoadout => {
  const survivor = client.randomSurvivor();
  const item = client.randomItem();
  const addons = pickNumber(client.survivorAddons(item.type), 2);
  const perks = pickNumber(client.survivorPerks(), 4);

  return {
    icon: survivor.image,
    name: survivor.name,
    item: {
      name: item.name,
      icon: item.image,
      rank: item.rarity,
      addons: mapAddons(addons)
    },
    perks: mapPerks(perks),
  }
}

export const generateKillerLoadout = (client: ReturnType<typeof deadByDaylight>): KillerLoadout => {
  const {power, ...killer} = client.randomKiller();
  const addons = pickNumber(client.factory.killerAddon.getModelsByOwner(killer.index), 2);
  const perks = pickNumber(client.killerPerks(), 4);

  return {
    icon: killer.image,
    name: killer.name,
    power: {
      name: power.name,
      icon: power.image,
      rank: -1,
      addons: mapAddons(addons)
    },
    perks: mapPerks(perks),
  }
}

const mapPerks = (perks: PerkModel[]) => perks.map((perk: PerkModel) => ({
  icon: perk.image,
  name: perk.name,
  rank: (perk.rarity as number)
}))

const mapAddons = (addons: AddonModel[]) => addons.map((addon: AddonModel) => ({
  icon: addon.image,
  name: addon.name,
  rank: (addon.rarity as number),
}))

