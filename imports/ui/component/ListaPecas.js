import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Util from "../util/Util";
import IconButton from 'material-ui/IconButton';
import FavoriteIcon from 'material-ui/svg-icons/action/favorite';

const ListaPecas = ({pecas, selectable = true, favoritar = false}) => {

    return (
        <Table selectable={selectable} multiSelectable={selectable}>
            <TableHeader displaySelectAll={selectable}>
                <TableRow>
                    <TableHeaderColumn>Códigos</TableHeaderColumn>
                    <TableHeaderColumn>Nome (descrição)</TableHeaderColumn>
                    <TableHeaderColumn>Aplicações</TableHeaderColumn>
                    <TableHeaderColumn>Local</TableHeaderColumn>
                    <TableHeaderColumn>Valor</TableHeaderColumn>
                    { favoritar ? <TableHeaderColumn>Favoritar</TableHeaderColumn> : '' }
                </TableRow>
            </TableHeader>
            <TableBody showRowHover={true} displayRowCheckbox={selectable}>
                {pecas.map((peca, index) => (
                <TableRow key={peca._id}>
                    <TableRowColumn>{peca.codigos.join(', ')}</TableRowColumn>
                    <TableRowColumn>{peca.nome}</TableRowColumn>
                    <TableRowColumn>{peca.aplicacoes.join(', ')}</TableRowColumn>
                    <TableRowColumn>{peca.local}</TableRowColumn>
                    <TableRowColumn>{Util.formatMoney(peca.valor)}</TableRowColumn>
                    { favoritar ? <TableRowColumn>
                                    <IconButton><FavoriteIcon/></IconButton>
                                  </TableRowColumn>
                                : '' }
                </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};
ListaPecas.propTypes = {
    pecas: React.PropTypes.array
};
export default ListaPecas;