import React, { useState, useContext } from 'react';
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
    addToCart({ id: props.type, name: props.label+' '+props.label2, price: props.price, quantity: parseInt(quantity) });
  };

  return (
    <div className="decoration-type">
      {/* Näyttää koristetyypin nimen ja kuvauksen */}
      <h4>{props.label}</h4>
      <p>{props.label2}</p>
      {/* Näyttää tuotteen kuvan */}
      <img src={props.image ? require('../../assets'+props.image) : require('../../assets/images/eioo.jpg')} />
      {/* Näyttää tuotteen kuvaukset */}
      <p>{props.description}</p>
      {/* Näyttää tuotteen hinnan */}
      <p>{props.price} €</p>
      
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