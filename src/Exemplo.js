import React from 'react';
class Exemplo extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 'teste',
        };
    }

    render() {
        return (
            <button className="square" onClick={() => this.setState({value: 'ALTERADO!'})}>
                {this.state.value}
            </button>
        );
    }
}
export default Exemplo;