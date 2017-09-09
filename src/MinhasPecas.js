import React from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';

import Menu from './Menu'
import BottomBar from './BottomBar'
import Constants from './Constants'
import Util from './Util'

const MinhasPecas = () => (
    <div>
        <Menu titulo="Minhas peças" />
        <Table selectable={true}
               multiSelectable={true}>
            <TableHeader>
                <TableRow>
                    <TableHeaderColumn>Código</TableHeaderColumn>
                    <TableHeaderColumn>Nome</TableHeaderColumn>
                    <TableHeaderColumn>Valor (R$)</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableRowColumn>RCCR00384</TableRowColumn>
                    <TableRowColumn>Cilindro de roda</TableRowColumn>
                    <TableRowColumn>{Util.formatNumber(100.1)}</TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>RPDI00400</TableRowColumn>
                    <TableRowColumn>Disco de freio</TableRowColumn>
                    <TableRowColumn>{Util.formatNumber(10000.21)}</TableRowColumn>
                </TableRow>
            </TableBody>
        </Table>
        <RaisedButton label="Remover" primary style={Constants.STYLES.textField} /><br/>
        <br/><BottomBar />
    </div>
);
export default MinhasPecas;