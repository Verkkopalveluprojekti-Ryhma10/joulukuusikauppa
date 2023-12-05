import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Latvatahdet = () => {
    const [LatvatahdetData, setLatvatahdetData] = useState([]);
    const [amountLatvatahdet, setAmountLatvatahdet] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/products?category=3');
                setLatvatahdetData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleAmountChangeLatvatahdet = (e) => {
        setAmountLatvatahdet(parseInt(e.target.value, 10) || 1);
    };

    return (
        <div className='LatvatahdetContainer'>
            {LatvatahdetData.map((product) => (
                <div key={product.id} className='LatvatahdetDiv'>
                    <p>{product.image_url}</p>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>{product.price} €</p>

                    <label>
                        Määrä:
                        <input
                            type="number"
                            value={amountLatvatahdet}
                            onChange={handleAmountChangeLatvatahdet}
                            min="1"
                        />
                    </label>
                    <button>Lisää ostoskoriin</button>
                </div>
            ))
            }
        </div>
    );
};

export default Latvatahdet;