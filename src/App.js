import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route 
              path="/" 
              exact
              render={(routerProps) => <SearchPage {...routerProps} />} 
            />
            <Route 
              path="/quote" 
              exact
              render={(routerProps) => <HomePage {...routerProps} />} 
            />
          </Switch>
        </Router>
      </div>
    );
  }
}