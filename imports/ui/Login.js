import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import {Link} from 'react-router';

import Constants from './util/Constants';
import TopBar from './component/TopBar';
import BottomBar from './component/BottomBar';

export default class Login extends React.Component {

    login = () => {
        alert('Logado!')
    }

    render() {
        return (
            <div>
                <TopBar
                    titulo="Entrar"/>
                <TextField
                    floatingLabelText="E-mail"/><br/>
                <TextField
                    floatingLabelText="Senha"
                    type={'password'}/><br/>
                <br/><Divider/><br/>
                <Link to="/">
                    <RaisedButton
                        label="Entrar"
                        primary
                        style={Constants.STYLES.textField}
                        onClick={this.login}/>
                </Link>
                <Link to="/usuario">
                    <RaisedButton
                        label="Cadastrar usuário"
                        primary
                        style={Constants.STYLES.textField} />
                </Link><br/><br/>
                <BottomBar/>
            </div>
        );
    }
}
