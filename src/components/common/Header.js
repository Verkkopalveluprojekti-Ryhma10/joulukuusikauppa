import React from 'react';
import '../../styles/Header.css'
import Navbar from "./Navbar";
import DaysToChristmas from '../content/DaysToChristmas'


function Header() {
    return (
      <div>
        <header className="header">
          <h1>Joulukuusikauppa</h1>
          <DaysToChristmas className="days"/>     
        </header>
        <div>
          <Navbar />
        </div>
      </div>
    );
  }
  
  export default Header;