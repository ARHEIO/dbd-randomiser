export enum IRank {
  BROWN = 1,
  YELLOW,
  GREEN,
  PURPLE,
  IRIDESCANT,
  GOLD
}

export interface IBasic {
  name: string;
  icon: string;
  rank: IRank | null;
}

export interface IModifiable extends IBasic {
  upgradables: IBasic[]
}

export type Killer = IModifiable; // doesn't use rank
export type Item = IModifiable;
export type Survivor = IBasic;
export type Addon = IBasic;
export type Perk = IBasic;
