import './App.css';
import React, { Component } from 'react';
import RegisterCompo from './components/RegisterContainer'
import LoginContainer from './components/LoginContainer'
import Dashboard from './components/Dashboard'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      registerStatus: 'NOT_REGISTERED'
    }
  }
  
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/login' component={LoginContainer} />
            <Route exact path='/register' component={RegisterCompo} />
            <Route exact path='/dashboard' component={Dashboard}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
