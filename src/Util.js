import { browserHistory } from 'react-router';
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

    formatNumber(value) {
        return numeral(value).format('0,0.00');
    },

    goTo(path) {
        browserHistory.push(path);
    },

    home() {
        browserHistory.push('/');
    }
};
export default Util;
