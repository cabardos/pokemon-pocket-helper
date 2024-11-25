import { Pokemon, RarityType } from '@/app/types/pokemon';
import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Rarity from './Rarity';
import { media } from '@/app/utils/media';
import { getSize } from '@/app/utils/space';

const CardContainer = styled.div<{ $owned: boolean; $cardNumber: number }>`
  background: white;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.12);
  border-radius: ${getSize('s')};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
  }

  @media ${media.tablet} {
    padding: ${getSize('base')};
  }
`;

const CardImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: ${getSize('base')};
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 120px;
  height: auto;
  transition: transform 0.2s ease-in-out;

  ${CardContainer}:hover & {
    transform: scale(1.1);
  }

  @media ${media.tablet} {
    padding-bottom: ${getSize('base')};
  }
`;

const CardContent = styled.div`
  padding: ${getSize('base')};
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: ${getSize('xs')};

  @media ${media.tablet} {
    gap: ${getSize('base')};
  }
`;

const Name = styled.div`
  color: #333;
  font-size: ${getSize('s')};
  font-weight: bold;

  @media ${media.tablet} {
    font-size: ${getSize('m')};
  }
`;

const Order = styled.div`
  font-size: ${getSize('s')};
  color: #555;

  @media ${media.tablet} {
    font-size: ${getSize('base')};
  }
`;

const ExImage = styled.img`
  height: 20px;
  width: auto;
`;

const NameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

type Props = {
  pokemon: Pokemon;
  isOwned?: boolean;
  toggleOwned: (cardNumber: number) => void;
};

const CARD_MAX_NUMBER = 226;

const Card = ({ pokemon, isOwned, toggleOwned }: Props): ReactElement => {
  const { name, cardNumber, ex, rarity } = pokemon;

  const { type, count } = rarity;

  return (
    <CardContainer
      $owned={!!isOwned}
      $cardNumber={cardNumber}
      onClick={() => toggleOwned(cardNumber)}
    >
      <CardImageWrapper>
        <Image
          src={
            isOwned
              ? `/pokemon-pocket-helper/pokemon/${cardNumber}.png`
              : '/pokemon-pocket-helper/card.jpg'
          }
          alt={name}
        />
      </CardImageWrapper>
      <CardContent>
        <NameContainer>
          <Name>{name}</Name>
          {ex ? (
            <ExImage src="/pokemon-pocket-helper/icons/ex.png" alt="EX" />
          ) : null}
        </NameContainer>
        <Order>
          #{cardNumber}/{CARD_MAX_NUMBER}
        </Order>
        <Rarity type={type} count={count} />
      </CardContent>
    </CardContainer>
  );
};

export default Card;
