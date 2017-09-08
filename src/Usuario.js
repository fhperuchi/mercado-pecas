import React from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory } from 'react-router';

import Constants from './Constants'
import Menu from './Menu'

function cadastrarUsuario() {
    alert('OK');
    browserHistory.push('/')
}

const Usuario = () => (
    <div>
        <Menu titulo="Seus dados"/>
        <TextField floatingLabelText="Nome da empresa" /><br/>
        <TextField floatingLabelText="E-mail" /><br/>
        <TextField floatingLabelText="CNPJ" /><br/>
        <TextField floatingLabelText="Telefone" /><br/>
        <TextField floatingLabelText="Endereço"/><br/>
        <TextField floatingLabelText="Numero" type={'number'}/><br/>
        <TextField floatingLabelText="Complemento (ex: casa, apto, etc)"/><br/>
        <TextField floatingLabelText="Cidade" /><br/>
        <SelectField floatingLabelText="Estado" value={'SP'}>
            <MenuItem value={'SP'} primaryText="São Paulo" />
            <MenuItem value={'RJ'} primaryText="Rio de Janeiro" />
        </SelectField><br/>
        <RaisedButton label="Cadastrar usuário" primary={true} style={Constants.STYLES.textField} onClick={cadastrarUsuario} />
    </div>
);

export default Usuario;