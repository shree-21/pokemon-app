import { gql } from 'apollo-boost';

const getPokemonsQuery = gql`
  {
    pokemons(first: 10) {
    id
    number
    name
    maxCP
    maxHP
    image
    types
    }
  }
`;

const getPokemonWithEvolutionsQuery = gql`
  query($id: String!){
    pokemon(id: $id) {
      id
      number
      name
      maxCP
      maxHP
      image
      types
      evolutions {
        id
        number
        name
        maxCP
        maxHP
        image
        types
      }
    }
  }
`;

export  {getPokemonsQuery, getPokemonWithEvolutionsQuery};