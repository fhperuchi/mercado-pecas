import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Router, Route, browserHistory } from 'react-router'
import Busca from './Busca';
import Cadastra from './Cadastra';

const muiTheme = getMuiTheme({
    appBar: {
        height: 50,
    },
});

ReactDOM.render(
    (<MuiThemeProvider muiTheme={muiTheme}>
        <Router history={browserHistory}>
            <Route path="/" component={Busca} />
            <Route path="cadastra" component={Cadastra} />
        </Router>
    </MuiThemeProvider>),
    document.getElementById('root')
);