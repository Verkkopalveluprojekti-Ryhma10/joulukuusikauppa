import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Kuuset = () => {
  const [KuusetData, setKuusiData] = useState([]);
  const [expandedMetsaKuusi, setExpandedMetsaKuusi] = useState(false);
  const [expandedMustaKuusi, setExpandedMustaKuusi] = useState(false);
  const [expandedSiniKuusi, setExpandedSiniKuusi] = useState(false);
  const [selectedOptionMetsaKuusi, setSelectedOptionMetsaKuusi] = useState(null);
  const [selectedOptionMustaKuusi, setSelectedOptionMustaKuusi] = useState(null);
  const [selectedOptionSiniKuusi, setSelectedOptionSiniKuusi] = useState(null);
  const [amountMetsaKuusi, setAmountMetsaKuusi] = useState(1);
  const [amountMustaKuusi, setAmountMustaKuusi] = useState(1);
  const [amountSiniKuusi, setAmountSiniKuusi] = useState(1);

  const toggleExpandMetsaKuusi = () => {
    setExpandedMetsaKuusi(!expandedMetsaKuusi);
  };

  const toggleExpandMustaKuusi = () => {
    setExpandedMustaKuusi(!expandedMustaKuusi);
  };

  const toggleExpandSiniKuusi = () => {
    setExpandedSiniKuusi(!expandedSiniKuusi);
  };

  useEffect(() => {
    axios
      .get('http://localhost:3001/products?category=1')
      .then((res) => {
        const KuusiData = res.data;
        setKuusiData(KuusiData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const MetsaKuusi = KuusetData.length > 0 ? KuusetData[0] : null;
  const MustaKuusi = KuusetData.length > 4 ? KuusetData[4] : null;
  const SiniKuusi = KuusetData.length > 8 ? KuusetData[8] : null;

  const handleOptionChangeMetsaKuusi = (name2) => {
    setSelectedOptionMetsaKuusi(name2);
  };

  const handleOptionChangeMustaKuusi = (name2) => {
    setSelectedOptionMustaKuusi(name2);
  };

  const handleOptionChangeSiniKuusi = (name2) => {
    setSelectedOptionSiniKuusi(name2);
  };

  const handleAmountChangeMetsaKuusi = (e) => {
    setAmountMetsaKuusi(parseInt(e.target.value, 10) || 1);
  };

  const handleAmountChangeMustaKuusi = (e) => {
    setAmountMustaKuusi(parseInt(e.target.value, 10) || 1);
  };

  const handleAmountChangeSiniKuusi = (e) => {
    setAmountSiniKuusi(parseInt(e.target.value, 10) || 1);
  };

  return (
    <div className="TreeContainer">
      {/* MetsaKuusi */}
      <div className={`TreeDiv ${expandedMetsaKuusi ? 'expanded' : ''}`}>
        {MetsaKuusi && (
          <div>
            <h3 onClick={toggleExpandMetsaKuusi}>{MetsaKuusi.name}</h3>
            {expandedMetsaKuusi && (
              <div>
                <img src={MetsaKuusi.image_url} alt={MetsaKuusi.name} />
                <p>{MetsaKuusi.description}</p>
                {KuusetData.slice(1, 5).map((product, index) => (
                  <div key={index}>
                    <label>
                      <input
                        type="radio"
                        value={product.name2}
                        checked={selectedOptionMetsaKuusi === product.name2}
                        onChange={() => handleOptionChangeMetsaKuusi(product.name2)}
                      />
                      {product.name2}
                    </label>
                    <p>{product.price}€</p>
                  </div>
                ))}
                <label>
                  Amount:
                  <input
                    type="number"
                    value={amountMetsaKuusi}
                    onChange={handleAmountChangeMetsaKuusi}
                    min="1"
                  />
                </label>
                <button>Add to Cart</button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* MustaKuusi */}
      <div className={`TreeDiv ${expandedMustaKuusi ? 'expanded' : ''}`}>
        {MustaKuusi && (
          <div>
            <h3 onClick={toggleExpandMustaKuusi}>{MustaKuusi.name}</h3>
            {expandedMustaKuusi && (
              <div>
                <img src={MustaKuusi.image_url} alt={MustaKuusi.name} />
                <p>{MustaKuusi.description}</p>
                {KuusetData.slice(4, 8).map((product, index) => (
                  <div key={index}>
                    <label>
                      <input
                        type="radio"
                        value={product.name2}
                        checked={selectedOptionMustaKuusi === product.name2}
                        onChange={() => handleOptionChangeMustaKuusi(product.name2)}
                      />
                      {product.name2}
                    </label>
                    <p>{product.price}€</p>
                  </div>
                ))}
                <label>
                  Amount:
                  <input
                    type="number"
                    value={amountMustaKuusi}
                    onChange={handleAmountChangeMustaKuusi}
                    min="1"
                  />
                </label>
                <button>Add to Cart</button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* SiniKuusi */}
      <div className={`TreeDiv ${expandedSiniKuusi ? 'expanded' : ''}`}>
        {SiniKuusi && (
          <div>
            <h3 onClick={toggleExpandSiniKuusi}>{SiniKuusi.name}</h3>
            {expandedSiniKuusi && (
              <div>
                <img src={SiniKuusi.image_url} alt={SiniKuusi.name} />
                <p>{SiniKuusi.description}</p>
                {KuusetData.slice(8, 12).map((product, index) => (
                  <div key={index}>
                    <label>
                      <input
                        type="radio"
                        value={product.name2}
                        checked={selectedOptionSiniKuusi === product.name2}
                        onChange={() => handleOptionChangeSiniKuusi(product.name2)}
                      />
                      {product.name2}
                    </label>
                    <p>{product.price}€</p>
                  </div>
                ))}
                <label>
                  Amount:
                  <input
                    type="number"
                    value={amountSiniKuusi}
                    onChange={handleAmountChangeSiniKuusi}
                    min="1"
                  />
                </label>
                <button>Add to Cart</button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Kuuset;









