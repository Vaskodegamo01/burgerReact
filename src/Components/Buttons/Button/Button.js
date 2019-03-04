import React from 'react';
import './Button.css';

const Button = (props) => {
    return (
        <div>
            <span>{props.name}</span>
            <button onClick={props.removeIngr} disabled={props.disabled}>Less</button>
            <button onClick={props.addIngr}>More</button>
        </div>
    )
};
export default Button;