import React from 'react';
import DatePicker from 'material-ui/DatePicker';

export default class DatePickerPt extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const IntlPolyfill = require('intl');
        let DateTimeFormat = IntlPolyfill.DateTimeFormat;
        require('intl/locale-data/jsonp/pt');
        return (
            <DatePicker
                {...this.props}
                autoOk={true}
                cancelLabel='Cancelar'
                container={'inline'}
                locale='pt'
                DateTimeFormat={DateTimeFormat}
            />
        );
    }
}