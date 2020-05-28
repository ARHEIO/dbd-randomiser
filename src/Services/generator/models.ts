export enum IRank {
  BROWN = 1,
  YELLOW,
  GREEN,
  PURPLE,
  IRIDESCANT,
  GOLD
}

export interface BasicObject {
  name: string;
  icon: string;
  rank: IRank | null;
}

export interface UpgradableObject extends BasicObject {
  addons: BasicObject[];
}

export type Killer = UpgradableObject; // doesn't use rank
export type Item = UpgradableObject;
export type Survivor = BasicObject;
export type Addon = BasicObject;
export type Perk = BasicObject;

export interface GeneratedKiller {
  name: string;
  icon: string;
  addons: Addon[];
  perks: Perk[];
}

export interface GeneratedSurvivor {
  icon: string;
  item: Item;
  name: string;
  perks: Perk[];
}
