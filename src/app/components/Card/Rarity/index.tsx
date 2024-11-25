import { RarityType } from '@/app/types/pokemon';
import { styled } from 'styled-components';

const RarityContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8px;
`;
const RarityImage = styled.img`
  height: 24px;
  width: 24px;
  margin: 0 2px;
`;

type Props = {
  type: RarityType;
  count: number;
};

const rarityIcons: Record<string, string> = {
  [RarityType.DIAMOND]: '/pokemon-pocket-helper/icons/diamond.png',
  [RarityType.STAR]: '/pokemon-pocket-helper/icons/star.png',
  [RarityType.CROWN]: '/pokemon-pocket-helper/icons/crown.png',
};

const Rarity = ({ type, count }: Props) => {
  if (!type || !count) return null;

  return (
    <RarityContainer>
      {Array.from({ length: count }).map((_, index) => (
        <RarityImage
          key={`${type}-${index}`}
          src={rarityIcons[type]}
          alt={`${type} icon`}
        />
      ))}
    </RarityContainer>
  );
};

export default Rarity;
