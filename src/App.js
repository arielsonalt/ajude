import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Home from './components/Home'
import Login from './components/Login'
import Error from './components/Error'
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/Login' component={Login} />
            <Route path="*" component={Error} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;