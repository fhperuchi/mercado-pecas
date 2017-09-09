import React from 'react';
import DatePickerPt from './component/DatePickerPt';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

import Constants from './Constants'
import Menu from './Menu'

class Busca extends React.Component {

    render() {
        return (
            <div>
                <Menu
                    titulo="Buscar peças"/>
                <TextField
                    id={"codigo"}
                    floatingLabelText="Código da peça"/><br/>
                <TextField
                    id={"nome"}
                    floatingLabelText="Nome da peça"/><br/>
                <DatePickerPt
                    id={"dataInicio"}
                    name="Data inicial do anúncio"/>
                <DatePickerPt
                    id={"dataFim"}
                    name="Data final do anúncio"/>
                <br/>
                <Divider />
                <br/>
                <RaisedButton
                    label="Buscar peças"
                    primary={true}
                    style={Constants.STYLES.textField}
                    onClick={() => {alert(document.getElementById("codigo").value)}}/>
            </div>
        );
    }
}
export default Busca;