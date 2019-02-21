import React from 'react';
import PokemonIndexItem from './pokemonIndexItem';

class PokemonIndex extends React.Component {
    componentDidMount() {
        requestAllPokemon();
    }

    render() {
        let pokemon = this.props.pokemon;
        let pokemonListItems = pokemon.map(poke => <PokemonIndexItem key={poke.id} poke={poke} />)
        return (
            <section className="pokedex">
                <ul>
                    {pokemonListItems}
                </ul>
            </section>
        )
    }
}

export default PokemonIndex