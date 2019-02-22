import * as APIUtil from '../util/api_util'

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';

export const receiveAllPokemon = payload => (
    {
      type: RECEIVE_ALL_POKEMON,
    payload
    }
)

export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
)


export const RECEIVE_ONE_POKEMON = 'RECEIVE_ONE_POKEMON';

export const receiveOnePokemon = payload => (
    {
      type: RECEIVE_ONE_POKEMON,
      payload
    }
)

export const requestOnePokemon = id => dispatch => {
  APIUtil.fetchOnePokemon(id)
    .then(data => dispatch(receiveOnePokemon(data)))
}

