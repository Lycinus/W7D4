import React from 'react';
import { Provider } from 'react-redux'
import PokemonIndexContainer from './pokemon/pokemonIndexContainer';
import { HashRouter, Route } from 'react-router-dom';
import PokemonDetailContainer from './pokemon/pokemonDetailContainer';

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <div className="flex">
                <Route path="/" component={PokemonIndexContainer} />
                <Route exact path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
            </div>
        </HashRouter>
    </Provider>
)

export default Root;