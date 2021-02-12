import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import SearchPage from './SearchPage.js';
import HomePage from './HomePage.js';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route 
              path="/Search/SearchPage.js" 
              exact
              render={(routerProps) => <SearchPage {...routerProps} />} 
            />
            <Route 
              path="/" 
              exact
              render={(routerProps) => <HomePage {...routerProps} />} 
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
