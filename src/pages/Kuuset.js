import React, { useState } from 'react';
import Metsakuusi from '../assets/images/metsakuusi.jpg';
import Mustakuusi from '../assets/images/mustakuusi.jpg';
import Sinikuusi from '../assets/images/sinikuusi.jpg';
import Manty from '../assets/images/manty.jpg'
import Tuija from '../assets/images/tuija.jpg'

const TreeType = ({ type, image, label }) => {
    const [expanded, setExpanded] = useState(false);
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);
  
    const handleExpand = () => {
      setExpanded(!expanded);
    };
  
    const handleSizeChange = (event) => {
      setSelectedSize(event.target.value);
    };
  
    const handleQuantityChange = (event) => {
      event.preventDefault();
      event.stopPropagation();
      setQuantity(parseInt(event.target.value, 10));
    };
  
    const handleSizeQuantityClick = (event) => {
      event.stopPropagation();
    };
  
    return (
      <div className={`TreeDiv ${expanded ? 'expanded' : ''}`} onClick={handleExpand}>
        <img src={image} alt={type} className={type.toLowerCase()} />
        <h3>{label}</h3>
  
        {expanded && (
        <div className="options" onClick={handleSizeQuantityClick}>
          <label>
            Valitse kuusen korkeus:
            <br />
            <input
              type="radio"
              value="80-120"
              checked={selectedSize === '80-120'}
              onChange={(e) => handleSizeChange(e)}
              id="1"
            />
            <label>80 - 120 cm   -   80€</label><br />
            <input
              type="radio"
              value="110-150"
              checked={selectedSize === '110-150'}
              onChange={(e) => handleSizeChange(e)}
              id="2"
            />
            <label>110 - 150 cm   -   100€</label><br />

            <input
              type="radio"
              value="140-180"
              checked={selectedSize === '140-180'}
              onChange={(e) => handleSizeChange(e)}
              id="3"
            />
            <label>140 - 180 cm   -   140€</label><br />
          </label><br />

          <input
              type="radio"
              value="170-210"
              checked={selectedSize === '170-210'}
              onChange={(e) => handleSizeChange(e)}
              id="4"
            />
            <label>170 - 210 cm   -   160€</label><br />

            <input
              type="radio"
              value="200-240"
              checked={selectedSize === '200-240'}
              onChange={(e) => handleSizeChange(e)}
              id="5"
            />
            <label>200 - 240 cm   -   200€</label><br />

          <label>
            Määrä:
            <input type="number" value={quantity} onChange={(e) => handleQuantityChange(e)} />
          </label>

          <button>Add to Cart</button>
        </div>
      )}
    </div>
  );
};

  const Kuuset = () => {
    return (
      <div className='kuuset-container'>
        <TreeType type="Metsa" image={Metsakuusi} label="Metsäkuusi" />
        <TreeType type="Musta" image={Mustakuusi} label="Mustakuusi" />
        <TreeType type="Sini" image={Sinikuusi} label="Sinikuusi" />
        <TreeType type="Manty" image={Manty} label="Mänty" />
        <TreeType type="Tuija" image={Tuija} label="Timanttituija" />
      </div>
    );
  };
  
  export default Kuuset;