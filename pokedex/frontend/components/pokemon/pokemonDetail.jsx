import React from 'react';

class PokemonDetail extends React.Component {

    componentDidMount() {
        this.props.requestOnePokemon(
            this.props.match.params.pokemonId
        )
    }

    componentDidUpdate() {

    }

    render() {
        let { pokemon } = this.props
        if (pokemon) {
            return(
                <div className="verticalFlex">
                    <img className="detailsImg" src={pokemon.image_url}/>
                    <h1>{pokemon.name}</h1>
                    <h1>{pokemon.poke_type}</h1>
                    <h1>{pokemon.attack}</h1>
                    <h1>{pokemon.defense}</h1>
                    <h1>{pokemon.moves}</h1>
                </div>
            )
        } else {
            return(
                <h1>Loading...</h1>
            )
        }
    }
}

export default PokemonDetail;