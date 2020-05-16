import { IRank } from "./rank.model";

export interface IGameObject {
  name: string;
  rank: IRank;
  icon: any;
  link?: string;
}

