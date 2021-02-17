import React, { Component } from 'react'

export default class PokeList extends Component {
    render() {
        return (
            <div>
                {this.props.pokemon.map((monster) => 
                    <div key={monster._id}>
                        <h4>{monster.pokebase}</h4>
                        <img alt="pokemon" src={monster.url_image}/>
                        <p>Primary type: {monster.type_1}</p>
                        <p>Secondary type: {monster.type_2}</p>
                        <p>Ability 1: {monster.ability_1}</p>
                        <p>Ability 2: {monster.ability_2}</p>
                        <p>Shape: {monster.shape}</p>
                    </div>)}
            </div>
        )
    }
}
