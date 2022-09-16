const BASE_URI="https://pokeapi.co/api/v2/pokemon";

export function getPokemon(query){
  const safeQuery = query.replaceAll(' ', '-').toLowerCase();
  return fetch(`${BASE_URI}/${safeQuery}`)
  .then(res => res.json());
}