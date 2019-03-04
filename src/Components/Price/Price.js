import React from 'react';
import './Price.css';

const Price = (props) => {
    return (
        <div>
            <span>Current Price: {props.price}</span>
        </div>
    )
};
export default Price;