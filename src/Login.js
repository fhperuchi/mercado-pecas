import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory } from 'react-router';
import Divider from 'material-ui/Divider';

import Utils from './Util'
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
        <br/><Divider /><br/>
        <RaisedButton label="Entrar" primary style={Constants.STYLES.textField} onClick={login} />
        <RaisedButton label="Voltar" secondary style={Constants.STYLES.textField} onClick={Utils.home}  />
    </div>
);

export default Login;