import React from 'react';
import DatePickerPt from './component/DatePickerPt';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

import Constants from './Constants'
import Menu from './Menu'

export default class Busca extends React.Component {

    constructor() {
        super();
        this.state = {codigo: '', nome: ''};
    }

    salvaAlteracao(nomeInput, event){
        var campoSendoAlterado = {};
        campoSendoAlterado[nomeInput] = event.target.value;
        this.setState(campoSendoAlterado);
    }

    render() {
        return (
            <div>
                <Menu
                    titulo="Buscar peças"/>
                <TextField
                    id={"codigo"}
                    value={this.state.codigo}
                    onChange={this.salvaAlteracao.bind(this,'codigo')}
                    floatingLabelText="Código da peça"/><br/>
                <TextField
                    id={"nome"}
                    value={this.state.nome}
                    onChange={this.salvaAlteracao.bind(this,'nome')}
                    floatingLabelText="Nome da peça"/><br/>
                <DatePickerPt
                    id={"dataInicio"}
                    name="Data inicial do anúncio"/>
                <DatePickerPt
                    id={"dataFim"}
                    name="Data final do anúncio"/>
                <br/>
                <Divider />
                <br/>
                <RaisedButton
                    label="Buscar peças"
                    primary={true}
                    style={Constants.STYLES.textField}
                    onClick={() => {alert(document.getElementById("codigo").value)}}/>
            </div>
        );
    }
}