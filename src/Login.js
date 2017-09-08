import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory } from 'react-router';
import 'material-ui/'

import Constants from './Constants'
import Menu from './Menu'

function login() {
    alert('OK');
    browserHistory.push('/')
}

const Login = () => (
    <div>
        <Menu titulo="Entrar"/>
        <TextField floatingLabelText="E-mail" /><br/>
        <TextField floatingLabelText="Senha" type={'password'} /><br/>
        <RaisedButton label="Entrar" primary={true} style={Constants.STYLES.textField} onClick={login} />
    </div>
);

export default Login;