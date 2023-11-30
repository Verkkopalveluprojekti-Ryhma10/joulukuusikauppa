import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { productData } from '../components/signals/ProductDataSignal';
//import needed signal

const Latvatahdet = () => {

    //choose which category you need
    const [subCategory, setSubCategory] = useState(3)
    const [errormessage, setErrormessage] = useState('')

    //add subcategory using params to get endpoint
    //productData gets value from database
    useEffect(() => {
        axios.get('http://localhost:3001/products', {params: {category: subCategory}})
        .then(res => productData.value = res.data)
        .catch(error => setErrormessage('tapahtui virhe: ' + error.message))      
    }, [])
    
    //mapped data presented

    // img tageissa katsotaan onko image_url määritetty vai onko null, jos määritetty niin käytetään sitä kuvaa ja muutoin täytekuvaa.
    return (
        <div>
            <h1>Tämä on Latvatähdet-sivu</h1>
            {productData.value.map((item, index) =>
            <div key={index}>
                <li>
                    
                    tuote: {item.name} , hinta: {item.price} , kuva: {item.image_url ? <img src={require('../assets' + item.image_url)} /> : <img src={require('../assets/images/main.jpg')} />}
                </li>
            </div>
            )}
        </div>
    );
};

export default Latvatahdet;