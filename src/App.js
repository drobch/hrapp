import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Vacancies from './Vacancies'
import Vacancy from './Vacancy'
import Profile from './Profile'
import Requests from './Requests'
import Navigation from './Navigation'

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Navigation />
            <Switch>
              <Route exact path="/vacancies" component={Vacancies} />
              <Route path="/vacancies/:id" component={Vacancy} />
              <Route path="/profile" component={Profile} />
              <Route path="/requests" component={Requests} />
              <Route render={ () => (<h3>Error: page does not exist</h3>) } />
            </Switch>
          </div>
        </Router>
    )
  }
}

export default App;