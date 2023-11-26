import React, { useState, useEffect } from 'react';

function ProductList({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <button onClick={() => addToCart(product)}>Lisää ostoskoriin</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;