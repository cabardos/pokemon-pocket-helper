import { RarityType } from '@/app/types/pokemon';
import { media } from '@/app/utils/media';
import { styled } from 'styled-components';

const RarityContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const RarityImage = styled.img`
  height: 14px;
  width: 14px;

  @media ${media.tablet} {
    height: 24px;
    width: 24px;
  }
`;

type Props = {
  type: RarityType;
  count: number;
};

const rarityIcons: Record<string, string> = {
  [RarityType.DIAMOND]: '/pokemon-tcg-pocket-deckmaster/icons/diamond.png',
  [RarityType.STAR]: '/pokemon-tcg-pocket-deckmaster/icons/star.png',
  [RarityType.CROWN]: '/pokemon-tcg-pocket-deckmaster/icons/crown.png',
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
