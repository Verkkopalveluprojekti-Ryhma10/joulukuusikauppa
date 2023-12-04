import React, { useContext } from 'react';
import { CartContext } from '../content/CartProvider';

function Product({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <h3>{product.name}</h3>
      {/* Muut tuotteen tiedot */}
      <button onClick={() => addToCart(product)}>Lisää ostoskoriin</button>
    </div>
  );
}

export default Product;