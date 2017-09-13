import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import {Link} from 'react-router';

import Constants from './util/Constants';
import TopBar from './component/TopBar';
import BottomBar from './component/BottomBar';
import ListaPecas from "./component/ListaPecas";

const pecas = [
    {
        _id: '1',
        codigos: ['RCCR00384, RCCR00452, RCCS00584, RCCR00384, RCCR00452, RCCS00584'],
        nome: 'Cilindro de roda',
        aplicacoes: ['Gol, Parati'],
        local: 'Limeira, São Paulo',
        valor: 100.1
    }
];

export default class CompraPeca extends React.Component {

    constructor() {
        super();
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <TopBar titulo='Comprar peças'/>
                <ListaPecas pecas={pecas} selectable={false}/>
                <Divider/><br/>
                <RaisedButton label='Confirmar compra'
                              primary
                              style={Constants.STYLES.textField}
                              onClick={() => {
                                  alert('Peças compradas!')
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