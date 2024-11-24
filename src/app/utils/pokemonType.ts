export type PokemonType =
  | 'Grass' // Plante
  | 'Fire' // Feu
  | 'Water' // Eau
  | 'Electric' // Électrique
  | 'Poison' // Poison
  | 'Fighting' // Combat
  | 'Psychic' // Psy
  | 'Colorless' // Incolore
  | 'Unknown'; // Par défaut

export const getPokemonTypeAndColor = (
  cardNumber: number
): { type: PokemonType; color: string } => {
  if (cardNumber >= 1 && cardNumber <= 32)
    return { type: 'Grass', color: 'rgb(222, 253, 224)' };
  if (cardNumber >= 33 && cardNumber <= 52)
    return { type: 'Fire', color: 'rgb(218, 168, 168)' };
  if (cardNumber >= 53 && cardNumber <= 93)
    return { type: 'Water', color: 'rgb(222, 243, 255)' };
  if (cardNumber >= 94 && cardNumber <= 112)
    return { type: 'Electric', color: 'rgb(252, 247, 222)' };
  if (cardNumber >= 113 && cardNumber <= 136)
    return { type: 'Poison', color: 'rgb(173, 158, 177)' };
  if (cardNumber >= 137 && cardNumber <= 163)
    return { type: 'Fighting', color: 'rgb(244, 231, 218)' };
  if (cardNumber >= 164 && cardNumber <= 177)
    return { type: 'Psychic', color: 'rgb(158, 171, 177)' };
  if (cardNumber >= 178 && cardNumber <= 182)
    return { type: 'Colorless', color: 'rgb(234, 234, 234)' };
  return { type: 'Unknown', color: '#ddd' };
};
