import React from 'react';
import ReactDOM from 'react-dom';
import { fetchAllPokemon } from './util/api_util';
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root')
    const store = configureStore()

    window.store = store
    
    // window.getState = store.getState; 
    // window.dispatch = store.dispatch;

    window.fetchAllPokemon = fetchAllPokemon
    window.receiveAllPokemon = receiveAllPokemon
    window.requestAllPokemon = requestAllPokemon

    ReactDOM.render(
        <h1>d3!</h1>,
        root
    )
})