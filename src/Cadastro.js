import React from 'react';
import DatePickerPt from './component/DatePickerPt';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory } from 'react-router';

import Constants from './Constants'
import Menu from './Menu'

function cadastrarPeca() {
    alert('OK');
    browserHistory.push('/')
}

const Cadastro = () => (
    <div>
        <Menu titulo="Cadastrar peça para venda" />
        <TextField floatingLabelText="Código da peça" /><br/>
        <TextField floatingLabelText="Nome da peça" /><br/>
        <TextField floatingLabelText="Valor da peça" /><br/>
        <DatePickerPt name="Data final do anúncio" />
        <RaisedButton label="Cadastrar peça" primary={true} style={Constants.STYLES.textField} onClick={cadastrarPeca} />
    </div>
);

export default Cadastro;