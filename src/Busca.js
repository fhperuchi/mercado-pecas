import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

import './css/styles.css'
import Constants from './Constants';
import DatePickerPt from './component/DatePickerPt';
import Menu from './component/Menu';


export default class Busca extends React.Component {

    constructor() {
        super();
        this.state = {
            codigo: '',
            nome: '',
            aplicacao: '',
            valorMaximo: '',
            dataInicio:'',
            dataFim:''
        };
    }

    salvaAlteracao = (nomeInput, event) => {
        var field = {};
        field[nomeInput] = event.target.value;
        this.setState(field);
    };

    handleChangeInicio = (event, value) => {
        this.setState({dataInicio: value});
    };

    handleChangeFim = (event, value) => {
        this.setState({dataFim: value});
    };

    render() {
        // const IntlPolyfill = require('intl');
        // let DateTimeFormat = IntlPolyfill.DateTimeFormat;
        // require('intl/locale-data/jsonp/pt');
        return (
            <div>
                <Menu
                    titulo="Buscar peças"/>
                <TextField
                    id={"codigo"}
                    style={Constants.STYLES.tamanhoMaior}
                    value={this.state.codigo}
                    onChange={this.salvaAlteracao.bind(this, 'codigo')}
                    floatingLabelText="Código da peça (digite sem espaços, pontos ou traços"/><br/>
                <TextField
                    id={"nome"}
                    value={this.state.nome}
                    onChange={this.salvaAlteracao.bind(this, 'nome')}
                    floatingLabelText="Nome da peça"/><br/>
                <TextField
                    id={"aplicacao"}
                    value={this.state.aplicacao}
                    onChange={this.salvaAlteracao.bind(this, 'aplicacao')}
                    floatingLabelText="Aplicação da peça"/><br/>
                <TextField
                    id={"valorMaximo"}
                    value={this.state.valorMaximo}
                    type={'number'}
                    onChange={this.salvaAlteracao.bind(this, 'valorMaximo')}
                    floatingLabelText="Valor máximo"/><br/>
                <DatePickerPt
                    id={"dataInicio"}
                    hintText={"Data inicial do anúncio"}
                    onChange={this.handleChangeInicio} />
                <DatePickerPt
                    id={"dataFinal"}
                    hintText={"Data final do anúncio"}
                    onChange={this.handleChangeFim} />
                <br/>
                <Divider/>
                <br/>
                <RaisedButton
                    label="Buscar peças"
                    primary={true}
                    style={Constants.STYLES.textField}
                    onClick={() => {
                        alert(`${this.state.dataInicio}\n${this.state.dataFim}`)
                    }}/>
            </div>
        );
    }
}