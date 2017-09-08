import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory } from 'react-router';
import 'material-ui/'

import Menu from './Menu'

const style = {
    margin: 12,
};

function entrar() {
    alert('OK');
    browserHistory.push('/')
}

const Login = () => (
    <div>
        <Menu titulo="Entrar"/>
        <TextField floatingLabelText="E-mail" /><br/>
        <TextField floatingLabelText="Senha" type={'password'} /><br/>
        <RaisedButton label="Entrar" primary={true} style={style} onClick={entrar} />
    </div>
);

export default Login;