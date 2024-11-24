import { Pokemon } from '@/app/types/pokemon';
import { getPokemonTypeAndColor } from '@/app/utils/pokemonType';
import React, { ReactElement } from 'react';
import styled from 'styled-components';

const CardContainer = styled.div<{ $owned: boolean; $cardNumber: number }>`
  background: white;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  overflow: hidden;
  padding: 16px;
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
  }
`;

const CardImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 120px;
  height: auto;
  padding-bottom: 16px;
  transition: transform 0.2s ease-in-out;

  ${CardContainer}:hover & {
    transform: scale(1.1);
  }
`;

const CardContent = styled.div`
  padding: 16px;
  text-align: center;
`;

const Name = styled.h3`
  color: #333;
  font-size: 20px;
  font-weight: bold;
  margin: 0;
`;

const Order = styled.p`
  font-size: 14px;
  color: #555;
  margin: 8px 0 0;
`;

type Props = {
  pokemon: Pokemon;
  isOwned?: boolean;
  toggleOwned: (cardNumber: number) => void;
};

const CARD_MAX_NUMBER = 226;

const Card = ({ pokemon, isOwned, toggleOwned }: Props): ReactElement => {
  const { name, cardNumber } = pokemon;

  return (
    <CardContainer
      $owned={!!isOwned}
      $cardNumber={cardNumber}
      onClick={() => toggleOwned(cardNumber)}
    >
      <CardImageWrapper>
        <Image
          src={isOwned ? `/image/pokemon/${cardNumber}.png` : '/card.jpg'}
          alt={name}
        />
      </CardImageWrapper>
      <CardContent>
        <Name>{name}</Name>
        <Order>
          #{cardNumber}/{CARD_MAX_NUMBER}
        </Order>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
