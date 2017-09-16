import { Meteor } from 'meteor/meteor';
import React from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import {Link} from 'react-router';

import MaskedTextField from "./component/MaskedTextField";
import Constants from './util/Constants';
import TopBar from './component/TopBar';
import BottomBar from './component/BottomBar';

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
            estado: '',
            cidade: '',
            cidades: [],
            receberNotificacoes: true,
            complemento: null,
            estados: []
        };
    }

    cadastrarUsuario = () => {
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

    handleInputChange = event => {
        const { target } = event;
        this.setState({ [target.name]: target.value });
        if (target.name === 'cpf') {
            this.setState({ cnpj: '' })
        }
        if (target.name === 'cnpj') {
            this.setState({ cpf: '' })
        }
        if (target.name === 'estado') {
            Meteor.call('cidadesByNomeEstado', {nome: target.value}, (err, res) => {
                err ? console.log(err) : this.setState({cidade: '', cidades: res});
            });
        }
    };

    limitNumber(e, max) {
        e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, max)
    }

    componentWillMount() {
        Meteor.call('estados', {}, (err, res) => {
            err ? console.log(err) : this.setState({estados: res});
        });
    }

    autoCompleteCidadeUpdateInput = (searchText) => {
        this.setState({
            cidade: searchText
        });
    };

    render() {
        return (
            <div>
                <TopBar titulo='Usuário'/>
                <TextField
                    name="email"
                    value={this.state.email}
                    floatingLabelText='E-mail'
                    onChange={this.handleInputChange}/>
                <TextField
                    name="nome"
                    value={this.state.nome}
                    floatingLabelText='Nome da pessoa ou empresa'
                    onChange={this.handleInputChange}/>
                <br/>
                <TextField
                    name="cpf"
                    onInput={(e) => this.limitNumber(e, 10) }
                    type="number"
                    value={this.state.cpf}
                    floatingLabelText='CPF da pessoa (só números)'
                    mask={'999.999.999-99'}
                    onChange={this.handleInputChange}/> ou &nbsp;
                <TextField
                    name="cnpj"
                    type="number"
                    onInput={(e) => this.limitNumber(e, 14) }
                    value={this.state.cnpj}
                    floatingLabelText='CNPJ da empresa (só números)'
                    mask={'99.999.999/9999-99'}
                    onChange={this.handleInputChange}/>
                <br/>
                <MaskedTextField
                    name="telefone"
                    value={this.state.telefone}
                    floatingLabelText='Telefone'
                    mask={'(99) 9999-99999'}/>
                <TextField
                    name="endereco"
                    value={this.state.endereco}
                    onChange={this.handleInputChange}
                    floatingLabelText='Endereço'/>
                <br/>
                <TextField
                    name="numero"
                    value={this.state.numero}
                    onChange={this.handleInputChange}
                    floatingLabelText='Número'/>
                <TextField
                    name="bairro"
                    value={this.state.bairro}
                    onChange={this.handleInputChange}
                    floatingLabelText='Bairro'/>
                <br/>
                <MaskedTextField
                    name="cep"
                    value={this.state.cep}
                    floatingLabelText='CEP'
                    mask={'99999-999'} />
                <SelectField
                    name="complemento"
                    value={this.state.complemento}
                    floatingLabelText='Complemento'
                    onChange={this.alteraComplemento}>
                    <MenuItem value={null} primaryText=""/>
                    <MenuItem value={1} primaryText="Casa"/>
                    <MenuItem value={2} primaryText="Apartamento"/>
                </SelectField>
                <br/>
                <AutoComplete
                    name="estado"
                    value={this.state.estado}
                    floatingLabelText='Estado'
                    onBlur={this.handleInputChange}
                    filter={AutoComplete.caseInsensitiveFilter}
                    openOnFocus={true}
                    dataSource={this.state.estados}
                    dataSourceConfig={{text: 'nome', value: 'nome'}}/>
                <AutoComplete
                    name="cidade"
                    value={this.state.cidade}
                    searchText={this.state.cidade}
                    floatingLabelText='Cidade'
                    openOnFocus={true}
                    onBlur={this.handleInputChange}
                    onUpdateInput={this.autoCompleteCidadeUpdateInput}
                    filter={AutoComplete.caseInsensitiveFilter}
                    dataSource={this.state.cidades}/>
                <br/><br/>
                <Checkbox
                    name="receberNotificacoes"
                    label='Receber notificações?'
                    style={Constants.STYLES.checkbox}
                    checked={this.state.receberNotificacoes}
                    onCheck={this.updateCheck.bind(this)}/>
                <Divider/>
                <br/>
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
                <br/><br/>
                <BottomBar/>
            </div>
        )
    }
}