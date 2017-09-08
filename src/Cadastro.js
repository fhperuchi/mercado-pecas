import React from 'react';
import DatePickerPt from './component/DatePickerPt';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

import Utils from './Util'
import Constants from './Constants'
import Menu from './Menu'

function cadastrarPeca() {
    alert('OK');
    Utils.home()
}

const Cadastro = () => (
    <div>
        <Menu titulo="Cadastrar peça para venda" />
        <TextField floatingLabelText="Código da peça" /><br/>
        <TextField floatingLabelText="Nome da peça" /><br/>
        <TextField floatingLabelText="Valor da peça" /><br/>
        <DatePickerPt name="Data final do anúncio" />
        <br/><Divider /><br/>
        <RaisedButton label="Cadastrar peça" primary style={Constants.STYLES.textField} onClick={cadastrarPeca} />
        <RaisedButton label="Voltar" secondary style={Constants.STYLES.textField} onClick={Utils.home}  />
    </div>
);
export default Cadastro;