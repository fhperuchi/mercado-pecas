import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import {Link} from 'react-router';

import Constants from './util/Constants';
import TopBar from './component/TopBar';
import BottomBar from './component/BottomBar';
import Upload from 'material-ui-upload/Upload';

export default class CadastroPecaLote extends React.Component {

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

    onFileLoad = (e, file) => console.log(e.target.result, file.name);

    render() {
        return (
            <div>
                <TopBar titulo='Cadastrar peça para venda'/><br/>
                <Upload label="Selecionar arquivo CSV" onFileLoad={this.onFileLoad}/><br/>
                <Divider/><br/>
                <RaisedButton label='Cadastrar peças em lote'
                              primary
                              style={Constants.STYLES.textField}
                              onClick={() => {
                                  alert('Peças cadastradas!')
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