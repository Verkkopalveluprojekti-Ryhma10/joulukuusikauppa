import React, { useContext } from 'react';
import { CartContext } from '../content/CartProvider';

// Product-komponentti, joka ottaa sisäänsä yksittäisen tuotteen tiedot propsina
function Product({ product }) {
  // Käyttää useContext-hookia hankkiakseen addToCart-funktion CartContextista
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      {/* Näyttää tuotteen nimen */}
      <h3>{product.name}</h3>
      {/* Tähän voi lisätä muita tuotteen tietoja, kuten hinnan tai kuvauksen */}
      {/* Nappi, joka lisää tuotteen ostoskoriin käyttäen CartContextin addToCart-funktiota */}
      <button onClick={() => addToCart(product)}>Lisää ostoskoriin</button>
    </div>
  );
}

export default Product; 
