import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import '../../styles/ShoppingCart.css';

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

// Adding a product to the cart
const addToCart = (product) => {
  const userId = localStorage.getItem('userId');
  console.log('userId:', userId);
  console.log('product.id:', product.id);
  console.log('product.price:', product.price);

  fetch('http://localhost:3001/cart', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ productId: product.id, userId: userId, amount: 1, price: product.price }),
})
  .then(response => response.json())
  .then(data => {
    setCartItems(previousItems => {
      //tarkistetaan, onko tuote jo ostoskorissa
      const isProductInCart = previousItems.find(item => item.id === data.productId);
  
      if (isProductInCart) {
        //jos on, päivitetään sen määrää
        return previousItems.map(item =>
          item.id === data.productId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      //jos ei ole, lisätään uusi tuote
      return [...previousItems, { ...product, quantity: 1, id: data.productId }];
    });
  })
};

  //tuotteen poistaminenn sen id:n perusteella
    const removeFromCart = (productId) => {
      setCartItems((previousItems) => previousItems.filter((item) => item.id !== productId));
    };

  //lasketaan tuotteiden kokonaismäärä
  const totalProducts = () => {
    return cartItems.length;
  };

  // useEffect hook
  useEffect(() => {
    fetch('http://localhost:3001/products') 
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="shopping-cart">
      <h2>Ostoskori <FontAwesomeIcon icon={faShoppingCart} /></h2>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <button onClick={() => removeFromCart(item.id)}>Poista ostoskorista</button>
          </div>
        ))
      ) : (
        <p className="ShopCartText">Ostoskori on tyhjä</p>
      )}
      {/* Tässä voisi olla ostoskorin yhteenveto ja "Siirry kassalle" -nappi */}
    </div>
  );
  }
  export default ShoppingCart;

