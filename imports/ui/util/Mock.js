const Mock = {

    pecas() {
        return [
            {
                _id: '1',
                codigos: ['RCCR00384, RCCR00452, RCCS00584, RCCR00384, RCCR00452, RCCS00584'],
                nome: 'Cilindro de roda',
                aplicacoes: ['Gol, Parati'],
                local: 'Limeira, São Paulo',
                valor: 100.1
            },
            {
                _id: '2',
                codigos: ['RPDI00400'],
                nome: 'Disco de freio',
                aplicacoes: ['Fiesta, Focus'],
                local: 'Piracicaba, São Paulo',
                valor: 10000.21
            }
        ];
    },

    codigos() {
        return [
            {
                _id: '1',
                value: 'RCCR00384'
            },
            {
                _id: '2',
                value: 'RCCS00584'
            }
        ];
    },

    aplicacoes() {
        return [
            {
                _id: '1',
                value: 'Gol'
            },
            {
                _id: '2',
                value: 'Parati'
            }
        ];
    }
};
export default Mock;