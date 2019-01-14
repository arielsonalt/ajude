import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Home from './components/Home';
import Login from './components/Login';
import Erro from './components/Error';
import Sobre from './components/Sobre';
import { CadastroAluno } from './components/cadastro/CadastroAluno';
import { CadastroBeneficente } from './components/cadastro/CadastroBeneficente';
import { CadastroEnsino } from './components/cadastro/CadastroEnsino';
import { CadastroFuncionario } from './components/cadastro/CadastroFuncionario';
import { CadastroServidor } from './components/cadastro/CadastroServidor';
import { AreaFuncinarioBeneficente } from './components/area/AreaFuncionarioBeneficente'


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/Login' component={Login} />
            <Route path='/Sobre' component={Sobre} />
            <Route path='/CadastroAluno' component={CadastroAluno} />
            <Route path='/CadastroBeneficente' component={CadastroBeneficente} />
            <Route path='/CadastroEnsino' component={CadastroEnsino} />
            <Route path='/CadastroFuncionario' component={CadastroFuncionario} />
            <Route path='/CadastroServidor' component={CadastroServidor} />
            <Route path='/AreaFuncinarioBeneficente' component={AreaFuncinarioBeneficente} />
            <Route path="*" component={Erro} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}


export default App;