import React, { Component } from 'react'
import PokemonData from './data.js';
import Dropdown from './Dropdown.js';

export default class SearchPage extends Component {
    state = {
        pokemon: PokemonData,
        filterList: ['pokemon', 'speed', 'type1', 'attack', 'defense'],
        filterDirection: ['ascending', 'descending'],
        selectedFilter: '',
        search: ''
    }

    // track search input onchange
    handleSearchChange = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    // track filter selection on change
    handleFilterChange = (e) => {
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

    sortBy = () => {
        if (this.state.selectedFilter === '' || this.state.filterDirection === '') return;

        if (this.state.selectedFilter === "attack" || this.state.selectedFilter === "defense" || this.state.selectedFilter === "hp") {
            if (this.state.filterDirection === 'ascending') {
                this.state.pokemon.sort((a, b) => a[this.state.selectedFilter] - b[this.state.selectedFilter])
            } else {
                this.state.pokemon.sort((a, b) => b[this.state.selectedFilter] - a[this.state.selectedFilter])
            }
        } else {
            if (this.state.filterDirection === 'ascending') {
                this.state.pokemon.sort((a, b) => a[this.state.selectedFilter].localeCompare(b[this.state.selectedFilter]))
            } else {
                this.state.pokemon.sort((a, b) => b[this.state.selectedFilter].localeCompare(a[this.state.selectedFilter]))
            }
        }
    }
    filterArray = () => {
        if(this.state.selectedFilter === '') return this.state.pokemon;
        const filteredArr = this.state.pokemon.filter(monster => {
            if (monster.pokemon === this.state.search) return true;
        })
        return filteredArr;
    }

    render() {
        
        this.sortBy();
        const filteredPokemon = this.filterArray();

        return (
            <div>
                Search for:
                <input value={this.state.search} onChange={this.handleSearchChange}/>
                <Dropdown filteredList={this.filterList} onChange={this.handleFilterChange} keyName={"Sort By"}/>
                <Dropdown filteredList={this.filterDirection} onChange={this.handleFilterDirection} keyName={'Order By'}/>
                <PokeResult filteredList={filteredPokemon}/>
            </div>
        )
    }
}
