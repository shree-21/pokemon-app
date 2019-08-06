import React from 'react';
import {graphql} from 'react-apollo';
import {getPokemonWithEvolutionsQuery} from '../queries/queries';
import PokemonDetails from './PokemonDetails';

const Evolutions = (props) => {
    const evolution = props.evolution;
    console.log(evolution);
    return  (
        <div>
            <img src={evolution.image} alt={evolution.name}></img>
            <p>Id: {evolution.id}</p>
            <p>Number: {evolution.number}</p>
            <p>Name: {evolution.name}</p>
            <p>maxCP: {evolution.maxCP}</p>
            <p>maxHP: {evolution.maxHP}</p>
            <p>types: {evolution.types}</p>
        </div>
    )
}
    

// export default graphql(getPokemonWithEvolutionsQuery)(Evolutions);
export default Evolutions;