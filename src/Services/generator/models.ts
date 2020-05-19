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
  upgradables: BasicObject[];
}

export type Killer = UpgradableObject; // doesn't use rank
export type Item = UpgradableObject;
export type Survivor = BasicObject;
export type Addon = BasicObject;
export type Perk = BasicObject;
