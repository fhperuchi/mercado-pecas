import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory } from 'react-router';
import AutoComplete from 'material-ui/AutoComplete';
import Divider from 'material-ui/Divider';

import Utils from './Util'
import Constants from './Constants'
import Menu from './Menu'

function cadastrarUsuario() {
    alert('OK');
    browserHistory.push('/')
}

const Usuario = () => (
    <div>
        <Menu titulo="Seus dados"/>
        <TextField floatingLabelText="Nome da empresa" /><TextField floatingLabelText="E-mail" /><br/>
        <TextField floatingLabelText="CNPJ" /><TextField floatingLabelText="Telefone" /><br/>
        <TextField floatingLabelText="Endereço"/><TextField floatingLabelText="Numero" type={'number'}/><br/>
        <TextField floatingLabelText="Bairro"/><TextField floatingLabelText="Complemento (ex: casa, apto, etc)"/><br/>
        <AutoComplete
            floatingLabelText="Estado"
            filter={AutoComplete.caseInsensitiveFilter}
            dataSource={Constants.ESTADOS} />
        <AutoComplete
            floatingLabelText="Cidade"
            filter={AutoComplete.caseInsensitiveFilter}
            dataSource={Constants.CIDADES}/>
        <br/><br/><Divider /><br/>
        <RaisedButton label="Cadastrar usuário" primary style={Constants.STYLES.textField} onClick={cadastrarUsuario} />
        <RaisedButton label="Voltar" secondary style={Constants.STYLES.textField} onClick={Utils.home} />
    </div>
);
export default Usuario;