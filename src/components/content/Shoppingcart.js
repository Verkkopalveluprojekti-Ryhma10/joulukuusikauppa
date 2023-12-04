import React, { useContext } from "react";
import { Dropdown, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import '../../styles/';
import { CartContext } from '../content/CartProvider';


function ShoppingCart() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const totalPrice = () => cartItems.reduce((total, item) => total + (item.quantity * item.price), 0);

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Ostoskori ({cartItems.length})
      </Dropdown.Toggle>

      <Dropdown.Menu className="shopping-cart-dropdown-menu">
        <ListGroup className="shopping-cart-dropdown">
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <ListGroupItem key={index}>
                {item.name} - Määrä: {item.quantity} - Yhteensä: {item.quantity * item.price} €
                <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>Poista</Button>
              </ListGroupItem>
            ))
          ) : (
            <p className="m-2">Ostoskori on tyhjä</p>
          )}
          <div className="total-price p-2">
            <strong>Kokonaissumma: {totalPrice()} €</strong>
          </div>
          <Button variant="warning" onClick={clearCart} className="m-2">Tyhjennä ostoskori</Button>
        </ListGroup>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ShoppingCart;