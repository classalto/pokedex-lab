import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <header>
                <div></div>
                <div>
                    <h1>Pokedex Search Tool</h1>
                </div>
                <nav>
                    <NavLink exact activeClassName="selected" to="/">Home</NavLink>
                    <NavLink exact activeClassName="selected" to="/SearchPage">PokeDex</NavLink>

                </nav>
            </header>
        )
    }
}
