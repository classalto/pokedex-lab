import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class PokeList extends Component {
    render() {
        return (
            
                <div>
                    {this.props.pokemon.map((monster) => 
                    <Link to={`/PokemonDetail/${this.props.details}`}>
                        <div key={monster.pokemon}>
                            <h4>{monster.pokebase}</h4>
                            <img alt="pokemon" src={monster.url_image}/>
                            <p>Primary type: {monster.type_1}</p>
                            <p>Secondary type: {monster.type_2}</p>
                            <p>Ability 1: {monster.ability_1}</p>
                            <p>Ability 2: {monster.ability_2}</p>
                            <p>Shape: {monster.shape}</p>
                        </div>
                    </Link>
                    )}
                </div>
        )
    }
}
