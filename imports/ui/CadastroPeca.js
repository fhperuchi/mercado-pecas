import React from 'react';
import DatePickerPt from './component/DatePickerPt';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import {Link} from 'react-router';

import Constants from './util/Constants';
import TopBar from './component/TopBar';
import BottomBar from './component/BottomBar';
import Lista from "./component/Lista";
import Mock from "./util/Mock";

export default class CadastroPeca extends React.Component {

    constructor() {
        super();
        this.state = {
            codigo: '',
            nome: '',
            aplicacoes: [],
            valor: '',
            dataExpiracao: null
        };
    }

    handleInputChange = event => {
        const { target } = event;
        this.setState({ [target.name]: target.value });
    };

    render() {
        return (
            <div>
                <TopBar titulo='Cadastrar peça para venda'/>

                <TextField
                    name="codigo"
                    style={Constants.STYLES.tamanhoMaior}
                    value={this.state.codigo}
                    onChange={this.handleInputChange}
                    floatingLabelText='Códigos da peça (enter a cada novo código)'/><br/>
                <Lista dataSource={Mock.codigos()} />
                <TextField
                    name="nome"
                    value={this.state.nome}
                    onChange={this.handleInputChange}
                    floatingLabelText='Nome (descrição) da peça'/><br/>
                <TextField
                    name="aplicacoes"
                    style={Constants.STYLES.tamanhoMaior}
                    value={this.state.aplicacoes}
                    onChange={this.handleInputChange}
                    floatingLabelText='Aplicações da peça (enter a cada nova aplicação)'/><br/>
                <Lista dataSource={Mock.aplicacoes()} />
                <TextField
                    name="valor"
                    value={this.state.valor}
                    type={'number'}
                    onChange={this.handleInputChange}
                    floatingLabelText='Valor'/><br/>
                <DatePickerPt
                    name="dataExpiracao"
                    value={this.state.dataExpiracao}
                    hintText={'Data de expiração do anúncio'}
                    onChange={(event, date) => {
                        this.setState({dataExpiracao: date})
                    }}
                    onDismiss={() => {
                        this.setState({dataExpiracao: null})
                    }}/><br/>
                <Divider/><br/>
                <RaisedButton label='Cadastrar peça'
                              primary
                              style={Constants.STYLES.textField}
                              onClick={() => {
                                  alert('Peça cadastrada!')
                              }}/>
                <Link to='/'>
                    <RaisedButton label='Voltar'
                                  secondary
                                  style={Constants.STYLES.textField}/><br/>
                </Link><br/>
                <BottomBar/>
            </div>
        );
    }
}