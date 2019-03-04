import React from 'react';
import './Buttons.css';
import Button from "./Button/Button";


const Buttons = (props) => {
    return (
        <div className='buttonsContainer'>
            {props.menu.map((item,index) => {
                return(
                    <Button addIngr={()=>props.add(item)} removeIngr={()=>props.remove(item)} key={index} name={item.filling} disabled={item.show}/>
                )
            })}
        </div>
    )
};
export default Buttons;