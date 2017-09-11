import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {browserHistory, Route, Router} from 'react-router'

import Busca from './Busca';
import Cadastra from './Cadastro';
import Usuario from './Usuario';
import Login from './Login';
import MinhasPecas from './MinhasPecas';

const muiTheme = getMuiTheme({
    appBar: {
        height: 50
    }
});

ReactDOM.render(
    (<MuiThemeProvider muiTheme={muiTheme}>
        <Router history={browserHistory}>
            <Route path="/" component={Busca}/>
            <Route path="cadastrar" component={Cadastra}/>
            <Route path="minhasPecas" component={MinhasPecas}/>
            <Route path="usuario" component={Usuario}/>
            <Route path="login" component={Login}/>
        </Router>
    </MuiThemeProvider>),
    document.getElementById('root')
);