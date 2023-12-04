import React, { useEffect, useState } from 'react';
import axios from 'axios';

// components for different tree variations
const TreeType = ({ products }) => {
  const [expanded, setExpanded] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState('');
  const [quantity, setQuantity] = useState(1);

//handle expand feature
  const handleExpand = () => {
    setExpanded(!expanded);
  };

//handle selected variant
  const handleVariantChange = (event) => {
    setSelectedVariant(event.target.value);
  };

//handle selected amount
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

//expand doesn't close when selecting variant
  const handleVariantQuantityClick = (event) => {
    event.stopPropagation();
  };


  return (
    <div className={`TreeDiv ${expanded ? 'expanded' : ''}`} onClick={handleExpand}>
      <img src={products[0].image_url} alt={products[0].name} className={products[0].name.toLowerCase()} />
      <h3>{products[0].name}</h3>

      {expanded && (
        <div className="options" onClick={handleVariantQuantityClick}>
          <label>
            Valitse kuusen korkeus:
            <br />
            {products.map((variant, index) => (
              <div key={index}>
                <input
                  type="radio"
                  value={`${variant.name}-${variant.description}`}
                  checked={selectedVariant === `${variant.name}-${variant.description}`}
                  onChange={(e) => handleVariantChange(e)}
                  id={index}
                />
                <label>
                  {variant.description} - {variant.price}€
                </label>
                <br />
              </div>
            ))}
          </label>
          <br />
          <label>
            Määrä:
            <input type="number" value={quantity} onChange={(e) => handleQuantityChange(e)} />
          </label>
          <button>Lisää ostoskoriin</button>
        </div>
      )}
    </div>
  );
};

const Kuuset = () => {
  const [productList, setProductList] = useState([]);

// Fetch product list from the server
  useEffect(() => {
    axios
      .get('http://localhost:3001/products')
      .then((res) => setProductList(res.data))
      .catch((error) => console.error('Error fetching products: ' + error.message));
  }, []);

  // Group and filter products by name and category
  const groupedProducts = Object.values(
    productList.reduce((productGroups, product) => {
      const isCategoryOne = product.category === 1;
  
      if (isCategoryOne) {
        const productName = product.name;
  
        if (!productGroups[productName]) {
          productGroups[productName] = [];
        }
        
        productGroups[productName].push(product);
      }
  
      return productGroups;
    }, {})
  );

  return (
    <div>
      <div className="kuuset-container">
        {groupedProducts.map((products, index) => (
          <TreeType key={index} products={products} />
        ))}
      </div>
    </div>
  );
};

export default Kuuset;


