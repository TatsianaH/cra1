import React from 'react';
import '../App.css';
import MenuItem from "./MenuItem";

function Menu() {
  return (
      <nav>
          <ul>
              <MenuItem/>
              <MenuItem/>
              <MenuItem/>
              <MenuItem/>
          </ul>
      </nav>
  );
}

export default Menu;
