import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../../styles/Header.css';

function ShoppingCart() {
    // logiikkaa sisällön hallintaa

    return (
        <div className="shopping-cart">
            <span>Ostoskori</span>
            <FontAwesomeIcon icon={faShoppingCart} />
            {/* valittujentuotteiden määrän */}
        </div>
    );
}

export default ShoppingCart;