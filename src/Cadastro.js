import React from 'react';
import DatePickerPt from './component/DatePickerPt';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import {Link} from 'react-router';
import {List, ListItem} from 'material-ui/List';
import Delete from 'material-ui/svg-icons/action/delete';

import Constants from './Constants';
import Menu from './component/Menu';
import BottomBar from './BottomBar';

export default class Cadastro extends React.Component {

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

    salvaAlteracao = (nomeInput, event) => {
        var field = {};
        field[nomeInput] = event.target.value;
        this.setState(field);
    };

    render() {
        return (
            <div>
                <Menu titulo="Cadastrar peça para venda"/>
                <TextField
                    id={"codigo"}
                    style={Constants.STYLES.tamanhoMaior}
                    value={this.state.codigo}
                    onChange={this.salvaAlteracao.bind(this, 'codigo')}
                    floatingLabelText="Códigos da peça (enter a cada novo código)"/><br/>
                <List style={Constants.STYLES.tamanhoMaior}>
                        <ListItem primaryText="RCCR00384" rightIcon={<Delete />} />
                        <ListItem primaryText="RPDI00180" rightIcon={<Delete />} />
                </List>
                <TextField
                    id={"nome"}
                    value={this.state.nome}
                    onChange={this.salvaAlteracao.bind(this, 'nome')}
                    floatingLabelText="Nome (descrição) da peça"/><br/>
                <TextField
                    id={"aplicacoes"}
                    style={Constants.STYLES.tamanhoMaior}
                    value={this.state.aplicacoes}
                    onChange={this.salvaAlteracao.bind(this, 'aplicacoes')}
                    floatingLabelText="Aplicações da peça (enter a cada nova aplicação)"/><br/>
                <List style={Constants.STYLES.tamanhoMaior}>
                    <ListItem primaryText="Gol" rightIcon={<Delete />} />
                    <ListItem primaryText="Parati" rightIcon={<Delete />} />
                </List>
                <TextField
                    id={"valor"}
                    value={this.state.valor}
                    type={'number'}
                    onChange={this.salvaAlteracao.bind(this, 'valor')}
                    floatingLabelText="Valor"/><br/>
                <DatePickerPt
                    id={"dataExpiracao"}
                    value={this.state.dataExpiracao}
                    hintText={"Data de expiração do anúncio"}
                    onChange={(event, date) => {
                        this.setState({dataExpiracao: date})
                    }}
                    onDismiss={() => {
                        this.setState({dataExpiracao: null})
                    }}/>
                <br/><Divider/><br/>
                <RaisedButton label="Cadastrar peça"
                              primary
                              style={Constants.STYLES.textField}
                              onClick={() => {
                                  alert('Peça cadastrada!')
                              }}/>
                <Link to="/">
                    <RaisedButton label="Voltar"
                                  secondary
                                  style={Constants.STYLES.textField}/><br/>
                </Link>
                <br/><BottomBar/>
            </div>
        );
    }
}