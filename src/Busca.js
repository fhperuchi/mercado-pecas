import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn,} from 'material-ui/Table';

import './css/styles.css'
import Constants from './Constants';
import DatePickerPt from './component/DatePickerPt';
import Menu from './component/Menu';
import Util from './Util';

export default class Busca extends React.Component {

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
        var field = {};
        field[nomeInput] = event.target.value;
        this.setState(field);
    };

    render() {
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
                    floatingLabelText="Raio para busca"/> km
                <br/><Divider/><br/>
                <RaisedButton
                    label="Buscar peças"
                    primary={true}
                    style={Constants.STYLES.textField}
                    onClick={() => {
                        alert(`${this.state.dataInicio}\n${this.state.dataFim}`)
                    }}/>
                <br/><br/><Divider/>
                <Table selectable={true} multiSelectable={true}>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>Códigos</TableHeaderColumn>
                            <TableHeaderColumn>Nome (descrição)</TableHeaderColumn>
                            <TableHeaderColumn>Aplicações</TableHeaderColumn>
                            <TableHeaderColumn>Local</TableHeaderColumn>
                            <TableHeaderColumn>Valor</TableHeaderColumn>
                            <TableHeaderColumn>Ação</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableRowColumn>RCCR00384</TableRowColumn>
                            <TableRowColumn>Cilindro de roda</TableRowColumn>
                            <TableRowColumn>Gol, Parati</TableRowColumn>
                            <TableRowColumn>Limeira, São Paulo</TableRowColumn>
                            <TableRowColumn>{Util.formatMoney(100.1)}</TableRowColumn>
                            <TableRowColumn>
                                <RaisedButton label="Comprar"
                                              primary/>
                            </TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>RPDI00400</TableRowColumn>
                            <TableRowColumn>Disco de freio</TableRowColumn>
                            <TableRowColumn>Fiesta, Focus</TableRowColumn>
                            <TableRowColumn>Piracicaba, São Paulo</TableRowColumn>
                            <TableRowColumn>{Util.formatMoney(10000.21)}</TableRowColumn>
                            <TableRowColumn>
                                <RaisedButton label="Comprar" primary/>
                            </TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table><br/>
                <RaisedButton label="Comprar selecionadas" primary/>
            </div>
        );
    }
}