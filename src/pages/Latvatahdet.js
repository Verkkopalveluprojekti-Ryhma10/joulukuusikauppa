import { effect, signal } from '@preact/signals-react';
import axios from 'axios';
import React from 'react';

const latvaTahdetData = signal([])

effect(()=>{

    axios.get('http://localhost:3001/products', )

    .then(res => latvaTahdetData.value = res.data)
    .catch(error => console.log(error.message))
 }, [])

const Latvatahdet = () => {

    //subcategory
    console.log(latvaTahdetData.value);



    return (
        <div>
            <h1>Tämä on Latvatähdet-sivu</h1>
            {latvaTahdetData.value.map((item, index) =>
            <div key={index}>
                <li>
                    {item.name}
                </li>

            </div>
            )}
        </div>
    );

};

export default Latvatahdet;