import React, { Component } from 'react';
import { BrowserRouter, Router } from 'react-router-dom';

import Home from './component/Home'
import Login from './component/Login'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Router path='/' component={Home} />
        <Router path='/Login' component={Login} />
      </BrowserRouter>
    )
  }
}
