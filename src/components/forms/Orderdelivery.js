import React, { useEffect, useState } from 'react';

const OrderDelivery = () => {
    // order details
    const [order, setOrder] = useState("");
    // delivery status
    const [deliveryStatus, setDeliveryStatus] = useState('');

    useEffect(() => {
        // Fetch order details
        const OrderDetails = async () => {
            try {
                const response = await fetch('?');
                const data = await response.json();
                setOrder(data.order);
                setDeliveryStatus(data.deliveryStatus);
            } catch (error) {
                console.error('Error fetching order info', error);
            }
        };

        fetchOrderDetails();
    }, []); // effect runs only once

    return (
        <div>
            <h1>Tilauksen tiedot</h1>

            {order ? (
        <div>
          <h2>Tilauksen yksityiskohdat</h2>
          <p>Tilauksen ID: {order.id}</p>
          <p>Tuote: {order.product}</p>
          {/* Add more order details as needed */}

          <h2>Toimituksen tila</h2>
          <p>Tila: {deliveryStatus}</p>
        </div>
      ) : (
        <p>Loading order details...</p>
      )}
    </div>
  );
};

export default OrderDelivery;