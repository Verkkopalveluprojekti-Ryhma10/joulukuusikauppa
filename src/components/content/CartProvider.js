import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
      setCartItems((prevItems) => {
        // Tarkistetaan, löytyykö tuote jo ostoskorista
        const isProductInCart = prevItems.find(item => item.id === product.id);
  
        if (isProductInCart) {
          // Jos tuote on jo korissa, päivitetään sen määrää
          return prevItems.map(item =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          );
        } else {
          // Jos tuote ei ole korissa, lisätään se ostoskoriin
          return [...prevItems, { ...product, quantity: 1 }];
        }
      });
    };
  
    return (
      <CartContext.Provider value={{ cartItems, addToCart }}>
        {children}
      </CartContext.Provider>
    );
  }

