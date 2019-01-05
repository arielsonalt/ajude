import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Home from './components/Home';
import Login from './components/Login';
import Erro from './components/Error';
import Sobre from './components/Sobre';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/Login' component={Login} />
            <Route path='/Sobre' component={Sobre} />
            <Route path="*" component={Erro} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}


export default App;