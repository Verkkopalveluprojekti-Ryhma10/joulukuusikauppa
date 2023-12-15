import React, { useEffect, useState} from 'react';
import DecorationType from '../components/content/DecorationType';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Tuotteet = () => {
    const [TuotteetData, setTuotteetData] = useState([]);
    const {category} = useParams();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/products?name='+category);
                setTuotteetData(response.data);             
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className='productContainer'>
            {TuotteetData.map((product, i) => {
                return (
                    <div key={i}> 
                        <DecorationType
                            type={product.id}
                            image={product.image_url}
                            label={product.name}
                            label2={product.name2}
                            description={product.description}
                            price={product.price}
                        />
                    </div>
                )})
            }
        </div>
    );
};

export default Tuotteet;