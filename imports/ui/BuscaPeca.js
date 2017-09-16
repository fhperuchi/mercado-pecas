import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import {Link} from "react-router";
import AutoComplete from 'material-ui/AutoComplete';

import Mock from "./util/Mock";
import Constants from './util/Constants';
import DatePickerPt from './component/DatePickerPt';
import TopBar from './component/TopBar';
import BottomBar from './component/BottomBar';
import ListaPecas from "./component/ListaPecas";

export default class BuscaPeca extends React.Component {

    constructor() {
        super();
        this.state = {
            codigo: '',
            nome: '',
            aplicacao: '',
            valorMaximo: '',
            dataInicio: null,
            dataFim: null,
            estado: '',
            estados: [],
            cidade: '',
            cidades: []
        };
    }

    handleInputChange = event => {
        const {target} = event;
        this.setState({[target.name]: target.value});
        if (target.name === 'estado') {
            Meteor.call('cidadesByNomeEstado', {nome: target.value}, (err, res) => {
                err ? console.log(err) : this.setState({cidade: '', cidades: res});
            });
        }
    };


    componentWillMount() {
        Meteor.call('estados', {}, (err, res) => {
            err ? console.log(err) : this.setState({estados: res});
        });
    }

    autoCompleteCidadeUpdateInput = (searchText) => {
        this.setState({
            cidade: searchText
        });
    };

    render() {
        return (
            <div>
                <TopBar
                    titulo="Buscar peças"/>
                <TextField
                    name="codigo"
                    style={Constants.STYLES.tamanhoMaior}
                    value={this.state.codigo}
                    onChange={this.handleInputChange}
                    floatingLabelText="Código da peça (digite sem espaços, pontos ou traços"/>
                <br/>
                <TextField
                    name="nome"
                    value={this.state.nome}
                    onChange={this.handleInputChange}
                    floatingLabelText="Nome da peça"/>
                <br/>
                <TextField
                    name="aplicacao"
                    value={this.state.aplicacao}
                    onChange={this.handleInputChange}
                    floatingLabelText="Aplicação da peça"/>
                <br/>
                <TextField
                    name="valorMaximo"
                    value={this.state.valorMaximo}
                    type={'number'}
                    onChange={this.handleInputChange}
                    floatingLabelText="Valor máximo"/>
                <br/>
                <DatePickerPt
                    name="dataInicio"
                    value={this.state.dataInicio}
                    floatingLabelText="Data inicial do anúncio"
                    onChange={(event, date) => {
                        this.setState({dataInicio: date})
                    }}
                    onDismiss={() => {
                        this.setState({dataInicio: null})
                    }}/>
                <DatePickerPt
                    name="dataFim"
                    value={this.state.dataFim}
                    floatingLabelText="Data final do anúncio"
                    onChange={(event, date) => {
                        this.setState({dataFim: date})
                    }}
                    onDismiss={() => {
                        this.setState({dataFim: null})
                    }}/>
                <br/>
                <AutoComplete
                    name="estado"
                    value={this.state.estado}
                    floatingLabelText='Estado'
                    onBlur={this.handleInputChange}
                    filter={AutoComplete.caseInsensitiveFilter}
                    openOnFocus={true}
                    dataSource={this.state.estados}
                    dataSourceConfig={{text: 'nome', value: 'nome'}}
                />
                <AutoComplete
                    name="cidade"
                    value={this.state.cidade}
                    searchText={this.state.cidade}
                    floatingLabelText='Cidade'
                    openOnFocus={true}
                    onBlur={this.handleInputChange}
                    onUpdateInput={this.autoCompleteCidadeUpdateInput}
                    filter={AutoComplete.caseInsensitiveFilter}
                    dataSource={this.state.cidades}/>
                <br/><br/>
                <Divider/>
                <br/>
                <RaisedButton
                    label="Buscar peças"
                    primary={true}
                    style={Constants.STYLES.textField}
                    onClick={() => {
                        console.log('Busca realizada!')
                    }}/>
                <br/><br/>
                <Divider/>
                <ListaPecas pecas={Mock.pecas()} favoritar={true}/>
                <br/>
                <Link to={'comprar-pecas'}>
                    <RaisedButton label="Comprar selecionadas" primary/>
                </Link>
                <br/><br/>
                <BottomBar/>
            </div>
        );
    }
}