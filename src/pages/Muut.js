import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Muut = () => {
    const [MuutData, setMuutData] = useState([]);
    const [amountMuut, setAmountMuut] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/products?category=4');
                setMuutData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleAmountChangeMuut = (e) => {
        setAmountMuut(parseInt(e.target.value, 10) || 1);
    };

    return (
        <div className='MuutContainer'>
            {MuutData.map((product) => (
                <div key={product.id} className='MuutDiv'>
                    <p>{product.image_url}</p>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>{product.price} €</p>

                    <label>
                        Määrä:
                        <input
                            type="number"
                            value={amountMuut}
                            onChange={handleAmountChangeMuut}
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

export default Muut;



