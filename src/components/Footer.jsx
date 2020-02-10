import React from 'react';
import '../App.css';
import Logo from "./Logo";
import Menu from './Menu';
import Menu2 from './Menu2';
import Menu3 from "./Menu3";

function Footer(props) {
  return (
      <footer>
          <div className="container">
              <Logo/>
              Version 0.0.1 © 2020
              <Menu menuItems = {props.menuItems}/>
              <Menu2 items2 = {props.items2}/>
              <Menu3 textStory = {props.textStory}/>
          </div>
      </footer>
  );
}

export default Footer;
