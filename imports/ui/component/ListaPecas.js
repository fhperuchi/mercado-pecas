import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import Util from '../util/Util'

// mock
const pecas = [
    {
        _id: '1',
        codigos: 'RCCR00384, RCCR00452, RCCS00584, RCCR00384, RCCR00452, RCCS00584',
        nome: 'Cilindro de roda',
        aplicacoes: 'Gol, Parati',
        local: 'Limeira, São Paulo',
        valor: Util.formatMoney(100.1)
    },
    {
        _id: '2',
        codigos: 'RPDI00400',
        nome: 'Disco de freio',
        aplicacoes: 'Fiesta, Focus',
        local: 'Piracicaba, São Paulo',
        valor: Util.formatMoney(10000.21)
    }
];

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
                <TableBody showRowHover={true}>
                    {pecas.map((peca, index) => (
                    <TableRow key={peca._id}>
                        <TableRowColumn>{peca.codigos}</TableRowColumn>
                        <TableRowColumn>{peca.nome}</TableRowColumn>
                        <TableRowColumn>{peca.aplicacoes}</TableRowColumn>
                        <TableRowColumn>{peca.local}</TableRowColumn>
                        <TableRowColumn>{peca.valor}</TableRowColumn>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        );
    }
}