import '../styles/global.css'
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Main() {
  const [CategoryData, setCategoryData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3001/categories');
            setCategoryData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();
}, []);

  return (
    <main className="main">
        <div class="categoryContainer">
        {CategoryData.map((category, i) => {
          return (
            <div key={i} className='productObject'>
              <Link to={`/Tuotteet/${category.name}`}>
                <button className='categoryBtn'>
                  <img src={require('../assets'+category.image_url)} alt={category.name} className='categoryPic' />
                <p>{category.name}</p>
                </button>
                
              </Link>
            </div>
              
          )})
        }
        </div>
      

      <aside className="aside">
        <p>Tervetuloa Suomen ympäristöystävällisimpään kuusikauppaan!<br />
          <br />
          Jokainen kuusi on huolella kasvatettu ja ammattitaidolla kaadettu. Teemme yhteistyötä Suomen parhaiden kuusiviljelijöiden kanssa varmistaaksemme laadukkaimmat ja kauneimmat joulukuuset asiakkaillemme.<br/>
          <br/>
          Kuusiemme laatu on taattu, ja ne toimitetaan sinulle valitsemanasi viikkona aina jouluun asti. Haluamme varmistaa, että jokainen asiakkaamme saa juuri sellaisen täydellisen joulukuusen, joka tuo iloa ja lämpöä juhlaasi.<br/>
          <br/>
          Uutuutena valikoimassamme tänä vuonna ovat myös ainutlaatuiset, käsintehdyt joulukoristeet kuuseesi tai esimerkiksi pukinkonttiin! Näitä rakkaudella valmistettuja koristeita on saatavilla rajoitetusti, joten varmista omasi ja tee joulustasi entistäkin tunnelmallisempi näiden kauniiden yksityiskohtien avulla. Valitse laatu, valitse kauneus - valitse joulukuusi meiltä!<br/>
          <br />
          <br />
          Olethan nopea sillä toimitusaikoja on rajoitettu määrä!
        </p>

      </aside>
    </main>
  );
}

export default Main;