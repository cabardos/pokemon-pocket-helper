import { css, styled } from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  justify-content: center;
`;

const buttonStyles = css<{ $active?: boolean }>`
  color: ${(props) => (props.$active ? '#ffffff' : '#3b4cca')};
  background-color: ${(props) => (props.$active ? '#3b4cca' : '#ffffff')};
  border: ${(props) => (props.$active ? 'none' : '2px solid #3b4cca')};
  box-shadow: ${(props) =>
    props.$active ? '0 4px 12px rgba(59, 76, 202, 0.3)' : 'none'};
`;

const Button = styled.button<{ $active?: boolean }>`
  padding: 10px 24px;
  font-size: 1rem;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s;

  ${buttonStyles}

  &:hover {
    background-color: ${(props) => (props.$active ? '#2c3e8b' : '#f0f8ff')};
  }
`;

const SearchBar = styled.input`
  padding: 12px;
  font-size: 1rem;
  width: 300px;
  border: 2px solid #cfd8dc;
  border-radius: 12px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #3b4cca;
  }
`;

const FilterControls = ({
  showOnlyNotOwned,
  setShowOnlyNotOwned,
  search,
  setSearch,
}: {
  showOnlyNotOwned: boolean;
  setShowOnlyNotOwned: React.Dispatch<React.SetStateAction<boolean>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}) => (
  <ButtonContainer>
    <Button
      $active={showOnlyNotOwned || undefined}
      onClick={() => setShowOnlyNotOwned(!showOnlyNotOwned)}
    >
      {showOnlyNotOwned ? 'Tout montrer' : 'Montrer les non-possédés'}
    </Button>
    <SearchBar
      type="text"
      placeholder="Rechercher un Pokémon..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  </ButtonContainer>
);

export default FilterControls;
