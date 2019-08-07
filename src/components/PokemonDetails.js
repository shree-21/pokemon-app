import React from 'react';
import PokemonListItem from './PokemonListItem';
import { getPokemonWithEvolutionsQuery } from '../queries/queries';
import {graphql} from 'react-apollo';

class PokemonDetails extends React.Component {

  render() { 
    console.log("poke details",this.props)
    const pokemonId = this.props.match.params.id;
    if (!pokemonId) return null;
    const data = this.props.data;
    if (!data) return null;
    const pokemon = data.pokemon;
    if (!pokemon) return null;
    const evolutions = pokemon.evolutions;
    if (!evolutions) return null;
    return (
      <div>
        <PokemonListItem pokemon={pokemon} />
        {evolutions.map(evolution =>
          <PokemonListItem key={evolution.id} pokemon={evolution} />
        )}            
      </div>
    );
  }
}

// export default PokemonDetails;
export default graphql(getPokemonWithEvolutionsQuery, {
  options(ownProps) {
    return {
      variables: {
          id: ownProps.match.params.id
      },
    };
  }
})(PokemonDetails);
