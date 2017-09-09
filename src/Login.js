import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

import Util from './Util'
import Constants from './Constants'
import Menu from './Menu'

function login() {
    Util.goTo('/')
}

export default class Login extends React.Component {

    render() {
        return (
            <div>
                <Menu
                    titulo="Entrar"/>
                <TextField
                    floatingLabelText="E-mail"/><br/>
                <TextField
                    floatingLabelText="Senha"
                    type={'password'}/><br/>
                <br/><Divider /><br/>
                <RaisedButton
                    label="Entrar"
                    primary
                    style={Constants.STYLES.textField}
                    onClick={login}/>
                <RaisedButton
                    label="Voltar"
                    secondary style={Constants.STYLES.textField}
                    onClick={Util.home}/>
            </div>
        );
    }
}
