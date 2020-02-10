import React from 'react';
import '../App.css';
import MenuItem from "./MenuItem";

function Menu2(props){
    return (
        <nav>
            <ul>
                {props.items2.map(el => <MenuItem  key={el.text} menuItem={el}/>)}
            </ul>
        </nav>
    );
}

export default Menu2;