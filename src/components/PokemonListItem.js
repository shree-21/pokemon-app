import React from 'react';

const PokemonListItem = (props) => {
  const pokemon = props.pokemon;
  
  return (
    <div id="pokemon-details">
      <img src={pokemon.image} alt={pokemon.name}></img>
      <p>Id: {pokemon.id}</p>
      <p>Number: {pokemon.number}</p>
      <p>Name: {pokemon.name}</p>
      <p>maxCP: {pokemon.maxCP}</p>
      <p>maxHP: {pokemon.maxHP}</p>
      <p>types: {pokemon.types}</p>
    </div>
  )
}

export default PokemonListItem;