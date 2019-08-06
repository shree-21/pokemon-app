import React from 'react';
import Evolutions from './Evolutions';
import {Link} from 'react-router-dom';
import {getPokemonWithEvolutionsQuery} from '../queries/queries';
import {graphql} from 'react-apollo';



const PokemonDetails = (props) => {
    const pokemon = props.pokemon;
    console.log(props);

    return (
        <div>
            <img src={pokemon.image} alt={pokemon.name}></img>
            <p>Id: {pokemon.id}</p>
            <p>Number: {pokemon.number}</p>
            <p>Name: {pokemon.name}</p>
            <p>maxCP: {pokemon.maxCP}</p>
            <p>maxHP: {pokemon.maxHP}</p>
            <p>types: {pokemon.types}</p>
            {/* <p><Link to={`/${pokemon.id}`} pokemon={pokemon} component={Evolutions} onClick={(e) => <Evolutions />}>More Information</Link></p> */}
            
            
            <ul id="evolution-list">
                <Link to={`/${pokemon.id}`} pokemon={pokemon} component={Evolutions} onClick={(this.displayEvolutions = (props) => {
                    const evolution = props.evolution;
                    
                    return evolution.map(evolution => {
                        return (
                            <div key={evolution.id}>
                                <Evolutions evolution={evolution} />
                            </div>
                        )
                    })();
                })}>More Information</Link>
            </ul>
        </div>
    )
}

// export default PokemonDetails;
export default graphql(getPokemonWithEvolutionsQuery)(PokemonDetails);





// <PokemonListItem props={pokemon} /> 
// {pokemon.evolutions.map(evolution => <PokemonListItem props={evolution}></PokemonListItem> )}
