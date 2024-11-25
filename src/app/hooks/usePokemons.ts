import { useState, useEffect } from 'react';
import { useLocalStorage } from 'react-use';
import { Pokemon } from '@/app/types/pokemon';

type Response = {
  pokemons: Pokemon[];
  ownedCards?: number[];
  toggleOwnedCard: (cardNumber: number) => void;
  isOwned: (cardNumber: number) => boolean;
};

export const usePokemons = (): Response => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const [ownedCards, setOwnedCards] = useLocalStorage<number[]>(
    'ownedCards',
    []
  );

  useEffect(() => {
    fetch('/pokemon-pocket-helper/data/pokemon_with_booster.json')
      .then((res) => res.json())
      .then((data) => setPokemons(data));
  }, []);

  const toggleOwnedCard = (cardNumber: number) => {
    const updatedOwnedCards = ownedCards?.includes(cardNumber)
      ? ownedCards.filter((id) => id !== cardNumber)
      : [...(ownedCards || []), cardNumber];

    setOwnedCards(updatedOwnedCards);
  };

  const isOwned = (cardNumber: number) =>
    ownedCards?.includes(cardNumber) || false;

  return { pokemons, ownedCards, toggleOwnedCard, isOwned };
};
