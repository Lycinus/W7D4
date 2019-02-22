import React from 'react';
import ReactDOM from 'react-dom';
import { requestAllPokemon, requestOnePokemon, receiveOnePokemon } from './actions/pokemon_actions';
import { selectAllPokemon } from './reducers/selectors';
import configureStore from './store/store';
import Root from './components/root';
import { HashRouter, Route } from 'react-router-dom';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root')
    const store = configureStore()
    
    window.getState = store.getState; 
    window.dispatch = store.dispatch;
    window.requestAllPokemon = requestAllPokemon
    window.selectAllPokemon = selectAllPokemon
    window.requestOnePokemon = requestOnePokemon
    window.receiveOnePokemon = receiveOnePokemon

    ReactDOM.render(
        <Root store={store}/>,
        root
    )
})