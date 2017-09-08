import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const Menu = () => (
    <div>
        <AppBar title="Mercado das Peças"
                iconElementLeft={<IconMenu
                    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}>
                    <MenuItem primaryText="Buscar peças"/>
                    <MenuItem primaryText="Cadastrar peça para venda"/>
                    <MenuItem primaryText="Sair"/>
                </IconMenu>}
                iconElementRight={<FlatButton label="Entrar" />}
        />
    </div>
);

export default Menu;