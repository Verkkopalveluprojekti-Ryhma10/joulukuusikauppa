import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    // Alusta ostoskori tallennetuilla arvoilla tai tyhjänä
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

   // Tallenna ostoskorin muutokset localStorageen aina kun cartItems muuttuu
   useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const isProductInCart = prevItems.find(item => item.id === product.id);
  
      if (isProductInCart) {
        // Jos tuote on jo korissa, päivitetään sen määrää quantity-arvolla
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
        );
      } else {
        // Jos tuote ei ole korissa, lisätään se ostoskoriin
        return [...prevItems, product];
      }
    });
  };

    const removeFromCart = (itemId) => {
      //päivitetään ostoskorin tila poistamalla tuote, jonka id vastaa annettua itemId:tä
      setCartItems(currentItems => currentItems.filter(item => item.id !== itemId));
    };

    const clearCart = () => {
      //tyhjennetään ostoskori
      setCartItems([]); //asetetaan ostoskorin tilaksi tyhjä taulukko
    };
  
    return (
      <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
        {children}
      </CartContext.Provider>
    );
  }

