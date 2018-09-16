import * as React from 'react';


const Price = (props: any) => (
    <div>
        { props.usd && <p>USD: ${props.usd * props.value}</p> }
        { props.nzd && <p>NZD: ${props.nzd * props.value}</p> }
        { props.error && <p>{props.error}</p> }
    </div>
);

export default Price; 