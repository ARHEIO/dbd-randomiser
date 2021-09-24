import { BaseLoadout, Entity } from "./common";

export type SurvivorLoadout = BaseLoadout & {
  item: Entity & {
    addons: Entity[]
  }
}
