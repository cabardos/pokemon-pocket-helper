import { styled } from 'styled-components';
import Card from '@/app/components/Card';
import { media } from '@/app/utils/media';
import { getSize } from '@/app/utils/space';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 2fr));
  gap: 16px;
  margin-top: ${getSize('base')};

  @media ${media.tablet} {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

const CardPlaceholder = styled.div`
  width: 100%;
  height: 280px;
  border-radius: ${getSize('s')};
  background: #f8f9fa;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #90a4ae;
`;

const PokemonGrid = ({
  filteredPokemons,
  isOwned,
  toggleOwnedCard,
}: {
  filteredPokemons: any[];
  isOwned: (cardNumber: number) => boolean;
  toggleOwnedCard: (cardNumber: number) => void;
}) => (
  <Grid>
    {filteredPokemons.length > 0 ? (
      filteredPokemons.map((pokemon) => (
        <Card
          key={pokemon.cardNumber}
          pokemon={pokemon}
          isOwned={isOwned(pokemon.cardNumber)}
          toggleOwned={toggleOwnedCard}
        />
      ))
    ) : (
      <CardPlaceholder>
        Aucun Pokémon trouvé pour cette recherche ou ce filtre.
      </CardPlaceholder>
    )}
  </Grid>
);

export default PokemonGrid;
