import React from 'react';
import '../../styles/Header.css'
import Navbar from "./Navbar";


function Header() {
    return (
      <div>
        <header className="header">
          <h1>Joulukuusikauppa</h1>     
        </header>
        <div>
          <Navbar />
        </div>
      </div>
    );
  }
  
  export default Header;