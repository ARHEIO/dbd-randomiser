export enum Rarity {
  Common = 0,
  Uncommon = 1,
  Rare = 2,
  VeryRare = 3,
  UltraRare = 4,
  Event = 5,
  None = 6
}

const colours = {
  [Rarity.Common]: '#ab713c',
  [Rarity.Uncommon]: '#e8c252',
  [Rarity.Rare]: '#199b1e',
  [Rarity.VeryRare]: '#ac3ee3',
  [Rarity.UltraRare]: '#ff0955',
  [Rarity.Event]: '#ff8800',
};

export const getRankColour = (rarity: Rarity) => colours[rarity] ? colours[rarity] : '#61513C';