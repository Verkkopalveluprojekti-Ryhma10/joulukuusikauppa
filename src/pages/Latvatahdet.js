import React, { useEffect, useState} from 'react';
import axios from 'axios';
import DecorationType from '../components/content/DecorationType';

const Latvatahdet = () => {
    const [LatvatahdetData, setLatvatahdetData] = useState([]);

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


    return (
        <div className='LatvatahdetContainer'>
            {LatvatahdetData.map((product, i) => {
                return (
                    <div key={i}> 
                        <DecorationType
                            type={product.id}
                            image={product.image_url}
                            label={product.name}
                            description={product.description}
                            price={product.price}
                        />
                    </div>
                )})
            }
        </div>
    );
};

export default Latvatahdet;