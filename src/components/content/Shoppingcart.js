import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import '../../styles/ShoppingCart.css'

//Ostoskorin logiigan ym hahmottelua

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);

  //tuotteen lisääminen ostoskoriin
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Tarkistetaan, onko tuote jo korissa
      const isProductInCart = prevItems.find(item => item.id === product.id);

      if (isProductInCart) {
        // Jos on, päivitetään vain määrää
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Jos ei ole, lisätään tuote korin listalle
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  //tuotteen poistaminen ostoskorista id:n perusteella
  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  //ostoskorin tuotteiden määrän laskeminen
  const totalItems = () => {
    return cartItems.length;
  };

  //useffect koukku
  useEffect(() => {
    //tässä voisi olla joku fetch, jolla haetaan ostoskorin sisältö
  });

  return (
    <div className="shopping-cart">
      <span>Ostoskori</span>
      <FontAwesomeIcon icon={faShoppingCart} />
      <span>{totalItems()}</span> {/* näytetään tuotteiden kokonaismäärä */}
      <div>
        {cartItems.length > 0 ? (
          //jos ostoskorissa on tuotteita, näytetään ne listana
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>{item.name}</li> //jokainen tuote listataan
            ))}
          </ul>
        ) : (
          //jos ostoskori on tyhjä, näytetään viesti
          <p className="ShopCartText">Ostoskori on tyhjä</p>
        )}
      </div>
    </div>
  );
}

export default ShoppingCart;
