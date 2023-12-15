import React, { useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { CartContext } from '../components/content/CartProvider';
import { token, userInfo } from "../components/signals/LoginSignal"
import { Link } from 'react-router-dom';
import { paymentMethod } from '../components/signals/OrderSignal';
import axios from "axios";


function ShoppingCart() {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  
  const handlePaymentMethodChange = (event) => {
    paymentMethod.value = event.target.value;
  };

  useEffect(() => {
    console.log(paymentMethod.value);
  }, []);

  function sendOrder() {

    const order = {
        customer: userInfo.value.id,
        payStatus: paymentMethod.value,
        items: cartItems.map((item) => ({
            product: item.name,
            amount: item.quantity,
            price: item.price,
          })),
    }

    axios.post('http://localhost:3001/orders', order)
        .then((res) => {
            console.log('Tilaus onnistui:' , res.data);
        })
        .catch((error) => {
            console.log('Virhe tuli:', error);
        })
  }
  

  // Laskee ostoskorin tuotteiden kokonaishinnan
  const totalPrice = () => cartItems.reduce((total, item) => total + (item.quantity * item.price), 0);

  return (
          
    <div className="shoppingPreview">       
        {cartItems.length > 0 ? (
        
        <table className="shoppingTable">
            <tr><th>Tuote:</th><th>Hinta/kpl:</th><th>Määrä:</th><th>Yhteensä:</th><th>&nbsp;</th></tr>
            {/* Listaa kaikki ostoskorissa olevat tuotteet*/}
            {cartItems.map((item, index) => (              
                <tr key={index}>
                    {console.log(cartItems)}
                    {/* Näyttää tuotteen nimen, määrän ja yhteishinnan */}
                    <td>{item.name}</td><td>{item.price} €</td><td>{item.quantity}</td><td>{item.quantity * item.price} €</td>
                    {/* Poista-nappi poistaa tuotteen ostoskorista */}
                    <td><Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>Poista</Button></td>
                </tr>
            ))}
        </table>
        ) : (
        // Ilmoittaa, jos ostoskori on tyhjä
        <p className="m-2">Ostoskori on tyhjä</p>
        )}
        <div className="total-price p-2">
            {/* Näyttää ostoskorin kokonaishinnan */}
            <strong>Kokonaissumma: {totalPrice()} €</strong>
        </div>
        {/* Nappi ostoskorin tyhjentämiseksi */}
        <Button variant="warning" onClick={clearCart} className="m-2">Tyhjennä ostoskori</Button>
        <hr />

        {!token.value ?
            <div className="shoppingCartUserInfo">
                <p>Tilaaminen vaatii rekisteröitymisen. Jos olet jo kanta-asiakas, kirjaudu tunnuksillasi, kiitos.</p>
                <button class= "button"><Link to={'/kirjaudu'}>Kirjaudu </Link></button>
                <button class= "button"><Link to={'/rekisteroidy'}>Rekisteröidy</Link></button>
            </div> :
              
            <div className="shoppingCartUserInfo">
                <p>Etunimi: {userInfo.value.fname}</p>
                <p>Sukunimi: {userInfo.value.lname}</p>
                <p>Postitusosoite: {userInfo.value.address} {userInfo.value.post} </p>
                <select value={paymentMethod.value} onChange={handlePaymentMethodChange} className="order-form__select">
                    <option value="">Valitse maksutapa</option>
                    <option value={paymentMethod.value.bank}>Pankki</option>
                    <option value={paymentMethod.value.card}>Korttimaksu</option>
                    <option value={paymentMethod.value.mobilepay}>MobilePay</option>
                    <option value={paymentMethod.value.invoice}>Lasku</option>
                </select>             
                {cartItems.length > 0 ? 
                <Button variant="warning" className="m-2" onClick={sendOrder}>Vahvista tilaus</Button> : ''
                }
            </div>
            
            
        }
        
    </div>
        
  );
}

export default ShoppingCart;
