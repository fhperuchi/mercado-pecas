import { browserHistory } from 'react-router';
import numeral from 'numeral';

const Utils = {

    formatMoney(value) {
        return numeral(value).format('$ 0,0.00');
    },

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
export default Utils;
