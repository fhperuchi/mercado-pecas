import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import {browserHistory} from 'react-router';
import Paper from 'material-ui/Paper';



export default class TopBar extends React.Component {

    constructor() {
        super();
        this.state = {
            logado: false
        };
    }

    render() {
        return (
            <div>
                <Paper zDepth={2}>
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
                                <MenuItem primaryText="Usuário" onClick={() => {
                                    browserHistory.push('usuario')
                                }}/>
                            </IconMenu>}
                            iconElementRight={<FlatButton label={this.state.logado ? 'Sair' : 'Entrar'} onClick={() => {
                                this.state.logado = !this.state.logado; browserHistory.push('login') }}/>}
                    />
                </Paper>
            </div>
        );
    }
}