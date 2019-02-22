import React from 'react';
import { merge } from 'lodash';
import { RECEIVE_ALL_POKEMON, RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (state={}, action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_ALL_POKEMON:
            return merge({}, state, action.payload);
        case RECEIVE_ONE_POKEMON:
            return merge({}, state, {[action.payload.pokemon.id]: action.payload.pokemon})
        default:
            return state
    }
}

export default pokemonReducer
