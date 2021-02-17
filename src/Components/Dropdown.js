import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        return (
            <div>
                <select onChange={this.props.onChange}>
                    {this.props.options.map((option) => <option key={option} value={option}>{option}</option>)}
                </select>
            </div>
        )
    }
}
