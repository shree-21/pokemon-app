import React from 'react';
import ApolloClient from 'apollo-boost';  
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter, Route } from 'react-router-dom';

//components
import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails';

//apollo client setup
const client = new ApolloClient({
  uri: 'https://pokemon-samdavies.stylindex.now.sh/'
})

class App extends React.Component {

  render() {
    return (
      <ApolloProvider client={client} >
        <BrowserRouter>
          <div className="App">
            <h1 id="pokemon-heading">Pokemon</h1>
            <Route path='/' exact component={PokemonList} />
            <Route path='/:id' component={PokemonDetails} />
          </div>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
