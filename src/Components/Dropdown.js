import React, { Component } from 'react';

export default class Dropdown extends Component {
    render() {
        return (
            <div>
                <label for={this.props.keyName}>{this.props.keyName}</label>
                <select id={this.props.keyName} onChange={this.props.onChange}>
                    <option value=""></option>
                </select>
            </div>
        )
    }
}