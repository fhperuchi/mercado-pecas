import React from 'react';
import DatePickerPt from './component/DatePickerPt';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import Constants from './Constants'
import Menu from './Menu'

const Busca = () => (
    <div>
        <Menu titulo="Buscar peças" />
        <TextField floatingLabelText="Código da peça" /><br/>
        <TextField floatingLabelText="Nome da peça" /><br/>
        <DatePickerPt name="Data inicial do anúncio" />
        <DatePickerPt name="Data final do anúncio" />
        <RaisedButton label="Buscar" primary={true} style={Constants.STYLES.textField} onClick={() => { alert('OK'); }} />
        <RaisedButton label="Limpar" secondary={true} style={Constants.STYLES.textField} />
    </div>
);

export default Busca;