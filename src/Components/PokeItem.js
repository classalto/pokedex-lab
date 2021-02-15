import React, { Component } from 'react';

export default class PokeItem extends Component {
    render() {
        return (
        <li className="poke-item">
            <div className="title">
                <h2 className="poke-name">{this.props.itemProp.pokemon}</h2>
                <img className="poke-img" src={this.props.itemProp.url_image} alt="animals"/>
            </div>
            <div className ="specs">
                <p className="poke-type">Ability: {this.props.itemProp.ability_1}</p>
                <p className="poke-type">Type: {this.props.itemProp.type_1}</p>
                <p className="poke-shape">Shape: {this.props.itemProp.shape}</p>
            </div>
      </li>
        )
    }
}
