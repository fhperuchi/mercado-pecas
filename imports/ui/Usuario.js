import React from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import {Link} from 'react-router';

import Constants from './util/Constants';
import TopBar from './component/TopBar';
import BottomBar from './component/BottomBar';
import MaskedTextField from "./component/MaskedTextField";

export default class Usuario extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            nome: '',
            cpf: '',
            cnpj: '',
            telefone: '',
            endereco: '',
            numero: '',
            cep: '',
            bairro: '',
            cidade: '',
            estado: '',
            receberNotificacoes: true,
            complemento: null
        };
    }

    cadastrarUsuario = () => {
        console.log(`CPF: ${this.state.cpf}`);
        console.log(`CNPJ: ${this.state.cnpj}`);
        alert('Usuario cadastrado');
    };

    updateCheck() {
        this.setState((oldState) => {
            return {
                receberNotificacoes: !oldState.receberNotificacoes
            };
        });
    }

    alteraComplemento = (event, index, complemento) => this.setState({complemento});

    alteraCpf = (nomeInput, value) => {
        const field = {};
        field[nomeInput] = value;
        field['cnpj'] = '';
        document.querySelector('#cnpj').value = '';
        this.setState(field);
    };

    alteraCnpj = (nomeInput, value) => {
        const field = {};
        field[nomeInput] = value;
        field['cpf'] = '';
        document.querySelector('#cpf').value = '';
        this.setState(field);
    };

    render() {
        return (
            <div>
                <TopBar titulo='Usuário'/>
                <TextField
                    id={'email'}
                    floatingLabelText='E-mail'/>
                <TextField
                    id={'nome'}
                    floatingLabelText='Nome da pessoa ou empresa'/><br/>
                <MaskedTextField
                    id={'cpf'}
                    floatingLabelText='CPF da pessoa'
                    mask={'999.999.999-99'}
                    onBlur={this.alteraCpf.bind(this, 'cpf')}/> ou &nbsp;
                <MaskedTextField
                    id={'cnpj'}
                    floatingLabelText='CNPJ da empresa'
                    mask={'99.999.999/9999-99'}
                    onBlur={this.alteraCnpj.bind(this, 'cnpj')}/><br/>
                <MaskedTextField
                    id={'telefone'}
                    floatingLabelText='Telefone'
                    mask={'(99) 9999-99999'}/>
                <TextField
                    id={'endereco'}
                    floatingLabelText='Endereço'/><br/>
                <TextField
                    id={'numero'}
                    floatingLabelText='Número'/>
                <TextField
                    id={'bairro'}
                    floatingLabelText='Bairro'/><br/>
                <MaskedTextField
                    id={'cep'}
                    floatingLabelText='CEP'
                    mask={'99999-999'} />
                <SelectField
                    id={'complemento'}
                    value={this.state.complemento}
                    floatingLabelText='Complemento'
                    onChange={this.alteraComplemento}>
                    <MenuItem value={null} primaryText=""/>
                    <MenuItem value={1} primaryText="Casa"/>
                    <MenuItem value={2} primaryText="Apartamento"/>
                </SelectField><br/>
                <AutoComplete
                    id={'estado'}
                    value={this.state.estado}
                    floatingLabelText='Estado'
                    filter={AutoComplete.caseInsensitiveFilter}
                    dataSource={Constants.ESTADOS}/>
                <AutoComplete
                    id={'cidade'}
                    value={this.state.cidade}
                    floatingLabelText='Cidade'
                    filter={AutoComplete.caseInsensitiveFilter}
                    dataSource={Constants.CIDADES}/><br/><br/>
                <Checkbox
                    id={'receberNotificacoes'}
                    label='Receber notificações?'
                    style={Constants.STYLES.checkbox}
                    checked={this.state.receberNotificacoes}
                    onCheck={this.updateCheck.bind(this)}
                />
                <Divider/><br/>
                <RaisedButton
                    label='Salvar dados'
                    primary style={Constants.STYLES.textField}
                    onClick={this.cadastrarUsuario}/>
                <Link to='/'>
                    <RaisedButton
                        label='Voltar'
                        secondary
                        style={Constants.STYLES.textField}/>
                </Link>
                <BottomBar/>
            </div>
        )
    }
}