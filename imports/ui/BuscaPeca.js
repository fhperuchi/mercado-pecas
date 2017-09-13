import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

import Constants from './util/Constants';
import DatePickerPt from './component/DatePickerPt';
import TopBar from './component/TopBar';
import BottomBar from './component/BottomBar';
import ListaPecas from "./component/ListaPecas";
import {Link} from "react-router";

const pecas = [
    {
        _id: '1',
        codigos: ['RCCR00384, RCCR00452, RCCS00584, RCCR00384, RCCR00452, RCCS00584'],
        nome: 'Cilindro de roda',
        aplicacoes: ['Gol, Parati'],
        local: 'Limeira, São Paulo',
        valor: 100.1
    },
    {
        _id: '2',
        codigos: ['RPDI00400'],
        nome: 'Disco de freio',
        aplicacoes: ['Fiesta, Focus'],
        local: 'Piracicaba, São Paulo',
        valor: 10000.21
    }
];

export default class BuscaPeca extends React.Component {

    constructor() {
        super();
        this.state = {
            codigo: '',
            nome: '',
            aplicacao: '',
            valorMaximo: '',
            dataInicio: null,
            dataFim: null,
            raioKm: ''
        };
    }

    salvaAlteracao = (nomeInput, event) => {
        let field = {};
        field[nomeInput] = event.target.value;
        this.setState(field);
    };

    render() {
        return (
            <div>
                <TopBar
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
                    value={this.state.dataInicio}
                    hintText={"Data inicial do anúncio"}
                    onChange={(event, date) => {
                        this.setState({dataInicio: date})
                    }}
                    onDismiss={() => {
                        this.setState({dataInicio: null})
                    }}/>
                <DatePickerPt
                    id={"dataFim"}
                    value={this.state.dataFim}
                    hintText={"Data final do anúncio"}
                    onChange={(event, date) => {
                        this.setState({dataFim: date})
                    }}
                    onDismiss={() => {
                        this.setState({dataFim: null})
                    }}/>
                <TextField
                    id={"raioKm"}
                    value={this.state.raioKm}
                    type={'number'}
                    onChange={this.salvaAlteracao.bind(this, 'raioKm')}
                    floatingLabelText="Raio para busca"/> km<br/>
                <Divider/><br/>
                <RaisedButton
                    label="Buscar peças"
                    primary={true}
                    style={Constants.STYLES.textField}
                    onClick={() => {
                        console.log(`${this.state.dataInicio}\n${this.state.dataFim}`)
                    }}/><br/><br/>
                <Divider/>
                <ListaPecas pecas={pecas} favoritar={true} /><br/>
                <Link to={'comprar-pecas'}>
                    <RaisedButton label="Comprar selecionadas" primary/><br/><br/>
                </Link>
                <BottomBar/>
            </div>
        );
    }
}