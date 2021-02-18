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
        totalPokemon: 0,
        perPage: 10,
        currentPage: 1,
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
        await this.setState({ currentPage: 1 })
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
        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}&page=${this.state.currentPage}&perPage=${this.state.perPage}`)

        this.setState({
            loading: false,
            pokemon: data.body.results,
            totalPokemon: data.body.count,
        })
    }

    handlePerPage = (e) => {
        this.setState({ perPage: e.target.value })
    }

    handleNextClick = async () => {
        await this.setState({
            currentPage: this.state.currentPage + 1
        });
        await this.fetchPokemon();
    }

    handlePreviousClick = async () => {
        await this.setState({
            currentPage: this.state.currentPage - 1
        });
        await this.fetchPokemon();
    }
    render() {
        
        const lastPage = Math.ceil(this.state.totalPokemon / this.state.perPage);

        return (
            <div className="sidebar">
                
                <Dropdown onChange={this.handleSortBy} options={this.state.sortArray}/>
                <Dropdown onChange={this.handleFilterDirection} options={this.state.directionArray}/>
                
                <section className="search-component">
                    <p>Find a Pokemon</p>
                    <input type="text" onChange={this.handleQueryChange} placeholder="Pokemon Name"/>
                    <button onClick={this.handleClick}>Get Pokemon!</button>
                </section>
                <button onClick={this.handlePreviousClick} disabled={this.state.currentPage === 1}>Next</button>
                <button onClick={this.handleNextClick} disabled={this.state.currentPage === lastPage}>Previous</button>
                <section className="search-results">
                    {this.state.loading ? <Spinner/> : <PokeList details={this.props.match.params.pokemonName} pokemon={this.state.pokemon}/>}
                </section>
            </div>
        )
    }
}
