import React from 'react';
import { getPokemonsQuery } from '../queries/queries'; 
import { graphql } from 'react-apollo';
import PokemonDetails from './PokemonDetails';
import {Link} from 'react-router-dom';
import Evolutions from './Evolutions';



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
                        {/* <li key={pokemon.id}>{pokemon.name}</li>     */}
                        <PokemonDetails pokemon={pokemon} />
                       
                        {/* <li><Link to={`/${pokemon.id}`} pokemon={pokemon} component={Evolutions} onClick={(e) => { this.setState({selected: pokemon.id})}}>More Information</Link></li> */}
                        <hr />
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