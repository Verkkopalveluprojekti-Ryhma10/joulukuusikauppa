import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Dropdown, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { CartContext } from './CartProvider';


function ShoppingCart() {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  // Laskee ostoskorin tuotteiden kokonaishinnan
  const totalPrice = () => cartItems.reduce((total, item) => total + (item.quantity * item.price), 0);

  const submitOrder = async () => {
    try {
      const response = await axios.post('http://localhost:3001/orders', { items: cartItems });
      if (response.status === 200) {
        clearCart();
        alert('Jatketaan tilauslomakkeelle!');
        navigate('/order-form'); //Käytä 'navigate' ohjataksesi käyttäjän OrderForm-komponenttiin
      }
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Tilauksen lähettäminen epäonnistui');
    }
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {/* Näyttää ostoskorissa olevien tuotteiden määrän */}
        Ostoskori ({cartItems.length})
      </Dropdown.Toggle>

      <Dropdown.Menu className="shopping-cart-dropdown-menu">
        <ListGroup className="shopping-cart-dropdown">
          {cartItems.length > 0 ? (
            
            // Listaa kaikki ostoskorissa olevat tuotteet
            cartItems.map((item, index) => (
              
              <ListGroupItem key={index}>
              {console.log(cartItems)}
                {/* Näyttää tuotteen nimen, määrän ja yhteishinnan */}
                {item.name} - Määrä: {item.quantity} - Yhteensä: {item.quantity * item.price} €
                {/* Poista-nappi poistaa tuotteen ostoskorista */}
                <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>Poista</Button>
              </ListGroupItem>
            ))
          ) : (
            // Ilmoittaa, jos ostoskori on tyhjä
            <p className="m-2">Ostoskori on tyhjä</p>
          )}
          <div className="total-price p-2">
            {/* Näyttää ostoskorin kokonaishinnan */}
            <strong>Kokonaissumma: {totalPrice()} €</strong>
          </div>
          {/* Nappi ostoskorin tyhjentämiseksi */}
          <Button variant="primary" onClick={submitOrder} className="m-2">Tilaa</Button>
          <Button variant="warning" onClick={clearCart} className="m-2">Tyhjennä ostoskori</Button>
        </ListGroup>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ShoppingCart;
