import React from 'react';
import axios from 'axios';
import { deliveryAddress, contactInfo } from '../signals/OrderSignal';

const OrderForm = () => {
  const handleAddressChange = (e) => {
    deliveryAddress.value = e.target.value;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const orderData = {
        address: deliveryAddress.value,
        contact: contactInfo.value,
        // Lisää tähän muita tarvittavia tietoja
      };

      const response = await axios.post('http://localhost:3001/order-details', orderData);
      if (response.status === 200) {
        alert('Tilaus lähetetty onnistuneesti!');
        // Tässä voit ohjata käyttäjän esimerkiksi tilauksen vahvistussivulle
      }
    } catch (error) {
      console.error('Virhe tilauksen lähettämisessä:', error);
      alert('Tilauksen lähettäminen epäonnistui');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={deliveryAddress.value} onChange={handleAddressChange} />
      {/* Lisää muita kenttiä */}
      <button type="submit">Lähetä Tilaus</button>
    </form>
  );
};

export default OrderForm;