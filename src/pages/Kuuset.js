import { useState, useEffect } from "react";
import axios from "axios";
import DecorationType from "../components/content/DecorationType";

const Kuuset = () => {
  const [KuusetData, setKuusetData] = useState([]);
  const [selectedOptionKuuset, setSelectedOptionKuuset] = useState({
    size: null,
    price: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/products?category=1');
        setKuusetData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  //Metsäkuusi
  const product = KuusetData[0];
  const options = KuusetData.slice(0, 4);
  //Mustakuusi
  const product2 = KuusetData[4];
  const options2 = KuusetData.slice(4, 8);
  //Sinikuusi
  const product3 = KuusetData[8];
  const options3 = KuusetData.slice(8, 12);
  //Mänty
  const product4 = KuusetData[12];
  const options4 = KuusetData.slice(12, 16);
  //Timanttituija
  const product5 = KuusetData[16];
  const options5 = KuusetData.slice(16, 20);
  //Serbiankuusi
  const product6 = KuusetData[20];
  const options6 = KuusetData.slice(20, 24);

  return (
    <div className="TreeContainer">
      <DecorationType
        id={product?.id}
        type={product?.id}
        label={product?.name}
        image={product?.image_url}
        description={product?.description}
        price={
          <div>
            {options.map((option, index) => (
              <label key={index}>
                <input
                  type="radio"
                  name="kuusetOptions"
                  value={index}
                  checked={selectedOptionKuuset.size === index}
                  onChange={() =>
                    setSelectedOptionKuuset({
                      size: index,
                      price: option.price,
                    })
                  }
                />
                {`${option.price} € - ${option.name2} cm`}
              </label>
            ))}
          </div>
        }
      />

<DecorationType
        id={product2?.id}
        type={product2?.id}
        label={product2?.name}
        image={product2?.image_url}
        description={product2?.description}
        price={
          <div>
            {options2.map((option, index) => (
              <label key={index}>
                <input
                  type="radio"
                  name="kuusetOptions"
                  value={index}
                  checked={selectedOptionKuuset.size === index}
                  onChange={() =>
                    setSelectedOptionKuuset({
                      size: index,
                      price: option.price,
                    })
                  }
                />
                {`${option.price} € - ${option.name2} cm`}
              </label>
            ))}
          </div>
        }
      />

<DecorationType
        id={product3?.id}
        type={product3?.id}
        label={product3?.name}
        image={product3?.image_url}
        description={product3?.description}
        price={
          <div>
            {options3.map((option, index) => (
              <label key={index}>
                <input
                  type="radio"
                  name="kuusetOptions"
                  value={index}
                  checked={selectedOptionKuuset.size === index}
                  onChange={() =>
                    setSelectedOptionKuuset({
                      size: index,
                      price: option.price,
                    })
                  }
                />
                {`${option.price} € - ${option.name2} cm`}
              </label>
            ))}
          </div>
        }
      />

<DecorationType
        id={product4?.id}
        type={product4?.id}
        label={product4?.name}
        image={product4?.image_url}
        description={product4?.description}
        price={
          <div>
            {options4.map((option, index) => (
              <label key={index}>
                <input
                  type="radio"
                  name="kuusetOptions"
                  value={index}
                  checked={selectedOptionKuuset.size === index}
                  onChange={() =>
                    setSelectedOptionKuuset({
                      size: index,
                      price: option.price,
                    })
                  }
                />
                {`${option.price} € - ${option.name2} cm`}
              </label>
            ))}
          </div>
        }
      />

<DecorationType
        id={product5?.id}
        type={product5?.id}
        label={product5?.name}
        image={product5?.image_url}
        description={product5?.description}
        price={
          <div>
            {options5.map((option, index) => (
              <label key={index}>
                <input
                  type="radio"
                  name="kuusetOptions"
                  value={index}
                  checked={selectedOptionKuuset.size === index}
                  onChange={() =>
                    setSelectedOptionKuuset({
                      size: index,
                      price: option.price,
                    })
                  }
                />
                {option.price}€ - {option.name2}cm
                
                
              </label>
            ))}
          </div>
        }
      />

<DecorationType
        id={product6?.id}
        type={product6?.id}
        label={product6?.name}
        image={product6?.image_url}
        description={product6?.description}
        price={
          <div>
            {options6.map((option, index) => (
              <label key={index}>
                <input
                  type="radio"
                  name="kuusetOptions"
                  value={index}
                  checked={selectedOptionKuuset.size === index}
                  onChange={() =>
                    setSelectedOptionKuuset({
                      size: index,
                      price: option.price,
                    })
                  }
                />
                {`${option.price} - ${option.name2}`}
              </label>
            ))}
          </div>
        }
      />
    </div>
  );
};

export default Kuuset;

