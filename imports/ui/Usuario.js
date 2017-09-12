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


export default class Usuario extends React.Component {

    cadastrarUsuario = () => {
        alert('Usuario cadastrado');
    }

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
                <TopBar titulo="Usuário"/>
                <TextField floatingLabelText="E-mail"/><TextField floatingLabelText="Nome"/><br/>
                <TextField floatingLabelText="CPF ou CNPJ"/><TextField floatingLabelText="Telefone"/><br/>
                <TextField floatingLabelText="Endereço"/><TextField floatingLabelText="Numero" type={'number'}/><br/>
                <TextField floatingLabelText="Bairro"/><SelectField floatingLabelText="Complemento"
                                                                    value={this.state.complemento}
                                                                    onChange={this.alteraComplemento}>
                                                                    <MenuItem value={null} primaryText="" />
                                                                    <MenuItem value={1} primaryText="Casa" />
                                                                    <MenuItem value={2} primaryText="Apartamento" />
                                                       </SelectField><br/>
                <AutoComplete
                    floatingLabelText="Estado"
                    filter={AutoComplete.caseInsensitiveFilter}
                    dataSource={Constants.ESTADOS}/>
                <AutoComplete
                    floatingLabelText="Cidade"
                    filter={AutoComplete.caseInsensitiveFilter}
                    dataSource={Constants.CIDADES}/>
                <Checkbox
                    label="Notificações"
                    style={Constants.STYLES.checkbox}
                    checked={this.state.checked}
                    onCheck={this.updateCheck.bind(this)}
                />
                <br/><Divider/><br/>
                <Link to="/">
                    <RaisedButton
                        label="Salvar dados"
                        primary style={Constants.STYLES.textField}
                        onClick={this.cadastrarUsuario}/>
                </Link>
                <Link to="/">
                    <RaisedButton
                        label="Voltar"
                        secondary
                        style={Constants.STYLES.textField}/>
                </Link><br/><br/>
                <BottomBar/>
            </div>
        )
    }
}