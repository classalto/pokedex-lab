import React, { Component } from 'react'
import request from 'superagent';
import PokeList from './Components/PokeList.js';
import Spinner from './Components/Spinner.js';

export default class SearchPage extends Component {
    state = {
        pokemon: [],
        sortBy: 'pokemon',
        filterDirection: 'ascending',
        selectedFilter: '',
        query: '',
        loading: false,
    }

    componentDidMount = async () => {
        await this.fetchPokemon
    }
    // track search input onchange
    handleSearchChange = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    // track filter selection on change
    handleSortBy = (e) => {
        this.setState({
            selectedFilter: e.target.value
        })
    }

    // track filter direction onchange
    handleFilterDirection = (e) => {
        this.setState({
            filterDirection: e.target.value
        })
    }

    fetchPokemon = async () => {
        this.setState({
            loading: true,
            pokemon: [],
        })

        const data = await request.get('https://pokedex-alchemy.herokuapp.com/api/pokedex')

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
                        <option value="ability_1">Ability</option>
                        <option value="type_1">Type</option>
                        <option value="shape">Shape</option>
                    </select>
                </section>
                <section className="order">
                    <p>Order By:</p>
                    <select onChange={this.handleFilterDirection}>
                        <option value="ascending">Ascending</option>
                        <option value="descending">Descending</option>
                    </select>
                </section>
                <section className="search-component">
                    <p>Find a Pokemon</p>
                    <input type="text" onChange={this.handleSearchChange} placeholder="Pokemon Name"/>
                    <button onChange={this.getPokemon}>Search</button>
                </section>
                
                <section className="search-results">
                    {this.state.loading ? <Spinner/> : this.state.pokemon.map(monster => <PokeList pokeList={this.state.pokemon}/>)}
                </section>
            </div>
        )
    }
}
