import { BaseLoadout, Entity } from "./common";

export type KillerLoadout = BaseLoadout & {
  power: Entity & {
    addons: Entity[]
  }
}
