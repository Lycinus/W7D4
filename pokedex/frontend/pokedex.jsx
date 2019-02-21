import React from 'react';
import ReactDOM from 'react-dom';
import { fetchAllPokemon } from './util/api_util';
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
import { selectAllPokemon } from './reducers/selectors';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root')
    const store = configureStore()
    
    window.getState = store.getState; 
    window.dispatch = store.dispatch;
    window.requestAllPokemon = requestAllPokemon
    window.selectAllPokemon = selectAllPokemon

    ReactDOM.render(
        <Root store={store}/>,
        root
    )
})