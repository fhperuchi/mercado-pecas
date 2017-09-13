import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Util from "../util/Util";

export default ListaPecas = ({pecas}) => {

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
                    <TableRowColumn>{peca.codigos.join(', ')}</TableRowColumn>
                    <TableRowColumn>{peca.nome}</TableRowColumn>
                    <TableRowColumn>{peca.aplicacoes.join(', ')}</TableRowColumn>
                    <TableRowColumn>{peca.local}</TableRowColumn>
                    <TableRowColumn>{Util.formatMoney(peca.valor)}</TableRowColumn>
                </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}