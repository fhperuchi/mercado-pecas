import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import IntlPolyfill from 'intl';
import 'intl/locale-data/jsonp/pt';

export default class DatePickerPt extends React.Component {

    render() {
        return (
            <DatePicker
                {...this.props}
                autoOk={true}
                cancelLabel='Cancelar'
                container={'inline'}
                locale='pt'
                DateTimeFormat={IntlPolyfill.DateTimeFormat}
            />
        );
    }
}