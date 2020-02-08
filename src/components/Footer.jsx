import React from 'react';
import '../App.css';
import Logo from "./Logo";

function Footer() {
  return (
      <footer>
          <div className="container">
              <Logo/>
              Version 0.0.1 © 2020
          </div>
      </footer>
  );
}

export default Footer;
