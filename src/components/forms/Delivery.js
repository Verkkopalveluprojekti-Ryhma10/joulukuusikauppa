import React, { useState } from "react";

const TilauksenSeuranta = () => {

    const orderStatus = [
        { id: 1, status: 'Käsittelyssä'},
        { id: 2, status: 'Lähetetty' },
        { id: 3, status: 'Toimitettu' },
    ];


    const [orders, setOrders] = useState (orderStatus);

    const updateStatus = (orderId, newStatus) => {
        const updatedOrders = orders.map(order => {
            if (order.id === orderId) {
                return { ...order, status: newStatus};
            }

            return order;
        });
        setOrders(updatedOrders);
    };


    return (
        <div>
            <h1>TilauksenSeuranta</h1>
            <ul>
                {orders.map(order => (
                    <li key={order.id}>
                        <strong>Tilausnumero:</strong> {order.id}, <strong>Tila:</strong> {order.status}
                        <br />
                        <button onClick={() => updateStatus(order.id, 'Käsittelyssä')}>Aseta Käsittelyssä</button>
                        <button onClick={() => updateStatus(order.id, 'Lähetetty')}>Aseta Lähetetty</button>
                        <button onClick={() => updateStatus(order.id, 'Toimitettu')}>Aseta Toimitettu</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TilauksenSeuranta;