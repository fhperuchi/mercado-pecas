import React from 'react';
import DatePicker from 'material-ui/DatePicker';

class DatePickerPt extends React.Component {

    render() {
        const IntlPolyfill = require('intl');
        let DateTimeFormat = IntlPolyfill.DateTimeFormat;
        require('intl/locale-data/jsonp/pt');
        return (
            <DatePicker
                hintText={this.props.name}
                autoOk={true}
                cancelLabel='Cancelar'
                container={'inline'}
                locale="pt"
                onDismiss={() => alert('cancelado')}
                DateTimeFormat={DateTimeFormat}
            />
        );
    }
}

export default DatePickerPt;