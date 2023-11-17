import React from 'react';
import ShoppingCart from '../content/Shoppingcart';
import '../../styles/Header.css'
import Navbar from "./Navbar";


function Header() {
    return (
      <header className="header">
            <h1>Joulukuusikauppa</h1>
            <Navbar />
            <ShoppingCart/>
        </header>
         
    );
  }
  
  export default Header;