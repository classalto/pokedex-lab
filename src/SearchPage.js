import React, { Component } from 'react'
import request from 'superagent';
import Spinner from './Components/Spinner.js';

export default class SearchPage extends Component {
    state = {
        pokemon: [],
        sortBy: 'pokemon',
        filterDirection: 'ascending',
        selectedFilter: '',
        query: 'c',
        loading: false,
    }

    componentDidMount = async () => {
        await this.fetchPokemon();
    }
    // track search input onchange
    handleQueryChange =  (e) => {
        this.setState({
            query: e.target.value
        })
        

        
    }
    handleClick = async () => {
        await this.fetchPokemon();
    }
    // track filter selection on change
    handleSortBy = async (e) => {
        this.setState({
            sortBy: e.target.value
        })
        await this.fetchPokemon();
    }

    // track filter direction onchange
    handleFilterDirection = async (e) => {
        this.setState({
            filterDirection: e.target.value
        })
        await this.fetchPokemon();
    }

    fetchPokemon = async () => {
        this.setState({
            loading: true,
        })
        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?sort=${this.state.sortBy}&direction=${this.state.filterDirection}&pokemon=${this.state.query}`)

        this.setState({
            pokemon: data.body.results,
            loading: false,
        })
    }
    render() {
        return (
            <div className="sidebar">
                <section className="category">
                    <p>Sorting Category:</p>
                    <select onChange={this.handleSortBy}>
                        <option value="pokemon">Name</option>
                        <option value="ability">Ability</option>
                        <option value="type">Type</option>
                        <option value="shape">Shape</option>
                    </select>
                </section>
                <section className="order">
                    <p>Order By:</p>
                    <select onChange={this.handleFilterDirection}>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </section>
                <section className="search-component">
                    <p>Find a Pokemon</p>
                    <input type="text" onChange={this.handleQueryChange} placeholder="Pokemon Name"/>
                    <button onClick={this.handleClick}>Get Pokemon!</button>
                </section>
                
                <section className="search-results">
                    {this.state.loading ? <Spinner/> : this.state.pokemon.map(monster => 
                        <div key={monster.pokebase}>
                            <h4>{monster.pokebase}</h4>
                            <img alt="pokemon" src={monster.url_image}/>
                            <p>Primary type: {monster.type_1}</p>
                            <p>Secondary type: {monster.type_2}</p>
                            <p>Ability 1: {monster.ability_1}</p>
                            <p>Ability 2: {monster.ability_2}</p>
                            <p>{monster.shape}</p>
                        </div>
                    )}
                </section>
            </div>
        )
    }
}
