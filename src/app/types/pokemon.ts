export enum RarityType {
  STAR = 'star',
  DIAMOND = 'diamond',
  CROWN = 'crown',
}

export type Pokemon = {
  name: string;
  ex: boolean;
  rarity: {
    type: RarityType;
    count: number;
  };
  cardNumber: number;
  pack: 'pikachu' | 'draceaufeu' | 'mewtwo';
};
