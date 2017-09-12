import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';
import Divider from 'material-ui/Divider';

import TopBar from './component/TopBar';
import BottomBar from './component/BottomBar';
import Constants from './util/Constants';
import ListaPecas from "./component/ListaPecas";

// mock
const pecas = [
    {
        _id: '1',
        codigos: ['RCCR00384, RCCR00452, RCCS00584, RCCR00384, RCCR00452, RCCS00584'],
        nome: 'Cilindro de roda',
        aplicacoes: ['Gol, Parati'],
        local: 'Limeira, São Paulo',
        valor: 100.1
    },
    {
        _id: '2',
        codigos: ['RPDI00400'],
        nome: 'Disco de freio',
        aplicacoes: ['Fiesta, Focus'],
        local: 'Piracicaba, São Paulo',
        valor: 1324.21
    }
];


export default class MinhasPecas extends React.Component {

    componentWillMount() {
        console.log('lista de peças vai ser carregada...')
    }

    render() {
        return (
            <div>
                <TopBar titulo="Minhas peças"/><br/>
                <ListaPecas pecas={pecas}/>
                <br/><Divider/><br/>
                <RaisedButton
                    label="Remover"
                    primary
                    style={Constants.STYLES.textField}/>
                <Link to="/">
                    <RaisedButton label="Voltar"
                                  secondary
                                  style={Constants.STYLES.textField}/><br/>
                </Link><br/>
                <BottomBar/>
            </div>
        );
    }

    componentDidMount() {
        console.log('lista de peças carregada!')
    }
};
