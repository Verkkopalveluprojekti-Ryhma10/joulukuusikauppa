// Kova koodit testailuun tuotteille yms 
import React from 'react';
import DecorationType from '../components/content/DecorationType'; // Oletetaan, että tämä on erillinen komponentti
import '../styles/global.css';

const Koristeet = () => {
  return (

    <div className="koristeet-container">
      <DecorationType
        type="KoristePunainen"
        //image={KoristePunainen}
        label="Koristepaketti, punainen, 12kpl"
        description="Täältä löydät etsimäsi! Eli monenmoisia palloja jokaiseen makuun. Näillä saat kuuseen mahtavaa väriloistetta ja jouluisen ilmeen."
        price={7}
      />

      <DecorationType
        type="KoristeRoosa"
        //image={KoristeRoosa}
        label="Koristepaketti, roosa, 12kpl"
        description="Täältä löydät etsimäsi! Eli monenmoisia palloja jokaiseen makuun. Näillä saat kuuseen mahtavaa väriloistetta ja jouluisen ilmeen."
        price={7}
      />

      <DecorationType
        type="KoristeHopea"
        //image={KoristeHopea}
        label="Koristepaketti, hopea, 12kpl"
        description="Täältä löydät etsimäsi! Eli monenmoisia palloja jokaiseen makuun. Näillä saat kuuseen mahtavaa väriloistetta ja jouluisen ilmeen."
        price={7}
      />

      <DecorationType
        type="KoristeKulta"
        //image={KoristeKulta}
        label="Koristepaketti, kulta, 12kpl"
        description="Täältä löydät etsimäsi! Eli monenmoisia palloja jokaiseen makuun. Näillä saat kuuseen mahtavaa väriloistetta ja jouluisen ilmeen."
        price={7}
      />

      <DecorationType
        type="KoristeSekoitus"
        //image={KoristeSekoitus}
        label="Koristepaketti, sekoitus, 12kpl"
        description="Täältä löydät etsimäsi! Eli monenmoisia palloja jokaiseen makuun. Näillä saat kuuseen mahtavaa väriloistetta ja jouluisen ilmeen."
        price={7}
      />

      <DecorationType
        type="KoristeValkea"
        //image={KoristeValkea}
        label="Koristepaketti, valkea, 12kpl"
        description="Täältä löydät etsimäsi! Eli monenmoisia palloja jokaiseen makuun. Näillä saat kuuseen mahtavaa väriloistetta ja jouluisen ilmeen."
        price={7}
      />
      <DecorationType
        type="Kulkuset"
        //image={Kulkuset}
        label="Kulkuset, 10kpl"
        description="Kulkusten kilinähän kuuluu erottamattomasti joulunaikaan, muokkaile tämän paketin kulkusista mukavia koristeita tonttulakkeihin tai kuusen ympärille"
        price={11}
      />

      <DecorationType
        type="Olki"
        //image={Olki}
        label="Koristepaketti, olki, 10kpl"
        description="Paikallisten eläkeläisten taidon näytteet! Hartaudella ja ammattitaidolla valmistuneet kauniit koristeet juuri sinulle!"
        price={20}
      />

      <DecorationType
        type="Pehmeä"
        //image={Pehmeä}
        label="Koristepaketti, pehmeä, 10kpl"
        description="Marttojen rakkaudella tehdyt pehmeät koristeet. Näistä voit tuntea joulun lämmön!"
        price={20}
      />

      <DecorationType
        type="Tähdet"
        //image={Tähdet}
        label="Koristepaketti, tähdet, 10kpl"
        description="Ekologisesti valmistetut puuartesaanien käsityönä tekemät tähdet koristamaan sinun joulukuustasi. Kaikki nämä tähdet on tehty luonnon kaatamista puista, jolloin turhaa hävikkiä ei synny."
        price={20}
      />
    </div>
  );
};

export default Koristeet;


/* Tätä en vielä saanut pelittään, antaa erroria, ei vissiin mee SQL kyselyt jossain oikein aivot loppu mitetin myöhemmin lisää

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

