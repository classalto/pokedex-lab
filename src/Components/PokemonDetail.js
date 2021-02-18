import React, { Component } from 'react'
import request from 'superagent';
import Spinner from './Spinner.js';

export default class PokemonDetail extends Component {
    state = {
        pokemonData: {},
    }

    compenentDidMount = async () => {
        this.setState({loading: true})

        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.pokemon}`)

        this.setState({
            loading: false,
            pokemonData: data.body.results.find(monster => monster.pokemon === this.props.match.params.results.pokemon)
        });
    }
    render() {
        return (
            <div>
                {this.state.loading ? <Spinner/> :
                    <div className="detail-fragment">
                        <img alt="pokemon" src={this.state.pokemonData.url_img}/>
                        <p>{this.state.pokemonData.pokebase}</p>
                        <p>{this.state.pokemonData.attack}</p>
                        <p>{this.state.pokemonData.defense}</p>
                        <p>{this.state.pokemonData.type_1}</p>
                        <p>{this.state.pokemonData.type_2}</p>
                        <p>{this.state.pokemonData.shape}</p>
                        <p>{this.state.pokemonData.ability_1}</p>
                        <p>{this.state.pokemonData.ability_2}</p>
                    </div>}
            </div>
        )
    }
}
