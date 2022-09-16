import styled from "@emotion/styled";
import { typography } from "../styles";
import { colors } from "./../styles/colors";
import { RiStarFill } from "react-icons/ri";
import { fonts } from "../styles/typography";
import { pokemonTypesColors } from "../pokemon-types";
import { icons } from "../icons";

function formatId(id) {
  return id.toString().padStart(3, "0");
}
const PokeImage = styled.img`
  max-width: 144px;
`;
const FavoriteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: ${colors.gray.medium};
  border: none;
  border-radius: 0.8rem;
  padding: 0.5rem 1rem;
  font-family: ${typography.text};
  font-weight: bold;
  color: white;
  cursor: pointer;
  margin-top: 16px;
`;

const WrapperData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const PokeData = styled.div`
  width: 197px;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-weight: 700;
  text-align: center;
  color: ${colors.gray.dark};
  h2 {
    ${typography.head.sm}
    font-family: ${fonts.primary};
  }
  p {
    ${typography.text.sm}
  }
`;

const PokeTypes = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const ParagraphType = styled.p`
  background-color: ${(element) => pokemonTypesColors[element.type.name]};
  border-radius: 10px;
  padding: 2px 8px;
  color: ${colors.white};
  font-weight: 700;
  font-size: 10px;
  line-height: 16px;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
`;

const PokeDetails = styled.div`
  width: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
  font-weight: 400;
  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  p {
    font-size: 8px;
    line-height: 12px;
    color: ${colors.gray.medium};
  }
  div p {
    font-size: 10px;
    line-height: 16px;
    color: ${colors.gray.dark};
  }
`;

const Line = styled.div`
  width: 1px;
  height: 48px;
  background-color: ${colors.gray.light};
`;

function PokemonData({
  dataPokemon,
  onAddFavorite,
  isFavorite,
  onRemoveFavorite,
}) {
  const regularContent = (
    <>
      <RiStarFill color={colors.gray.light} />
      Mark as Favorite
    </>
  );
  const favoriteContent = (
    <>
      <RiStarFill color={colors.yellow[500]} />
      Remove Favorite
    </>
  );
  return (
    <WrapperData>
      <PokeData>
        <h2>{dataPokemon.name}</h2>
        <p>#{formatId(dataPokemon.id)}</p>
      </PokeData>
      <PokeImage
        src={dataPokemon.sprites.other["official-artwork"].front_default}
        alt={dataPokemon.name}
      />
      <PokeTypes>
        {dataPokemon.types.map((element) => (
          <ParagraphType key={element.slot} {...element}>
            {element.type.name}
          </ParagraphType>
        ))}
      </PokeTypes>
      <Details>
        <PokeDetails>
          <div>
            {icons.weight}
            <p>{dataPokemon.weight / 10} kg</p>
          </div>
          <p>Weight</p>
        </PokeDetails>
        <Line />
        <PokeDetails>
          <div>
            {icons.height}
            <p>{dataPokemon.height / 10} m </p>
          </div>
          <p>Height</p>
        </PokeDetails>
      </Details>
      <FavoriteButton
        onClick={() =>
          isFavorite
            ? onRemoveFavorite(dataPokemon)
            : onAddFavorite(dataPokemon)
        }
      >
        {isFavorite ? favoriteContent : regularContent}
      </FavoriteButton>
    </WrapperData>
  );
}
export default PokemonData;
