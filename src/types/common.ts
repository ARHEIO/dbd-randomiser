export type Entity = {
  icon: string;
  name: string;
  rank?: number;
}

export type BaseLoadout = Entity & {
  perks : Entity[]
}
