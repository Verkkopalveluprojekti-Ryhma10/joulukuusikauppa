import '../styles/global.css'
import React from 'react';
import kuusiKuva from '../assets/images/kuusikuva.jpg';
import koristeKuva from '../assets/images/koristekuva.jpg';
import latvaKuva from '../assets/images/latvakuva.jpg';
import muutaKuva from '../assets/images/muutakuva.jpg';
import { faRodAsclepius } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



function Main() {

  return (
    <main className="main">
      <div className="navbar">
      </div>
      <div className='productObject'>
        
      <Link to="/Kuuset">
      <button className='pineBtn'>
        <img src={kuusiKuva} alt="kuusi" className='pinePic' /><br />
        Kuuset
      </button></Link>

      <Link to="/Koristeet">
      <button className='decorBtn'>
        <img src={koristeKuva} alt="koriste" className='decorPic' /><br />
        Koristeet
      </button></Link>

      <Link to="/Latvatahdet">
      <button className='decorBtn'>
        <img src={latvaKuva} alt="latva" className='decorPic' /><br />
        Latvatähdet
      </button></Link>

      <Link to="/Muuta">
      <button className='decorBtn'>
        <img src={muutaKuva} alt="koriste" className='decorPic' /><br />
        Muuta
      </button></Link>
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