import React from 'react';
import '../App.css';
import myLogo from '../logo.png';

function Logo() {
  return (
      <div className="logo">
        <img src={myLogo} alt="Logo icon" className="logoPic"/>
      </div>
  );
}

export default Logo;
