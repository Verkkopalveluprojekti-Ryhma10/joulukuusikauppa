import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function CartItem({ item, removeFromCart }) {
  return (
    <div className="row mb-3">
      <div className="col-sm-3">
        <img src={item.image} className="img-fluid" alt={item.name} />
      </div>
      <div className="col-sm-5">
        <span>{item.name}; {item.color}, {item.size}, {item.price}€</span>
      </div>
      <div className="col-sm-2">
        <input 
          type="number" 
          className="form-control" 
          value={item.quantity} 
          onChange={(e) => { /*logiikka tuotteen määrän päivittämiselle */ }}
        />
      </div>
      <div className="col-sm-2">
        <span>{item.totalPrice}€</span>
        <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.id)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
}

export default CartItem;