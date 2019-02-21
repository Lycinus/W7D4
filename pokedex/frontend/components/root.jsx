import React from 'react';
import { Provider } from 'react-redux'
import PokemonIndexContainer from './pokemon/pokemonIndexContainer';


const Root = ({ store }) => (
    <Provider store={store}>
        <PokemonIndexContainer />
    </Provider>
)

export default Root;