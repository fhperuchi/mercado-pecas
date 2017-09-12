import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn,} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';
import Divider from 'material-ui/Divider';

import Menu from './component/Menu';
import BottomBar from './BottomBar';
import Constants from './Constants';
import Util from './Util';

export default class MinhasPecas extends React.Component {

    componentWillMount() {
        console.log('lista de peças vai ser carregada...')
    }

    render() {
        return (
            <div>
                <Menu titulo="Minhas peças"/><br/>

                <Table selectable={true} multiSelectable={true}>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>Códigos</TableHeaderColumn>
                            <TableHeaderColumn>Nome (descrição)</TableHeaderColumn>
                            <TableHeaderColumn>Aplicações</TableHeaderColumn>
                            <TableHeaderColumn>Valor</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableRowColumn>RCCR00384</TableRowColumn>
                            <TableRowColumn>Cilindro de roda</TableRowColumn>
                            <TableRowColumn>Gol, Parati</TableRowColumn>
                            <TableRowColumn>{Util.formatMoney(100.1)}</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>RPDI00400</TableRowColumn>
                            <TableRowColumn>Disco de freio</TableRowColumn>
                            <TableRowColumn>Fiesta, Focus</TableRowColumn>
                            <TableRowColumn>{Util.formatMoney(10000.21)}</TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
                <br/><Divider/><br/>
                <RaisedButton
                    label="Remover"
                    primary
                    style={Constants.STYLES.textField}/>
                <Link to="/">
                    <RaisedButton label="Voltar"
                                  secondary
                                  style={Constants.STYLES.textField}/><br/>
                </Link>
                <br/><BottomBar/>
            </div>
        );
    }

    componentDidMount() {
        console.log('lista de peças carregada!')
    }
};
