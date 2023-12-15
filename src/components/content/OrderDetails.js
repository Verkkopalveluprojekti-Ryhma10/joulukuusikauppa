import React from 'react';
import { token, userInfo } from "../signals/LoginSignal"
import '../../styles/Forms.css'
import { Link } from 'react-router-dom';

export default function OrderDetails() {

    return(
        <>
        <div className='forms-container'>
            <h2>Tilaajan yhteystiedot</h2>
            {!token.value ?
            <div>
                <p>Tilaaminen vaatii rekisteröitymisen. Jos olet jo kanta-asiakas, kirjaudu tunnuksillasi, kiitos.</p>
                <button class= "button"><Link to={'/kirjaudu'}>Kirjaudu </Link></button>
                <button class= "button"><Link to={'/rekisteroidy'}>Rekisteröidy</Link></button>
            </div> :
            <div>
                <p>Etunimi: {userInfo.value.fname}</p>
                <p>Sukunimi: {userInfo.value.lname}</p>
                <p>Postitusosoite: {userInfo.value.address} {userInfo.value.post} </p>
                <p>Tilaustiedot...</p>
            </div>}
        </div>
        </>
    )
}