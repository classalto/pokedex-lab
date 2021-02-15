import React, { Component } from 'react'
import PokemonData from './data.js';
import PokeList from './Components/PokeList.js';

export default class SearchPage extends Component {
    state = {
        pokemon: PokemonData,
        sortBy: 'pokemon',
        filterDirection: 'ascending',
        selectedFilter: '',
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

      
    render() {
        // sort pokemon by filter if ascending
        if (this.state.filterDirection === 'ascending') {
            this.state.pokemon.sort(
                (a, b) => a[this.state.sortBy].localeCompare(b[this.state.sortby])
            );
        }
        // sort pokemon by filter if descending
        if (this.state.filterDirection === 'descending') {
            this.state.pokemon.sort(
                (a, b) => b[this.state.sortBy].localeCompare(a[this.state.sortBy])
            );
        }

        // filter pokemon by selected filter
        const filteredPokeData = this.state.pokemon.filter(monster => monster.pokemon.includes(this.state.selectedFilter))

        return (
            <div className="sidebar">
                <section className="category">
                    <p>Sorting Category:</p>
                    <select>
                        <option value="name">Name</option>
                        <option value="ability-one">Ability</option>
                        <option value="type-one">Type</option>
                        <option value="shape">Shape</option>
                    </select>
                </section>
                <section className="order">
                    <p>Order By:</p>
                    <select>
                        <option value="ascending">Ascending</option>
                        <option value="descending">Descending</option>
                    </select>
                </section>
                <section className="search">
                    <p>Find a Pokemon</p>
                    <input type="text" onChange={this.handleSearchChange} placeholder="Pokemon Name"/>
                </section>
                <section>
                    <PokeList filteredPokeData={filteredPokeData}/>
                </section>
            </div>
        )
    }
}
