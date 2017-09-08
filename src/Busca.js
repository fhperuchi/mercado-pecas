import React from 'react';
import DatePickerPt from './component/DatePickerPt';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Menu from './Menu'

const Busca = () => (
    <div>
        <Menu />
        <TextField floatingLabelText="Código da peça"/><br/>
        <TextField floatingLabelText="Nome da peça"/><br/>
        <DatePickerPt name="Data inicial do anúncio"/>
        <DatePickerPt name="Data final do anúncio"/>
        <RaisedButton label="Buscar" primary={true} onClick={() => { alert('Buscar'); }}/>
        <RaisedButton label="Limpar" secondary={true} />
    </div>
);

export default Busca;