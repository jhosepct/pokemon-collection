import styled from "@emotion/styled";
import React from "react";
import { RiStarFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { pokemonTypesColors } from "../pokemon-types";
import { colors, typography } from "../styles";
import { fonts } from "../styles/typography";

const Title = styled.p`
  width: 225px;
  padding: 22px 0 32px 67px;
  text-align: center;
  ${typography.head.sm}
  font-family: ${fonts.primary};
`;

const PokeCard = styled.div`
  border: 1px solid ${({ type }) => pokemonTypesColors[type]};
  border-radius: 8px;
  width: 104px;
  display: flex;
  flex-direction: column;
  img {
    align-self: center;
    text-align: center;
    width: 72px;
    height: 72px;
  }
`;
const Cards = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  overflow-y: auto;
  max-height: calc(100vh - 152px);
`;
const PokeInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 8px 0px 8px;
  p {
    font-weight: 400;
    font-size: 8px;
    line-height: 12px;
  }
`;
const PokeName = styled.p`
  background-color: ${({ type }) => pokemonTypesColors[type]};
  color: ${colors.white};
  text-align: center;
  border-radius: 0 0 6px 6px;
  padding: 4px 8px;
  fonm-weight: 400;
  font-size: 10px;
  line-height: 16px;
`;

function formatId(id) {
  return id.toString().padStart(3, "0");
}

const FavoritesPage = ({ favorites }) => {
  return (
    <>
      <Title>Favorites</Title>
      <Cards>
        {favorites.map((fav) => (
          <PokeCard key={fav.id} type={fav.pokemon_type}>
            <PokeInfo>
              <RiStarFill color={colors.yellow[500]} />
              <p>#{formatId(fav.pokemon_id)}</p>
            </PokeInfo>
            <img src={fav.pokemon_avatar_url} alt="pokemon" />
            <PokeName type={fav.pokemon_type}>{fav.pokemon_name}</PokeName>
          </PokeCard>
        ))}
      </Cards>
    </>
  );
};

export default FavoritesPage;
