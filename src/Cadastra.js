import React from 'react';
import DatePickerPt from './component/DatePickerPt';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Menu from './Menu'

const Cadastra = () => (
    <div>
        <Menu />
        <TextField floatingLabelText="Código da peça"/><br/>
        <TextField floatingLabelText="Nome da peça"/><br/>
        <TextField floatingLabelText="Valor da peça"/><br/>
        <DatePickerPt name="Data final do anúncio"/>
        <RaisedButton label="Cadastra" primary={true} onClick={() => { alert('Buscar'); }} />
        <RaisedButton label="Limpar" secondary={true} />
    </div>
);

export default Cadastra;