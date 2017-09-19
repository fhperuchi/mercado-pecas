import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';
import Divider from 'material-ui/Divider';

import TopBar from './component/TopBar';
import BottomBar from './component/BottomBar';
import Constants from './util/Constants';
import ListaPecas from "./component/ListaPecas";
import Mock from "./util/Mock";


export default class PecasFavoritas extends React.Component {

    componentWillMount() {
        console.log('lista de peças vai ser carregada...')
    }

    render() {
        return (
            <div>
                <TopBar titulo="Peças favoritas"/><br/>
                <ListaPecas pecas={Mock.pecas()}/>
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
