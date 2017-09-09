import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';

import Util from './Util'
import Constants from './Constants'
import Menu from './Menu'
import BottomBar from './BottomBar'

function cadastrarUsuario() {
    Util.goTo('/')
}

const styles = {
    block: {
        maxWidth: 250,
    },
    checkbox: {
        marginBottom: 16,
    },
};

export default class Usuario extends React.Component {
    state = {
        checked: true,
    }

    updateCheck() {
        this.setState((oldState) => {
            return {
                checked: !oldState.checked,
            };
        });
    }

    render() {
        return (
            <div>
                <Menu titulo="Seus dados"/>
                <TextField floatingLabelText="Nome da empresa" /><TextField floatingLabelText="E-mail" /><br/>
                <TextField floatingLabelText="CNPJ" /><TextField floatingLabelText="Telefone" /><br/>
                <TextField floatingLabelText="Endereço"/><TextField floatingLabelText="Numero" type={'number'}/><br/>
                <TextField floatingLabelText="Bairro"/><TextField floatingLabelText="Complemento (ex: casa, apto, etc)"/><br/>
                <AutoComplete
                    floatingLabelText="Estado"
                    filter={AutoComplete.caseInsensitiveFilter}
                    dataSource={Constants.ESTADOS} />
                <AutoComplete
                    floatingLabelText="Cidade"
                    filter={AutoComplete.caseInsensitiveFilter}
                    dataSource={Constants.CIDADES}/>
                <Checkbox
                    label="Notificações"
                    style={styles.checkbox}
                    checked={this.state.checked}
                    onCheck={this.updateCheck.bind(this)}
                />
                <br/><Divider /><br/>
                <RaisedButton label="Salvar dados" primary style={Constants.STYLES.textField} onClick={cadastrarUsuario} />
                <RaisedButton label="Voltar" secondary style={Constants.STYLES.textField} onClick={Util.home} />
                <br/><br/><BottomBar />
            </div>
        )
    }
}