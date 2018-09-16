import * as React from 'react';


class Price extends React.Component<any> {
    public render() {
        return (
            <div>
            { this.props.usd && <p>USD: ${this.props.usd * this.props.value}</p> }
            { this.props.nzd && <p>NZD: ${this.props.nzd * this.props.value}</p> }
            </div>
        )
    }
};

export default Price; 