import React, { Component } from 'react'
import request from 'superagent';
import Spinner from './Components/Spinner.js';
import Dropdown from './Components/Dropdown.js';
import PokeList from './Components/PokeList.js';

export default class SearchPage extends Component {
    state = {
        pokemon: [],
        sortBy: 'pokemon',
        filterDirection: 'ascending',
        selectedFilter: '',
        query: 'c',
        loading: false,
        sortArray: ['name', 'ability', 'shape', 'type'],
        directionArray: ['asc', 'desc'],
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
                <Dropdown onChange={this.handleSortBy} options={this.state.sortArray}/>
                <Dropdown onChange={this.handleFilterDirection} options={this.state.directionArray}/>
                <section className="search-component">
                    <p>Find a Pokemon</p>
                    <input type="text" onChange={this.handleQueryChange} placeholder="Pokemon Name"/>
                    <button onClick={this.handleClick}>Get Pokemon!</button>
                </section>
                
                <section className="search-results">
                    {this.state.loading ? <Spinner/> : <PokeList pokemon={this.state.pokemon}/>}
                </section>
            </div>
        )
    }
}
