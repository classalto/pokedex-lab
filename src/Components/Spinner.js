import React, { Component } from 'react';

export default class Spinner extends Component {
    render() {
        return (
            <div className="spinner-container">
                <img alt="spinner" src={'https://i0.wp.com/codemyui.com/wp-content/uploads/2015/09/spinner-loader-animation.gif?fit=880%2C440&ssl=1'}/>
            </div>
        )
    }
}
