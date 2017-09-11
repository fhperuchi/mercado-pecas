import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import {browserHistory} from 'react-router';


export default class Menu extends React.Component {

    render() {
        return (
            <div>
                <AppBar title={this.props.titulo}
                        iconElementLeft={<IconMenu iconButtonElement={<IconButton><MenuIcon/></IconButton>}
                                                   anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                                                   targetOrigin={{horizontal: 'left', vertical: 'top'}}>
                            <MenuItem primaryText="Buscar peças" onClick={() => {
                                browserHistory.push('/')
                            }}/>
                            <MenuItem primaryText="Cadastrar peça para venda" onClick={() => {
                                browserHistory.push('cadastrar')
                            }}/>
                            <MenuItem primaryText="Minhas peças" onClick={() => {
                                browserHistory.push('minhasPecas')
                            }}/>
                            <MenuItem primaryText="Seus dados" onClick={() => {
                                browserHistory.push('usuario')
                            }}/>
                        </IconMenu>}
                        iconElementRight={<FlatButton label="Entrar" onClick={() => {
                            browserHistory.push('login')
                        }}/>}
                />
            </div>
        );
    }
}