import React from 'react';
import { getPokemonsQuery } from '../queries/queries'; 
import { graphql } from 'react-apollo';
import PokemonListItem from './PokemonListItem';
import {Link} from 'react-router-dom';

class PokemonList extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
        selected: null
    }
  }
    
  displayPokemons() {
    const data = this.props.data;
    console.log(this.props);
    if(data.loading) {
      return (<div>Loading Pokemons...</div>);
    } 
    else {
      return data.pokemons.map(pokemon => {
        return (
            <div key={pokemon.id}>
              <PokemonListItem pokemon={pokemon} />
              <p id="more-info"><Link to={`/${pokemon.id}`}>More Information</Link></p>
            </div>
        )
      })
    }
  }

  render() {
    return (
      <div>
        <ul id="pokemon-list">
          {this.displayPokemons()}
        </ul>
      </div>
    );
  }
}

//binding the query to the component
export default graphql(getPokemonsQuery)(PokemonList);