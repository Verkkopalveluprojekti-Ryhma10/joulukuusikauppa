import React, { useState, useContext } from 'react';
import { CartContext } from '../content/CartProvider';

function DecorationType(props) {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleAddToCart = () => { 
    addToCart({ id: props.id, price: props.price, quantity: parseInt(quantity) });
  };

  return (
    <div className="decoration-type">
      <h3>{props.label}</h3>
      <p>{props.description}</p>
      <p>Hinta: {props.price} €</p>
      <label htmlFor="quantity">Määrä:</label>
      <input
        type="number"
        min="1"
        id="quantity"
        value={quantity}
        onChange={handleQuantityChange}
      />
      <button onClick={handleAddToCart}>Lisää ostoskoriin</button>
    </div>
  );
}

export default DecorationType;
