import React, { useState } from "react";
//import KoristePunainen from "../assets/images/koristepunainen.jpg";
//import KoristeRoosa from "../assets/images/koristeroosa.jpg";
//import KoristeHopea from "../assets/images/koristehopea.jpg";
//import KoristeKulta from "../assets/images/koristekulta.jpg";
//import KoristeSekoitus from "../assets/images/koristesekoitus.jpg";
//import KoristeValkea from "../assets/images/koristevalkea.jpg";
//import Kulkuset from "../assets/images/kulkuset.jpg";
//import Olki from "../assets/images/olki.jpg";
//import Pehmeä from "../assets/images/pehmeä.jpg";
//import Tähdet from "../assets/images/tähdet.jpg";

const DecorationType = ({ type, label, description, price, onAddToCart }) => {
  const [amount, setAmount] = useState(1);

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  return (
    <div className="DecorationDiv">
      <h3>{label}</h3>
      <p>{description}</p>
      <label>Hinta: {price}€</label>
      <br />

      <label>
        Määrä:
        <input
          type="number"
          min="1"
          value={amount}
          onChange={handleAmountChange}
        />
      </label>
      <br />

      <button onClick={() => onAddToCart(type, price, amount)}>Add to Cart</button>
    </div>
  );
};

const Koristeet = () => {
  const addToCart = async (productId, price, amount) => {
    try {
      const userId = localStorage.getItem('userId');
      const response = await fetch('http://localhost:3001/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId: productId,
          userId: userId,
          amount: amount,
          price: price
        }),
      });

      if (!response.ok) {
        throw new Error('Virhe lisättäessä tuotetta ostoskoriin');
      }

      const result = await response.json();
      console.log('Tuote lisätty ostoskoriin:', result);
    } catch (error) {
      console.error('Virhe:', error);
    }
  };

  return (
    <div className="koristeet-container">
      <DecorationType
        type="KoristePunainen"
        //image={KoristePunainen}
        label="Koristepaketti, punainen, 12kpl"
        description="Täältä löydät etsimäsi! Eli monenmoisia palloja jokaiseen makuun. Näillä saat kuuseen mahtavaa väriloistetta ja jouluisen ilmeen."
        price={7}
        onAddToCart={addToCart}
      />

      <DecorationType
        type="KoristeRoosa"
        //image={KoristeRoosa}
        label="Koristepaketti, roosa, 12kpl"
        description="Täältä löydät etsimäsi! Eli monenmoisia palloja jokaiseen makuun. Näillä saat kuuseen mahtavaa väriloistetta ja jouluisen ilmeen."
        price={7}
        onAddToCart={addToCart}
      />

      <DecorationType
        type="KoristeHopea"
        //image={KoristeHopea}
        label="Koristepaketti, hopea, 12kpl"
        description="Täältä löydät etsimäsi! Eli monenmoisia palloja jokaiseen makuun. Näillä saat kuuseen mahtavaa väriloistetta ja jouluisen ilmeen."
        price={7}
        onAddToCart={addToCart}
      />

      <DecorationType
        type="KoristeKulta"
        //image={KoristeKulta}
        label="Koristepaketti, kulta, 12kpl"
        description="Täältä löydät etsimäsi! Eli monenmoisia palloja jokaiseen makuun. Näillä saat kuuseen mahtavaa väriloistetta ja jouluisen ilmeen."
        price={7}
        onAddToCart={addToCart}
      />

      <DecorationType
        type="KoristeSekoitus"
        //image={KoristeSekoitus}
        label="Koristepaketti, sekoitus, 12kpl"
        description="Täältä löydät etsimäsi! Eli monenmoisia palloja jokaiseen makuun. Näillä saat kuuseen mahtavaa väriloistetta ja jouluisen ilmeen."
        price={7}
        onAddToCart={addToCart}
      />

      <DecorationType
        type="KoristeValkea"
        //image={KoristeValkea}
        label="Koristepaketti, valkea, 12kpl"
        description="Täältä löydät etsimäsi! Eli monenmoisia palloja jokaiseen makuun. Näillä saat kuuseen mahtavaa väriloistetta ja jouluisen ilmeen."
        price={7}
        onAddToCart={addToCart}
      />
      <DecorationType
        type="Kulkuset"
        //image={Kulkuset}
        label="Kulkuset, 10kpl"
        description="Kulkusten kilinähän kuuluu erottamattomasti joulunaikaan, muokkaile tämän paketin kulkusista mukavia koristeita tonttulakkeihin tai kuusen ympärille"
        price={11}
        onAddToCart={addToCart}
      />

      <DecorationType
        type="Olki"
        //image={Olki}
        label="Koristepaketti, olki, 10kpl"
        description="Paikallisten eläkeläisten taidon näytteet! Hartaudella ja ammattitaidolla valmistuneet kauniit koristeet juuri sinulle!"
        price={20}
        onAddToCart={addToCart}
      />

      <DecorationType
        type="Pehmeä"
        //image={Pehmeä}
        label="Koristepaketti, pehmeä, 10kpl"
        description="Marttojen rakkaudella tehdyt pehmeät koristeet. Näistä voit tuntea joulun lämmön!"
        price={20}
        onAddToCart={addToCart}
      />

      <DecorationType
        type="Tähdet"
        //image={Tähdet}
        label="Koristepaketti, tähdet, 10kpl"
        description="Ekologisesti valmistetut puuartesaanien käsityönä tekemät tähdet koristamaan sinun joulukuustasi. Kaikki nämä tähdet on tehty luonnon kaatamista puista, jolloin turhaa hävikkiä ei synny."
        price={20}
        onAddToCart={addToCart}
      />
    </div>
  );
};

export default Koristeet;
