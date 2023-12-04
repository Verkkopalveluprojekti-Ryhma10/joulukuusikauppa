import React from 'react';
import '../../styles/Header.css'
import Navbar from "./Navbar";
import DaysToChristmas from '../content/DaysToChristmas'
import { Link } from 'react-router-dom'
import { token, userInfo } from "../signals/LoginSignal"


function Header() {

    return (
      <div>
        { !token.value ? 
        <button><Link to={'/kirjaudu'}>Kirjaudu </Link></button> :
        <button onClick={()=> token.value = ''}><Link to={'/'}>Kirjaudu ulos</Link></button>         
        }
        <Link to={'/rekisteroidy'}>Rekisteröidy</Link>
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