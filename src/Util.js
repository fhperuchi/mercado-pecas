import numeral from 'numeral';

numeral.language('pt-BR', {
    delimiters: {
        thousands: '.',
        decimal: ',',
    },
    abbreviations: {
        thousand: 'k',
        million: 'm',
        billion: 'b',
        trillion: 't',
    },
    currency: {
        symbol: 'R$',
    },
});
numeral.language('pt-BR');

const Util = {

    formatMoney(value) {
        return numeral(value).format('R$ 0,0.00');
    },

    formatNumber(value) {
        return numeral(value).format('0,0.00');
    }

};
export default Util;
