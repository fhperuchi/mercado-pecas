import {Meteor} from 'meteor/meteor';
import React from 'react';
import {render} from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {browserHistory, Route, Router} from 'react-router'

import BuscaPeca from '../imports/ui/BuscaPeca';
import CadastroPeca from '../imports/ui/CadastroPeca';
import Usuario from '../imports/ui/Usuario';
import Login from '../imports/ui/Login';
import MinhasPecas from '../imports/ui/MinhasPecas';

const muiTheme = getMuiTheme({
    appBar: {
        height: 50
    }
});

Meteor.startup(() => {
    render(
        <MuiThemeProvider muiTheme={muiTheme}>
            <Router history={browserHistory}>
                <Route path="/" component={BuscaPeca}/>
                <Route path="cadastrar" component={CadastroPeca}/>
                <Route path="minhasPecas" component={MinhasPecas}/>
                <Route path="usuario" component={Usuario}/>
                <Route path="login" component={Login}/>
            </Router>
        </MuiThemeProvider>,
        document.getElementById('root')
    )
});