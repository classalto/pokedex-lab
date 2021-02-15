import React, { Component } from 'react'
import PokeItem from './PokeItem.js';

export default class PokeList extends Component {
    render() {
        return (
            <ul className="pokeContainer">
                {this.props.filteredPokeData.map(monster => 
                <PokeItem key={monster.pokebase} itemProp={monster}/>)}
            </ul>
        )
    }
}