import React from 'react';
import '../../styles/Header.css'
import Navbar from "./Navbar";
import DaysToChristmas from '../content/DaysToChristmas'
import { Link, Outlet } from 'react-router-dom'


function Header() {
    return (
      <div>
        <Link to={'/kirjaudu'}>kirjaudu</Link>
        <header className="header">
          <h1>Joulukuusikauppa</h1>
          <DaysToChristmas className="days"/>     
        </header>
        <div>
          <Navbar />
        </div>
        <Outlet />
      </div>
    );
  }
  
  export default Header;