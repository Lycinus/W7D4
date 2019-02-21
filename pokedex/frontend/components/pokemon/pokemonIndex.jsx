import React from 'react';
import PokemonIndexContainer from './pokemonIndexContainer';
import { selectAllPokemon } from '../../reducers/selectors';

class PokemonIndex extends React.Component {
    componentDidMount() {
        requestAllPokemon()
    }

    render() {
        let { pokemon } = this.props
        let pokemonListItems = pokemon.map(poke => <li key={poke.id}>{poke.name}<img src={poke.image_url} /></li>)
        return (
            <ul>
                {pokemonListItems}
            </ul>
        )
    }
}

export default PokemonIndex