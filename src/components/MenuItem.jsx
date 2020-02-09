import React from 'react';
import '../App.css';

function MenuItem(props) {
console.log(props);
  return (
      <li>
          <a href={props.menuItem.link} className="txtlink">{props.menuItem.text}</a>
      </li>
  );
}

export default MenuItem;
//"javascript:void(0)" class="txtlink"