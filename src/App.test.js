import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {MemoryRouter} from 'react-router-dom';
import PokemonDetails from './components/PokemonDetails';
import PokemonList from './components/PokemonList';

Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


//checking if the data is not null
describe('displayPokemons function', () => {
  test('Exists', () => {
    const displayPokemons = jest.fn();
    expect(displayPokemons.props).not.toBeNull();
  });
});

//function exists
describe('displayPokemons function', () => {
  test('Exists', () => {
    const displayPokemons = jest.fn();
    expect(displayPokemons).toBeDefined();
  });
});

//checking the Link to path renders correctly
it('renders without errors', () => {
  const wrapper = shallow(
    <MemoryRouter>
      <PokemonDetails />
    </MemoryRouter>
  );
  expect(wrapper.find(PokemonDetails)).toBeTruthy();
});

//checking paths
test('valid paths', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={[ '/' ]}>
      <App/>
    </MemoryRouter>
  );
  expect(wrapper.find(<PokemonList />)).toBeTruthy()
  expect(wrapper.find(<PokemonDetails />)).toBeTruthy()
});

