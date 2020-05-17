import { Item, IRank } from "../../models";
import * as survivorAddons from './addons';


export const survivorItems: Item[] = [
  {
    name: `All Hallows' Eve Lunchbox`,
    rank: IRank.GOLD,
    icon: 'assets/survivor/items/iconItems_medkitHalloween.png',
    upgradables: survivorAddons.medkit
  },
  {
    name: `Chinese Firecracker`,
    rank: IRank.GOLD,
    icon: 'assets/survivor/items/iconItems_chineseFirecracker.png',
    upgradables: survivorAddons.firecracker
  },
  {
    name: `Third Year Party Starter`,
    rank: IRank.GOLD,
    icon: 'assets/survivor/items/iconItems_partyPopper.png',
    upgradables: survivorAddons.firecracker
  },
  {
    name: `Will O' Wisp`,
    rank: IRank.GOLD,
    icon: 'assets/survivor/items/iconItems_flashlightHalloween.png',
    upgradables: survivorAddons.flashlight
  },
  {
    name: `Winter Party Starter`,
    rank: IRank.GOLD,
    icon: 'assets/survivor/items/iconItems_winterEventFirecracker.png',
    upgradables: survivorAddons.firecracker
  },
  {
    name: `Rainbow Map`,
    rank: IRank.IRIDESCANT,
    icon: 'assets/survivor/items/iconItems_rainbowMap.png',
    upgradables: survivorAddons.map
  },
  {
    name: `Skeleton Key`,
    rank: IRank.IRIDESCANT,
    icon: 'assets/survivor/items/iconItems_key.png',
    upgradables: survivorAddons.key
  },
  {
    name: `Alex's Toolbox`,
    rank: IRank.PURPLE,
    icon: 'assets/survivor/items/iconItems_toolboxAlexs.png',
    upgradables: survivorAddons.toolbox
  },
  {
    name: `Dull Key`,
    rank: IRank.PURPLE,
    icon: 'assets/survivor/items/iconItems_dullKey.png',
    upgradables: survivorAddons.key
  },
  {
    name: `Ranger Med-Kit`,
    rank: IRank.PURPLE,
    icon: 'assets/survivor/items/iconItems_rangersAidKit.png',
    upgradables: survivorAddons.medkit
  },
  {
    name: `Engineer's Toolbox`,
    rank: IRank.PURPLE,
    icon: 'assets/survivor/items/iconItems_toolboxEngineers.png',
    upgradables: survivorAddons.toolbox
  },
  {
    name: `Utility Flashlight`,
    rank: IRank.PURPLE,
    icon: 'assets/survivor/items/iconItems_flashlightUtility.png',
    upgradables: survivorAddons.flashlight
  },
  {
    name: `Broken Key`,
    rank: IRank.GREEN,
    icon: 'assets/survivor/items/iconItems_brokenKey.png',
    upgradables: survivorAddons.key
  },
  {
    name: `Commodious Toolbox`,
    rank: IRank.GREEN,
    icon: 'assets/survivor/items/iconItems_toolboxCommodious.png',
    upgradables: survivorAddons.toolbox
  },
  {
    name: `Emergency Med-Kit`,
    rank: IRank.GREEN,
    icon: 'assets/survivor/items/iconItems_medkit.png',
    upgradables: survivorAddons.medkit
  },
  {
    name: `Map`,
    rank: IRank.GREEN,
    icon: 'assets/survivor/items/iconItems_map.png',
    upgradables: survivorAddons.map
  },
  {
    name: `Mechanic's Toolbox`,
    rank: IRank.GREEN,
    icon: 'assets/survivor/items/iconItems_toolboxMechanics.png',
    upgradables: survivorAddons.toolbox
  },
  {
    name: `Sport Flashlight`,
    rank: IRank.GREEN,
    icon: 'assets/survivor/items/iconItems_flashlightSport.png',
    upgradables: survivorAddons.flashlight
  },
  {
    name: `First Aid Kit`,
    rank: IRank.YELLOW,
    icon: 'assets/survivor/items/iconItems_firstAidKit.png',
    upgradables: survivorAddons.medkit
  },
  {
    name: `Flashlight`,
    rank: IRank.YELLOW,
    icon: 'assets/survivor/items/iconItems_flashlight.png',
    upgradables: survivorAddons.flashlight
  },
  {
    name: `Toolbox`,
    rank: IRank.YELLOW,
    icon: 'assets/survivor/items/iconItems_toolbox.png',
    upgradables: survivorAddons.toolbox
  },
  {
    name: `Camping Aid Kit`,
    rank: IRank.BROWN,
    icon: 'assets/survivor/items/iconItems_rundownAidKit.png',
    upgradables: survivorAddons.medkit
  },
  {
    name: `Worn-Out Tools`,
    rank: IRank.BROWN,
    icon: 'assets/survivor/items/iconItems_toolboxWornOut.png',
    upgradables: survivorAddons.toolbox
  },
]