import React from 'react';
import '../../styles/Header.css'
import Navbar from "./Navbar";
import DaysToChristmas from '../content/DaysToChristmas'
import { Link, Outlet } from 'react-router-dom'


function Header() {

    return (
      <div>
        <Link to={'/kirjaudu'}>kirjaudu</Link>
        <Link to={'/rekisteroidy'}>kirjaudu</Link>
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