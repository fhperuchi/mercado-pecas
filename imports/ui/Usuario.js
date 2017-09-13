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

    cadastrarUsuario = () => {
        alert('Usuario cadastrado');
    };

    state = {checked: true, complemento: null};

    updateCheck() {
        this.setState((oldState) => {
            return {
                checked: !oldState.checked,
            };
        });
    }

    alteraComplemento = (event, index, complemento) => this.setState({complemento});

    render() {
        return (
            <div>
                <TopBar titulo='Usuário'/>
                <TextField
                    floatingLabelText='E-mail'/>
                <TextField floatingLabelText='Nome'/><br/>
                <MaskedTextField
                    floatingLabelText='CPF'
                    mask={'999.999.999-99'}/> ou &nbsp;
                <MaskedTextField
                    floatingLabelText='CNPJ'
                    mask={'99.999.999/9999-99'}/><br/>
                <MaskedTextField
                    floatingLabelText='Telefone'
                    mask={'(99) 9999-99999'}/>
                <TextField
                    floatingLabelText='Endereço'/><br/>
                <TextField
                    floatingLabelText='Número'/>
                <TextField
                    floatingLabelText='Bairro'/><br/>
                <MaskedTextField
                    floatingLabelText='CEP'
                    mask={'99999-999'} />
                <SelectField
                    floatingLabelText='Complemento'
                    value={this.state.complemento}
                    onChange={this.alteraComplemento}>
                    <MenuItem value={null} primaryText=""/>
                    <MenuItem value={1} primaryText="Casa"/>
                    <MenuItem value={2} primaryText="Apartamento"/>
                </SelectField><br/>
                <AutoComplete
                    floatingLabelText='Estado'
                    filter={AutoComplete.caseInsensitiveFilter}
                    dataSource={Constants.ESTADOS}/>
                <AutoComplete
                    floatingLabelText='Cidade'
                    filter={AutoComplete.caseInsensitiveFilter}
                    dataSource={Constants.CIDADES}/><br/>
                <Checkbox
                    label='Notificações'
                    style={Constants.STYLES.checkbox}
                    checked={this.state.checked}
                    onCheck={this.updateCheck.bind(this)}
                /><br/>
                <Divider/><br/>
                <Link to="/">
                    <RaisedButton
                        label='Salvar dados'
                        primary style={Constants.STYLES.textField}
                        onClick={this.cadastrarUsuario}/>
                </Link>
                <Link to='/'>
                    <RaisedButton
                        label='Voltar'
                        secondary
                        style={Constants.STYLES.textField}/>
                </Link><br/><br/>
                <BottomBar/>
            </div>
        )
    }
}