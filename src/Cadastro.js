import React from 'react';
import DatePickerPt from './component/DatePickerPt';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import {Link} from 'react-router';

import Constants from './Constants';
import Menu from './component/Menu';
import BottomBar from './BottomBar';


export default class Cadastro extends React.Component {

    cadastrarPeca = () => {
        alert('Peça cadastrada!')
    };

    render() {
        return (
            <div>
                <Menu titulo="Cadastrar peça para venda"/>
                <TextField
                    floatingLabelText="Código da peça"/><br/>
                <TextField
                    floatingLabelText="Nome da peça"/><br/>
                <TextField
                    floatingLabelText="Valor da peça"/><br/>
                <DatePickerPt
                    name="Data final do anúncio"/>
                <br/><Divider/><br/>
                <RaisedButton label="Cadastrar peça"
                              primary
                              style={Constants.STYLES.textField}
                              onClick={this.cadastrarPeca}/>
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