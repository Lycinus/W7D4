import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = ({ poke }) => (
    <li>
        <Link to="/pokemon/:pokemonId">
            {poke.name}
            <img src={poke.image_url} />
        </Link>
    </li>
)

export default PokemonIndexItem