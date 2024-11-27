'use client';

import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { usePokemons } from '@/app/hooks/usePokemons';
import { PackRecommendation } from '@/app/components/PackRecommendation';
import Loading from '@/app/components/Loading';
import FilterControls from '@/app/components/FilterControls';
import PokemonGrid from '@/app/components/PokemonGrid';
import { media } from './utils/media';
import { getSize } from './utils/space';

const Container = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  background: #fbfbfc;
  margin-bottom: ${getSize('l')};

  @media ${media.tablet} {
    background: #ffffff;
  }
`;

const BackgroundSection = styled.div`
  padding: ${getSize('l')};
  background: linear-gradient(135deg, #3b4cca 40%, #e0f7fa 100%);
  height: 50px;
  clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%);

  @media ${media.tablet} {
    background: linear-gradient(135deg, #3b4cca 40%, #e0f7fa 100%);
    height: 450px;
    clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: ${getSize('l')};
  color: #ffffff;
  margin: 0;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
  z-index: 2;

  @media ${media.tablet} {
    font-size: ${getSize('3xl')};
  }
`;

const ContentWrapper = styled.div`
  background: #fbfbfc;
  padding: ${getSize('base')};
  max-width: 1200px;
  z-index: 2;
  position: relative;

  @media ${media.tablet} {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: ${getSize('l')};
    margin: -150px auto 0;
    width: 90vw;
  }
`;

const Pokedex = () => {
  const { pokemons, toggleOwnedCard, isOwned, ownedCards } = usePokemons();

  const [showOnlyNotOwned, setShowOnlyNotOwned] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  const [search, setSearch] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const filteredPokemons = useMemo(() => {
    return pokemons.filter((pokemon) => {
      const { name, cardNumber } = pokemon;

      const matchesSearch = name.toLowerCase().includes(search.toLowerCase());
      const matchesFilter = showOnlyNotOwned ? !isOwned(cardNumber) : true;

      return matchesSearch && matchesFilter;
    });
  }, [pokemons, search, showOnlyNotOwned, isOwned]);

  if (isLoading || !pokemons.length) {
    return <Loading />;
  }

  return (
    <Container>
      <BackgroundSection>
        <Title>Pokedex Genetic Apex</Title>
      </BackgroundSection>
      <ContentWrapper>
        <PackRecommendation pokemons={pokemons} ownedCards={ownedCards ?? []} />
        <FilterControls
          showOnlyNotOwned={showOnlyNotOwned}
          setShowOnlyNotOwned={setShowOnlyNotOwned}
          search={search}
          setSearch={setSearch}
        />
        <PokemonGrid
          filteredPokemons={filteredPokemons}
          isOwned={isOwned}
          toggleOwnedCard={toggleOwnedCard}
        />
      </ContentWrapper>
    </Container>
  );
};

export default Pokedex;
