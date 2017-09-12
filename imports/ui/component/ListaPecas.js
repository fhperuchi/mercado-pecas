import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn,} from 'material-ui/Table';

import Util from '../util/Util'

export default class ListaPecas extends React.Component {

    render() {
        return (
            <Table selectable={true} multiSelectable={true}>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>Códigos</TableHeaderColumn>
                        <TableHeaderColumn>Nome (descrição)</TableHeaderColumn>
                        <TableHeaderColumn>Aplicações</TableHeaderColumn>
                        <TableHeaderColumn>Local</TableHeaderColumn>
                        <TableHeaderColumn>Valor</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableRowColumn>RCCR00384, RCCR00452</TableRowColumn>
                        <TableRowColumn>Cilindro de roda</TableRowColumn>
                        <TableRowColumn>Gol, Parati</TableRowColumn>
                        <TableRowColumn>Limeira, São Paulo</TableRowColumn>
                        <TableRowColumn>{Util.formatMoney(100.1)}</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>RPDI00400</TableRowColumn>
                        <TableRowColumn>Disco de freio</TableRowColumn>
                        <TableRowColumn>Fiesta, Focus</TableRowColumn>
                        <TableRowColumn>Piracicaba, São Paulo</TableRowColumn>
                        <TableRowColumn>{Util.formatMoney(10000.21)}</TableRowColumn>
                    </TableRow>
                </TableBody>
            </Table>
        );
    }
}