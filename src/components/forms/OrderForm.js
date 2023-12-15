import React, { useState } from 'react';
import axios from 'axios';
import { firstName, lastName, streetAddress, postalCode, city, country, paymentMethod } from '../signals/OrderSignal';
import '../../styles/OrderForm.css';

const OrderForm = () => {
  const [orderSubmitted, setOrderSubmitted] = useState(false); //tila tilauksen tilan seurantaan

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //kerää tiedot signaaleista
      const orderData = {
        firstName: firstName.value,
        lastName: lastName.value,
        address: streetAddress.value,
        postalCode: postalCode.value,
        city: city.value,
        country: country.value,
        paymentMethod: paymentMethod.value
      };

      const response = await axios.post('http://localhost:3001/order-details', /* tilaustiedot */);
      if (response.status === 200) {
        setOrderSubmitted(true); //päivittää tilan, kun tilaus on lähetetty onnistuneesti
      }
    } catch (error) {
      console.error('Virhe tilauksen lähettämisessä:', error);
      alert('Tilauksen lähettäminen epäonnistui');
    }
  };

  if (orderSubmitted) {
    //näytetään kiitosviesti, kun tilaus on lähetetty onnistuneesti
    return <div className="order-form__thank-you">Kiitos tilauksestasi!</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="order-form">
      <div className="order-form__field">
        <label className="order-form__label">Etunimi</label>
        <input type="text" value={firstName.value} onChange={(e) => firstName.value = e.target.value} className="order-form__input" />
      </div>
      <div className="order-form__field">
        <label className="order-form__label">Sukunimi</label>
        <input type="text" value={lastName.value} onChange={(e) => lastName.value = e.target.value} className="order-form__input" />
      </div>
      <div className="order-form__field">
        <label className="order-form__label">Katuosoite</label>
        <input type="text" value={streetAddress.value} onChange={(e) => streetAddress.value = e.target.value} className="order-form__input" />
      </div>
      <div className="order-form__field">
        <label className="order-form__label">Postinumero</label>
        <input type="text" value={postalCode.value} onChange={(e) => postalCode.value = e.target.value} className="order-form__input" />
      </div>
      <div className="order-form__field">
        <label className="order-form__label">Kaupunki</label>
        <input type="text" value={city.value} onChange={(e) => city.value = e.target.value} className="order-form__input" />
      </div>
      <div className="order-form__field">
        <label className="order-form__label">Maa</label>
        <input type="text" value={country.value} onChange={(e) => country.value = e.target.value} className="order-form__input" />
      </div>
      <div className="order-form__field">
        <label className="order-form__label">Maksutapa</label>
        <select value={paymentMethod.value} onChange={(e) => paymentMethod.value = e.target.value} className="order-form__select">
          <option value="">Valitse maksutapa</option>
          <option value="bank">Pankki</option>
          <option value="card">Korttimaksu</option>
          <option value="mobilepay">MobilePay</option>
          <option value="invoice">Lasku</option>
        </select>
      </div>
      <div className="order-form__field">
        <button type="submit" className="order-form__button">Lähetä Tilaus</button>
      </div>
    </form>
  );
};

export default OrderForm;