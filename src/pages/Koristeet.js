// Kova koodit testailuun tuotteille yms 
import React, { useEffect, useState} from 'react';
import axios from 'axios';
import DecorationType from '../components/content/DecorationType'; // Oletetaan, että tämä on erillinen komponentti

const Koristeet = () => {

  const [KoristeetData, setKoristeetData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/products?category=2');
                setKoristeetData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


  return (

    <div className="koristeet-container">
      {KoristeetData.map((product, i) => {
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

export default Koristeet;


/* Tätä en vielä saanut pelittään, antaa erroria, ei vissiin mee SQL kyselyt jossain oikein aivot loppu mitetin myöhemmin lisää
Failed to load resource: the server responded with a status of 500 (Internal Server Error)
Koristeet.js:18 Virhe tuotteiden haussa: Error: Verkkopyynnössä tapahtui virhe
    at fetchProducts (Koristeet.js:13:1)
fetchProducts @ Koristeet.js:18

import React, { useState, useEffect } from 'react';
import DecorationType from '../components/content/DecorationType';
import '../styles/global.css';

const Koristeet = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3001/products');
        if (!response.ok) {
          throw new Error('Verkkopyynnössä tapahtui virhe');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Virhe tuotteiden haussa:', error);
      }
    };
  
    fetchProducts();
  }, [])};

export default Koristeet;
*/

