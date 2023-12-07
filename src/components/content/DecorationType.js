import React, { useState, useContext } from 'react';
import axios from 'axios';
import { CartContext } from '../content/CartProvider';

// DecorationType-komponentti, joka ottaa vastaan propsit koristetyypille
function DecorationType(props) {
  // Käyttää CartContextia hankkiakseen addToCart-funktion
  const { addToCart } = useContext(CartContext);
  // Käyttää useState-hookia hallitakseen tuotteen määrää
  const [quantity, setQuantity] = useState(1);

  // Käsittelee määrän muutoksen ja päivittää tilaa
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  // Käsittelee tuotteen lisäämisen ostoskoriin
  const handleAddToCart = () => { 
    addToCart({ id: props.type, name: props.label, price: props.price, quantity: parseInt(quantity) });
  };

  return (
    <div className="decoration-type">
      {/* Näyttää koristetyypin nimen ja kuvauksen */}
      <h3>{props.label}</h3>
      <img src={props.image ? require('../../assets'+props.image) : require('../../assets/images/eioo.jpg')} />
      <p>{props.description}</p>
      {/* Näyttää tuotteen hinnan */}
      <p>{props.price} €</p>
      {/* Näyttää tuotteen kuvan */}
      
      {/* Määrän valintaelementti */}
      <label htmlFor="quantity">Määrä:</label>
      <input
        type="number"
        min="1"
        id="quantity"
        value={quantity}
        onChange={handleQuantityChange}
      />
      {/* Nappi tuotteen lisäämiseksi ostoskoriin */}
      <button onClick={handleAddToCart}>Lisää ostoskoriin</button>
    </div>
  );
}

export default DecorationType;