'use client';

import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { usePokemons } from '@/app/hooks/usePokemons';
import { BoosterRecommendation } from '@/app/components/BoosterRecommendation';
import Loading from '@/app/components/Loading';
import FilterControls from '../components/FilterControls';
import PokemonGrid from '../components/PokemonGrid';

const Container = styled.div`
  min-height: 100vh;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  background: #ffffff;
  margin-bottom: 32px;
`;

const BackgroundSection = styled.div`
  position: relative;
  background: linear-gradient(135deg, #3b4cca 40%, #e0f7fa 100%);
  height: 450px;
  clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 48px;
  color: #ffffff;
  margin: 0;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 2;
`;

const ContentWrapper = styled.div`
  background: #fbfbfc;
  padding: 16px;
  border-radius: 24px;
  margin: -150px auto 0;
  width: 90%;
  max-width: 1200px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 2;
  position: relative;
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
        <BoosterRecommendation
          pokemons={pokemons}
          ownedCards={ownedCards ?? []}
        />
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
