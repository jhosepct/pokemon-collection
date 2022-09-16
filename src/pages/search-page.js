import styled from "@emotion/styled";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button/button";
import Input from "../components/Input/input";
import { getPokemon } from "../services/pokeapi-service";
import PokemonData from "./../components/pokemon-data";
import imageDefault from "../assets/images/pokemonDefault.png";
import { css } from "@emotion/css";
import { colors } from "../styles";

const Form = styled.form`
  display: flex;
  gap: 0.5rem;
  padding: 32px 38px 32px 38px;
`;

const SearchPage = ({ favorites, onAddFavorites, onRemoveFavorite }) => {
  const [query, setQuery] = useState("");
  const [state, setState] = useState({
    status: "idle", //success, error, pending
    data: null,
    error: null,
  });
  const { status, data: pokemon, error } = state;

  function handleSubmit(event) {
    event.preventDefault();
    if (query.length === 0) return;
    setState({ status: "pending", data: null, error: null });
    getPokemon(query)
      .then((data) => {
        setState({ status: "success", data: data, error: null });
      })
      .catch((error) => {
        setState({
          status: "error",
          data: null,
          error: "El pokemon no existe! Intente de nuevo",
        });
        console.log(error);
      });
  }

  // useEffect(() => {
  //   console.log("Favorites ", favorites);
  // }, [favorites]);

  const isFavorite = favorites.find((fav) => fav.pokemon_name === pokemon?.name)
    ? true
    : false;
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input
          name="query"
          placeholder="pokemon name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button type="submit" name="Search" />
      </Form>
      <div
        className={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 14px;
          line-height: 16px;
          gap: 1rem;
          color: ${colors.black};
        `}
      >
        {status === "idle" && (
          <>
            <img src={imageDefault} alt="" />
            <p>Ready to search</p>
          </>
        )}
        {status === "pending" && "Loading..."}
      </div>

      {status === "success" && (
        <PokemonData
          dataPokemon={pokemon}
          onAddFavorite={onAddFavorites}
          onRemoveFavorite={onRemoveFavorite}
          isFavorite={isFavorite}
        />
      )}
      {status === "error" && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default SearchPage;
