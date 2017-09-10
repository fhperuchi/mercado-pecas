import React from 'react';
import DatePicker from 'material-ui/DatePicker';

export default class DatePickerPt extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: null};
    }

    handleChange = (event, date) => {
        this.setState({value: date});
    };

    render() {
        const IntlPolyfill = require('intl');
        let DateTimeFormat = IntlPolyfill.DateTimeFormat;
        require('intl/locale-data/jsonp/pt');
        return (
            <DatePicker
                value={this.state.value}
                onChange={this.handleChange}
                hintText={this.props.name}
                autoOk={true}
                cancelLabel='Cancelar'
                container={'inline'}
                locale='pt'
                DateTimeFormat={DateTimeFormat}
            />
        );
    }
}