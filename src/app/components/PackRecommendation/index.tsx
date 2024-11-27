import React, { ReactElement, useMemo } from 'react';
import styled from 'styled-components';
import { Pokemon } from '@/app/types/pokemon';
import { media } from '@/app/utils/media';
import { getSize } from '@/app/utils/space';

const RecommendationContainer = styled.div`
  border-radius: ${getSize('s')};
  font-family: 'Arial', sans-serif;
  text-align: center;

  @media ${media.tablet} {
    padding: ${getSize('base')};
    margin: ${getSize('base')};
  }
`;

const PackList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${getSize('base')};
  margin-bottom: ${getSize('base')};

  @media ${media.tablet} {
    margin: 0;
  }
`;

const PackItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${getSize('base')};
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: ${getSize('xs')};
  padding: ${getSize('s')} ${getSize('base')};
  font-size: ${getSize('base')};
  font-weight: 500;
  color: #333;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }
`;

const PackName = styled.span`
  color: #007bff;
  font-weight: bold;
`;

const ProgressWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${getSize('xs')};
`;

const ProgressBar = styled.div<{ $percentage: number }>`
  width: 100px;
  height: ${getSize('xs')};
  background: #e0e0e0;
  border-radius: ${getSize('2xs')};
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${(props) => props.$percentage}%;
    background: #007bff;
    transition: width 0.3s ease-in-out;
  }
`;

const PercentageText = styled.span`
  font-size: ${getSize('s')};
  color: #555;
  font-weight: bold;
`;

const MissingCount = styled.span`
  background: #f3f4f6;
  padding: ${getSize('2xs')} ${getSize('s')};
  border-radius: ${getSize('xs')};
  font-size: ${getSize('s')};
  font-weight: 600;
  color: #333;
`;

const NoMissingCards = styled.div`
  color: #28a745;
  font-size: ${getSize('base')};
  font-weight: bold;
  padding: ${getSize('base')};
`;

type Props = {
  pokemons: Pokemon[];
  ownedCards: number[];
};

export const PackRecommendation = ({
  pokemons,
  ownedCards,
}: Props): ReactElement => {
  const packData = useMemo(() => {
    const packCounts = pokemons.reduce<
      Record<string, { total: number; missing: number; owned: number }>
    >((acc, pokemon) => {
      const { pack } = pokemon;

      if (!pack) return acc;

      if (!acc[pack]) {
        acc[pack] = { total: 0, missing: 0, owned: 0 };
      }

      acc[pack].total += 1;

      if (!ownedCards.includes(pokemon.cardNumber)) {
        acc[pack].missing += 1;
      } else {
        acc[pack].owned += 1;
      }

      return acc;
    }, {});

    return Object.entries(packCounts).sort(
      ([, a], [, b]) => b.missing - a.missing
    );
  }, [pokemons, ownedCards]);

  return (
    <RecommendationContainer>
      {packData.length === 0 ? (
        <NoMissingCards>Vous avez toutes les cartes ! 🎉</NoMissingCards>
      ) : (
        <PackList>
          {packData.map(([pack, { total, missing, owned }]) => {
            const percentageOwned = Math.round((owned / total) * 100);

            return (
              <PackItem key={pack}>
                <PackName>{pack}</PackName>
                <ProgressWrapper>
                  <ProgressBar $percentage={percentageOwned} />
                  <PercentageText>{percentageOwned}% possédées</PercentageText>
                </ProgressWrapper>
                <MissingCount>
                  {missing}{' '}
                  {missing > 1 ? 'cartes manquantes' : 'carte manquante'}
                </MissingCount>
              </PackItem>
            );
          })}
        </PackList>
      )}
    </RecommendationContainer>
  );
};
