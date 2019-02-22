import { connect } from 'react-redux';
import { requestOnePokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemonDetail'

const mapStateToProps = (state, ownProps) => {
    // debugger
    
    return {
        pokemon: state.entities.pokemon[ownProps.match.params.pokemonId]
    }
}

const mapDispatchToProps = (dispatch) => ({
    requestOnePokemon: id => dispatch(requestOnePokemon(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail)