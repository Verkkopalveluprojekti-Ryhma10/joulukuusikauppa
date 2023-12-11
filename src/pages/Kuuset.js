import { useState, useEffect } from "react";
import axios from "axios";
import DecorationType from "../components/content/DecorationType";

const Kuuset = () => {
  const [KuusetData, setKuusetData] = useState([]);
  const [selectedOptionKuuset, setSelectedOptionKuuset] = useState({
    size: null,
    price: 0
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

  const renderPriceOptions = (options) => {

    return (
      <div>
        {options.map((option, index) => (
          <label key={index}>
            <input
              type="radio"
              name="kuusetOptions"
              value={index}
              checked={selectedOptionKuuset.price === option.price}
              onChange={() =>
                setSelectedOptionKuuset({
                  size: option.size,
                  price: parseFloat(option.price),
                })
              }
            />
            {option.price}€ - {option.name2}cm
          </label>
        ))}
      </div>
    );
  };

  const renderDecorationType = (product, options) => {
    return (
      <DecorationType
        id={product?.id}
        type={product?.id}
        label={product?.name}
        image={product?.image_url}
        description={product?.description}
        price={renderPriceOptions(options)}
      />
    );
  };

  return (
    <div className="TreeContainer">
      {renderDecorationType(KuusetData[0], KuusetData.slice(0, 4))}
      {renderDecorationType(KuusetData[4], KuusetData.slice(4, 8))}
      {renderDecorationType(KuusetData[8], KuusetData.slice(8, 12))}
      {renderDecorationType(KuusetData[12], KuusetData.slice(12, 16))}
      {renderDecorationType(KuusetData[16], KuusetData.slice(16, 20))}
      {renderDecorationType(KuusetData[20], KuusetData.slice(20, 24))}
    </div>
  );
};

export default Kuuset;


