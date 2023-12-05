import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Kuuset = () => {
  //Data for all the trees
  const [KuusetData, setKuusiData] = useState([]);
  //Expand handle for all the treetypes
  const [expandedMetsaKuusi, setExpandedMetsaKuusi] = useState(false);
  const [expandedMustaKuusi, setExpandedMustaKuusi] = useState(false);
  const [expandedSiniKuusi, setExpandedSiniKuusi] = useState(false);
  const [expandedManty, setExpandedManty] = useState(false);
  const [expandedTimantti, setExpandedTimantti] = useState(false);
  const [expandedSerbian, setExpandedSerbian] = useState(false);
  //Size selection handle for all tree sizes
  const [selectedOptionMetsaKuusi, setSelectedOptionMetsaKuusi] = useState(null);
  const [selectedOptionMustaKuusi, setSelectedOptionMustaKuusi] = useState(null);
  const [selectedOptionSiniKuusi, setSelectedOptionSiniKuusi] = useState(null);
  const [selectedOptionManty, setSelectedOptionManty] = useState(null);
  const [selectedOptionTimantti, setSelectedOptionTimantti] = useState(null);
  const [selectedOptionSerbian, setSelectedOptionSerbian] = useState(null);
  //Quantity selection handle for all treetypes
  const [amountMetsaKuusi, setAmountMetsaKuusi] = useState(1);
  const [amountMustaKuusi, setAmountMustaKuusi] = useState(1);
  const [amountSiniKuusi, setAmountSiniKuusi] = useState(1);
  const [amountManty, setAmountManty] = useState(1);
  const [amountTimantti, setAmountTimantti] = useState(1);
  const [amountSerbian, setAmountSerbian] = useState(1);

  //Expand toggle on/off
  const toggleExpandMetsaKuusi = () => {
    setExpandedMetsaKuusi(!expandedMetsaKuusi);
  };
  
  const toggleExpandMustaKuusi = () => {
    setExpandedMustaKuusi(!expandedMustaKuusi);
  };
  
  const toggleExpandSiniKuusi = () => {
    setExpandedSiniKuusi(!expandedSiniKuusi);
  };
  
  const toggleExpandManty = () => {
    setExpandedManty(!expandedManty);
  };
  
  const toggleExpandTimantti = () => {
    setExpandedTimantti(!expandedTimantti);
  };
  
  const toggleExpandSerbian = () => {
    setExpandedSerbian(!expandedSerbian);
  };

  //Fetching data from products > category > 1
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

  //Way to get only the first treetype name and description
  const MetsaKuusi = KuusetData.length > 0 ? KuusetData[0] : null;
  const MustaKuusi = KuusetData.length > 4 ? KuusetData[4] : null;
  const SiniKuusi = KuusetData.length > 8 ? KuusetData[8] : null;
  const Manty = KuusetData.length > 12 ? KuusetData[12] : null;
  const Timantti = KuusetData.length > 16 ? KuusetData[16] : null;
  const Serbian = KuusetData.length > 20 ? KuusetData[20] : null;

  //Variant handle with event value
  const handleOptionChangeMetsaKuusi = (name2) => {
    setSelectedOptionMetsaKuusi(name2);
  };
  const handleOptionChangeMustaKuusi = (name2) => {
    setSelectedOptionMustaKuusi(name2);
  };
  const handleOptionChangeSiniKuusi = (name2) => {
    setSelectedOptionSiniKuusi(name2);
  };
  const handleOptionChangeManty = (name2) => {
    setSelectedOptionManty(name2);
  };
  const handleOptionChangeTimantti = (name2) => {
    setSelectedOptionTimantti(name2);
  };
  const handleOptionChangeSerbian = (name2) => {
    setSelectedOptionSerbian(name2);
  };

  //Amount selected is both an integer and atleast 1
  const handleAmountChangeMetsaKuusi = (e) => {
    setAmountMetsaKuusi(parseInt(e.target.value, 10) || 1);
  };
  const handleAmountChangeMustaKuusi = (e) => {
    setAmountMustaKuusi(parseInt(e.target.value, 10) || 1);
  };
  const handleAmountChangeSiniKuusi = (e) => {
    setAmountSiniKuusi(parseInt(e.target.value, 10) || 1);
  };
  const handleAmountChangeManty = (e) => {
    setAmountManty(parseInt(e.target.value, 10) || 1);
  };
  const handleAmountChangeTimantti = (e) => {
    setAmountTimantti(parseInt(e.target.value, 10) || 1);
  };
  const handleAmountChangeSerbian = (e) => {
    setAmountSerbian(parseInt(e.target.value, 10) || 1);
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
                  Määrä:
                  <input
                    type="number"
                    value={amountMetsaKuusi}
                    onChange={handleAmountChangeMetsaKuusi}
                    min="1"
                  />
                </label>
                <button>Lisää ostoskoriin</button>
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
                  Määrä:
                  <input
                    type="number"
                    value={amountMustaKuusi}
                    onChange={handleAmountChangeMustaKuusi}
                    min="1"
                  />
                </label>
                <button>Lisää ostoskoriin</button>
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
                  Määrä:
                  <input
                    type="number"
                    value={amountSiniKuusi}
                    onChange={handleAmountChangeSiniKuusi}
                    min="1"
                  />
                </label>
                <button>Lisää ostoskoriin</button>
              </div>
            )}
          </div>
        )}
      </div>

            {/* Mänty */}
            <div className={`TreeDiv ${expandedManty ? 'expanded' : ''}`}>
        {Manty && (
          <div>
            <h3 onClick={toggleExpandManty}>{Manty.name}</h3>
            {expandedManty && (
              <div>
                <img src={Manty.image_url} alt={Manty.name} />
                <p>{Manty.description}</p>
                {KuusetData.slice(12, 16).map((product, index) => (
                  <div key={index}>
                    <label>
                      <input
                        type="radio"
                        value={product.name2}
                        checked={selectedOptionManty === product.name2}
                        onChange={() => handleOptionChangeManty(product.name2)}
                      />
                      {product.name2}
                    </label>
                    <p>{product.price}€</p>
                  </div>
                ))}
                <label>
                  Määrä:
                  <input
                    type="number"
                    value={amountManty}
                    onChange={handleAmountChangeManty}
                    min="1"
                  />
                </label>
                <button>Lisää ostoskoriin</button>
              </div>
            )}
          </div>
        )}
      </div>

            {/* Timanttituija */}
            <div className={`TreeDiv ${expandedTimantti ? 'expanded' : ''}`}>
        {Timantti && (
          <div>
            <h3 onClick={toggleExpandTimantti}>{Timantti.name}</h3>
            {expandedTimantti && (
              <div>
                <img src={Timantti.image_url} alt={Timantti.name} />
                <p>{Timantti.description}</p>
                {KuusetData.slice(16, 20).map((product, index) => (
                  <div key={index}>
                    <label>
                      <input
                        type="radio"
                        value={product.name2}
                        checked={selectedOptionTimantti === product.name2}
                        onChange={() => handleOptionChangeTimantti(product.name2)}
                      />
                      {product.name2}
                    </label>
                    <p>{product.price}€</p>
                  </div>
                ))}
                <label>
                  Määrä:
                  <input
                    type="number"
                    value={amountTimantti}
                    onChange={handleAmountChangeTimantti}
                    min="1"
                  />
                </label>
                <button>Lisää ostoskoriin</button>
              </div>
            )}
          </div>
        )}
      </div>

            {/* Serbiankuusi */}
            <div className={`TreeDiv ${expandedSerbian ? 'expanded' : ''}`}>
        {Serbian && (
          <div>
            <h3 onClick={toggleExpandSerbian}>{Serbian.name}</h3>
            {expandedSerbian && (
              <div>
                <img src={Serbian.image_url} alt={Serbian.name} />
                <p>{Serbian.description}</p>
                {KuusetData.slice(8, 12).map((product, index) => (
                  <div key={index}>
                    <label>
                      <input
                        type="radio"
                        value={product.name2}
                        checked={selectedOptionSerbian === product.name2}
                        onChange={() => handleOptionChangeSerbian(product.name2)}
                      />
                      {product.name2}
                    </label>
                    <p>{product.price}€</p>
                  </div>
                ))}
                <label>
                  Määrä:
                  <input
                    type="number"
                    value={amountSerbian}
                    onChange={handleAmountChangeSerbian}
                    min="1"
                  />
                </label>
                <button>Lisää ostoskoriin</button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Kuuset;









