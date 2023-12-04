import React from 'react';
import Product from './Product';

// ProductList-komponentti ottaa 'products'-propsin, joka sisältää tuotteiden tiedot
function ProductList({ products }) {
  return (
    <div>
      {
        // Käyttää JavaScriptin map-funktiota listatakseen kaikki tuotteet
        // Jokaiselle tuotteelle luodaan Product-komponentti
        products.map((product) => (
          // 'key' on tarpeen, kun luodaan listaelementtejä Reactissa. Se auttaa Reactia tunnistamaan, mitkä elementit ovat muuttuneet.
          // 'product' propsina välitetään yksittäisen tuotteen tiedot Product-komponentille
          <Product key={product.id} product={product} />
        ))
      }
    </div>
  );
}

export default ProductList; 