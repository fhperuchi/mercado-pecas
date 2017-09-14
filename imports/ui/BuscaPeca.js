import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import {Link} from "react-router";

import Mock from "./util/Mock";
import Constants from './util/Constants';
import DatePickerPt from './component/DatePickerPt';
import TopBar from './component/TopBar';
import BottomBar from './component/BottomBar';
import ListaPecas from "./component/ListaPecas";

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

    handleInputChange = event => {
        const { target } = event;
        this.setState({ [target.name]: target.value });
    };

    render() {
        return (
            <div>
                <TopBar
                    titulo="Buscar peças"/>
                <TextField
                    name="codigo"
                    style={Constants.STYLES.tamanhoMaior}
                    value={this.state.codigo}
                    onChange={this.handleInputChange}
                    floatingLabelText="Código da peça (digite sem espaços, pontos ou traços"/><br/>
                <TextField
                    name="nome"
                    value={this.state.nome}
                    onChange={this.handleInputChange}
                    floatingLabelText="Nome da peça"/><br/>
                <TextField
                    name="aplicacao"
                    value={this.state.aplicacao}
                    onChange={this.handleInputChange}
                    floatingLabelText="Aplicação da peça"/><br/>
                <TextField
                    name="valorMaximo"
                    value={this.state.valorMaximo}
                    type={'number'}
                    onChange={this.handleInputChange}
                    floatingLabelText="Valor máximo"/><br/>
                <DatePickerPt
                    name="dataInicio"
                    value={this.state.dataInicio}
                    hintText={"Data inicial do anúncio"}
                    onChange={(event, date) => { this.setState({dataInicio: date})}}
                    onDismiss={() => { this.setState({dataInicio: null}) }}/>
                <DatePickerPt
                    name="dataFim"
                    value={this.state.dataFim}
                    hintText={"Data final do anúncio"}
                    onChange={(event, date) => {this.setState({dataFim: date})}}
                    onDismiss={() => { this.setState({dataFim: null}) }}/>
                <TextField
                    name="raioKm"
                    value={this.state.raioKm}
                    type={'number'}
                    onChange={this.handleInputChange}
                    floatingLabelText="Raio para busca"/> km<br/>
                <Divider/><br/>
                <RaisedButton
                    label="Buscar peças"
                    primary={true}
                    style={Constants.STYLES.textField}
                    onClick={() => {
                        console.log('Busca realizada!')
                    }}/><br/><br/>
                <Divider/>
                <ListaPecas pecas={Mock.pecas()} favoritar={true} /><br/>
                <Link to={'comprar-pecas'}>
                    <RaisedButton label="Comprar selecionadas" primary/><br/><br/>
                </Link>
                <BottomBar/>
            </div>
        );
    }
}