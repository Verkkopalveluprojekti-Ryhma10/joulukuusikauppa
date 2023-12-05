USE joulukuusikauppa;

<<<<<<< HEAD

-- Lisätään Tuotekategoriat
INSERT INTO product_categories (`name`, `description`, `image_url`) VALUES ('Kuuset', 'Joulun kuningas, kodin vihdeä juhlavieras. Hanki kuusi meiltä, se on vastuullisesti itse tuotetuista siemenistä kasvatettu, luonnon metsiä säästäen. Valitse oma suosikkisi ja luo täydellinen joulutunnelma valitsemallasi kuusella!', '/images/kuusikuva.jpg');
INSERT INTO product_categories (`name`, `description`, `image_url`) VALUES ('Koristeet', 'Täältä löydät monenmoista koristepakettia valitsemasi kuusen koristeluun', '/images/koristekuva.jpg');
INSERT INTO product_categories (`name`, `description`, `image_url`) VALUES ('Latvatähdet', 'Latvatähti, tämä joulukuusen kruunu! Viimeistele kuusen koristelu tarpeeksi hienolla tähdellä, meiltä löytyy
seuraavanlaisia tähtiä.', '/images/latvakuva.jpg');
INSERT INTO product_categories (`name`, `description`, `image_url`) VALUES ('Muut', 'Valitse laajasta valikoimastamma täydellisiä joulun ajan tarvikkeita kotiisi. Joulunajan ilo ja käytännöllisyys yhdistyvät näissä tuotteissa - Hanki omasi ja loihdi kotiisi joulun taikaa!', '/images/muutkuva.jpg');


-- Lisätään Kuusien pituudet
INSERT INTO products (`name`, `name2`, `description`, `category`, `price`, `storage`, `image_url`) VALUES ('Metsäkuusi', 'Pituus 80-120', 'Perinteinen suomalainen metsäkuusi, melkein niinkuin naapurin metsästä varastettu. Hommaa heti!', '1', '80', 100, '/images/metsakuusi');
INSERT INTO products (`name`, `name2`, `category`, `price`, `storage`) VALUES ('Metsäkuusi', 'Pituus 121-160', '1', '120', 150);
INSERT INTO products (`name`, `name2`, `category`, `price`, `storage`) VALUES ('Metsäkuusi', 'Pituus 161-200', '1', '160', 50);
INSERT INTO products (`name`, `name2`, `category`, `price`, `storage`) VALUES ('Metsäkuusi', 'Pituus 201-240', '1', '200', 50);
INSERT INTO products (`name`, `name2`, `description`, `category`, `price`, `storage`, `image_url`) VALUES ('Mustakuusi', 'Pituus 80-120', 'Joulukuusi mallia amerikasta ja kanadasta. Soveltuu myös skandinaaviseen kotiin.', '1', '80', 100, '/images/mustakuusi.jpg');
INSERT INTO products (`name`, `name2`, `category`, `price`, `storage`) VALUES ('Mustakuusi', 'Pituus 121-160', '1', '120', 150);
INSERT INTO products (`name`, `name2`, `category`, `price`, `storage`) VALUES ('Mustakuusi', 'Pituus 161-200', '1', '160', 50);
INSERT INTO products (`name`, `name2`, `category`, `price`, `storage`) VALUES ('Mustakuusi', 'Pituus 201-240', '1', '200', 50);
INSERT INTO products (`name`, `name2`, `description`, `category`, `price`, `storage`, `image_url`) VALUES ('Sinikuusi', 'Pituus 80-120', 'Kauniin sinertävä kuusi perinteisen vihreän sijaan.', '1', '80', 100, '/images/sinikuusi.jpg');
INSERT INTO products (`name`, `name2`, `category`, `price`, `storage`) VALUES ('Sinikuusi', 'Pituus 121-160', '1', '120', 150);
INSERT INTO products (`name`, `name2`, `category`, `price`, `storage`) VALUES ('Sinikuusi', 'Pituus 161-200', '1', '160', 50);
INSERT INTO products (`name`, `name2`, `category`, `price`, `storage`) VALUES ('Sinikuusi', 'Pituus 201-240', '1', '200', 50);
INSERT INTO products (`name`, `name2`, `description`, `category`, `price`, `storage`, `image_url`) VALUES ('Mänty', 'Pituus 80-120', 'Voiko mänty olla joulukuusi? Osta ja kokeile! Tämä on sisäsiistimpi kuin kuusi ja lapissa mänty on kuusta suositumpi vaihtoehto "joulukuuseksi".', '1', '80', 100, '/images/manty.jpg');
INSERT INTO products (`name`, `name2`, `category`, `price`, `storage`) VALUES ('Mänty', 'Pituus 121-160', '1', '120', 150);
INSERT INTO products (`name`, `name2`, `category`, `price`, `storage`) VALUES ('Mänty', 'Pituus 161-200', '1', '160', 50);
INSERT INTO products (`name`, `name2`, `category`, `price`, `storage`) VALUES ('Mänty', 'Pituus 201-240', '1', '200', 50);
INSERT INTO products (`name`, `name2`, `description`, `category`, `price`, `storage`, `image_url`) VALUES ('Timanttituija', 'Pituus 80-120', 'Tämä kartion mallinen, erittäin tuuhea lajike, sopii erittäin hyvin myös joulukuuseksi.', '1', '80', 100, '../assets/images/tuija.jpg');
INSERT INTO products (`name`, `name2`, `category`, `price`, `storage`) VALUES ('Timanttituija', 'Pituus 121-160', '1', '120', 150);
INSERT INTO products (`name`, `name2`, `category`, `price`, `storage`) VALUES ('Timanttituija', 'Pituus 161-200', '1', '160', 50);
INSERT INTO products (`name`, `name2`, `category`, `price`, `storage`) VALUES ('Timanttituija', 'Pituus 201-240', '1', '200', 50);
INSERT INTO products (`name`, `name2`, `description`, `category`, `price`, `storage`, `image_url`) VALUES ('Serbiankuusi', 'Pituus 80-120', 'Tämä kuusi on erittäin uhanalainen luonnossa, mutta me tuotamme kuusen siemenet paikallisella tuotannolla, joten elvytämme kantaa ja tarjoamme teille kauniin kuusen sekä puhtaan omantunnon!.', '1', '80', 100, '/images/serbiankuusi.jpg');
INSERT INTO products (`name`, `name2`, `category`, `price`, `storage`) VALUES ('Serbiankuusi', 'Pituus 121-160', '1', '120', 150);
INSERT INTO products (`name`, `name2`, `category`, `price`, `storage`) VALUES ('Serbiankuusi', 'Pituus 161-200', '1', '160', 50);
INSERT INTO products (`name`, `name2`, `category`, `price`, `storage`) VALUES ('Serbiankuusi', 'Pituus 201-240', '1', '200', 50);

=======
-- Lisätään Tuotekategoriat
INSERT INTO product_categories (`name`, `description`, `image_url`) VALUES ('Kuuset', 'Joulun kuningas, kodin vihdeä juhlavieras. Hanki kuusi meiltä, se on vastuullisesti itse tuotetuista siemenistä kasvatettu, luonnon metsiä säästäen. Valitse oma suosikkisi ja luo täydellinen joulutunnelma valitsemallasi kuusella!', '/public/images/kuusikuva.jpg');
INSERT INTO product_categories (`name`, `description`, `image_url`) VALUES ('Koristeet', 'Täältä löydät monenmoista koristepakettia valitsemasi kuusen koristeluun', '/public/images/koristekuva.jpg');
INSERT INTO product_categories (`name`, `description`, `image_url`) VALUES ('Latvatähdet', 'Latvatähti, tämä joulukuusen kruunu! Viimeistele kuusen koristelu tarpeeksi hienolla tähdellä, meiltä löytyy
seuraavanlaisia tähtiä.', '/public/images/latvakuva.jpg');
INSERT INTO product_categories (`name`, `description`, `image_url`) VALUES ('Muut', 'Valitse laajasta valikoimastamma täydellisiä joulun ajan tarvikkeita kotiisi. Joulunajan ilo ja käytännöllisyys yhdistyvät näissä tuotteissa - Hanki omasi ja loihdi kotiisi joulun taikaa!', '/public/images/muutkuva.jpg');


-- Lisätään Alikategorioita
INSERT INTO product_categories(`name`, `description`, `subcategory`, `image_url`) VALUES ('Metsäkuusi', 'Perinteinen suomalainen metsäkuusi, melkein niinkuin naapurin metsästä varastettu. Hommaa heti!',1, '/public/images/metsakuusi.jpg');
INSERT INTO product_categories(`name`, `description`, `subcategory`, `image_url`) VALUES ('Mustakuusi', 'Joulukuusi mallia amerikasta ja kanadasta. Soveltuu myös skandinaaviseen kotiin.',1, '/public/images/mustakuusi.jpg');
INSERT INTO product_categories(`name`, `description`, `subcategory`, `image_url`) VALUES ('Sinikuusi', 'Kauniin sinertävä kuusi perinteisen vihreän sijaan.',1, '/public/images/sinikuusi.jpg');
INSERT INTO product_categories(`name`, `description`, `subcategory`, `image_url`) VALUES ('Mänty', 'Voiko mänty olla joulukuusi? Osta ja kokeile! Tämä on sisäsiistimpi kuin kuusi ja lapissa mänty on kuusta suositumpi vaihtoehto "joulukuuseksi".',1, '/public/images/mantykuusi.jpg');
INSERT INTO product_categories(`name`, `description`, `subcategory`, `image_url`) VALUES ('Timanttituija', 'Tämä kartion mallinen, erittäin tuuhea lajike, sopii erittäin hyvin myös joulukuuseksi.',1, '/public/images/tuija.jpg');
INSERT INTO product_categories(`name`, `description`, `subcategory`, `image_url`) VALUES ('Serbiankuusi', 'Tämä kuusi on erittäin uhanalainen luonnossa, mutta me tuotamme kuusen siemenet paikallisella tuotannolla, joten elvytämme kantaa ja tarjoamme teille kauniin kuusen sekä puhtaan omantunnon!.',1, NULL);


-- Lisätään Kuusien pituudet
INSERT INTO products (`name`, `description`, `category`, `price`, `storage`) VALUES ('Pituus 80-120', 'Pituus 80-120', '1', '80', 100);
INSERT INTO products (`name`, `description`, `category`, `price`, `storage`) VALUES ('Pituus 121-160', 'Pituus 121-160', '1', '120', 150);
INSERT INTO products (`name`, `description`, `category`, `price`, `storage`) VALUES ('Pituus 161-200', 'Pituus 161-200', '1', '160', 50);
INSERT INTO products (`name`, `description`, `category`, `price`, `storage`) VALUES ('Pituus 201-240', 'Pituus 201-240', '1', '200', 50);
>>>>>>> 45af32b (Muokkauksia)


-- Lisätään Koristeet
INSERT INTO products (`name`, `description`, `category`, `price`, `storage`) VALUES ('Koristepaketti, punainen, 12kpl', 'Täältä löydät etsimäsi! Eli monenmoisia palloja jokaiseen makuun. Näillä saat kuuseen mahtavaa väriloistetta ja jouluisen ilmeen.', '2', '7', 1500);
INSERT INTO products (`name`, `description`, `category`, `price`, `storage`) VALUES ('Koristepaketti, roosa, 12kpl', 'Täältä löydät etsimäsi! Eli monenmoisia palloja jokaiseen makuun. Näillä saat kuuseen mahtavaa väriloistetta ja jouluisen ilmeen.', '2', '7', 1500);
INSERT INTO products (`name`, `description`, `category`, `price`, `storage`) VALUES ('Koristepaketti, hopea, 12kpl', 'Täältä löydät etsimäsi! Eli monenmoisia palloja jokaiseen makuun. Näillä saat kuuseen mahtavaa väriloistetta ja jouluisen ilmeen.', '2', '7', 1500);
INSERT INTO products (`name`, `description`, `category`, `price`, `storage`) VALUES ('Koristepaketti, kulta, 12kpl', 'Täältä löydät etsimäsi! Eli monenmoisia palloja jokaiseen makuun. Näillä saat kuuseen mahtavaa väriloistetta ja jouluisen ilmeen.', '2', '7', 1500);
INSERT INTO products (`name`, `description`, `category`, `price`, `storage`) VALUES ('Koristepaketti, värisekoitus, 12kpl', 'Täältä löydät etsimäsi! Eli monenmoisia palloja jokaiseen makuun. Näillä saat kuuseen mahtavaa väriloistetta ja jouluisen ilmeen.', '2', '7', 1500);
INSERT INTO products (`name`, `description`, `category`, `price`, `storage`) VALUES ('Koristepaketti, valkea, 12kpl', 'Täältä löydät etsimäsi! Eli monenmoisia palloja jokaiseen makuun. Näillä saat kuuseen mahtavaa väriloistetta ja jouluisen ilmeen.', '2', '7', 1500);
INSERT INTO products (`name`, `description`, `category`, `price`, `storage`) VALUES ('Kulkuset, 10kpl', 'Kulkusten kilinähän kuuluu erottamattomasti joulunaikaan, muokkaile tämän paketin kulkusista mukavia koristeita tonttulakkeihin tai kuusen ympärille', '2', '11', 1500);
INSERT INTO products (`name`, `description`, `category`, `price`, `storage`) VALUES ('Koristepaketti, olki, 10kpl', 'Paikallisten eläkeläisten taidon näytteet! Hartaudella ja ammattitaidolla valmistuneet kauniit koristeet juuri sinulle!', '2', '20', 1500);
INSERT INTO products (`name`, `description`, `category`, `price`, `storage`) VALUES ('Koristepaketti, pehmeä, 10kpl', 'Marttojen rakkaudella tehdyt pehmeät koristeet. Näistä voit tuntea joulun lämmön!', '2', '20', 1500);
INSERT INTO products (`name`, `description`, `category`, `price`, `storage`) VALUES ('Koristepaketti, tähdet, 10kpl', 'Ekologisesti valmistetut puuartesaanien käsityönä tekemät tähdet koristamaan sinun joulukuustasi. Kaikki nämä tähdet on tehty luonnon kaatamista puista, jolloin turhaa hävikkiä ei synny.', '2', '20', 1500);


-- Lisätään Latvatähdet
INSERT INTO products (`name`, `description`, `category`, `price`, `storage`) VALUES ('Latvatähti, hopea', 'Kaunis ja ajaton hopeinen koriste', '3', '10', 1500);
INSERT INTO products (`name`, `description`, `category`, `price`, `storage`) VALUES ('Latvatähti, kulta', 'Lämpimän kultainen latvatähti', '3', '10', 1500);
INSERT INTO products (`name`, `description`, `category`, `price`, `storage`) VALUES ('Latvatähti, valkoinen', 'Hillitympi valkoinen tähti', '3', '15', 1500);
INSERT INTO products (`name`, `description`, `category`, `price`, `storage`) VALUES ('Latvatähti, ruskea', 'Hillitympi ruskea tähtä', '3', '9', 1500);
INSERT INTO products (`name`, `description`, `category`, `price`, `storage`) VALUES ('Latvatähti, olki', 'Erittäin perinteikäs valinta, sopii kuuseen kuin kuuseen', '3', '25', 1500);


-- Lisätään Muuta
INSERT INTO products (`name`, `description`, `category`, `price`, `storage`) VALUES ('Lahjasäkki', 'Reilumman kokoinen Joulupukin säkki johon mahtuu kilttien ja lapsien ja miksei myös aikuisten lahjat odottamaan h-hetkeä', '4', '30.50', 100);
INSERT INTO products (`name`, `description`, `category`, `price`, `storage`) VALUES ('Tontut', 'Joulupukin luotettavat tontut vahtivat aina, etenkin joulun alla. Osta teidän talouteen tämä pari!', '4', '10', 50);
INSERT INTO products (`name`, `description`, `category`, `price`, `storage`) VALUES ('Havukranssi', 'Näytä myös naapurille, että teillä juhlitaan joulua ja koristele se vaikka ledivaloilla, hommaa heti!', '4', '30', 50);
INSERT INTO products (`name`, `description`, `category`, `price`, `storage`) VALUES ('Kuusenjalka', 'Perinteikäs valurautainen tukeva jalka, joka takaa kuusen pysyvän tolpillaan.', '4', '30', 50);
INSERT INTO products (`name`, `description`, `category`, `price`, `storage`) VALUES ('Kuusenalusmatto', 'Perinteikkäästä juutista tehty kaunis matto. Kaikki meistä vanhenevat, myös kuusi ja irtohavuilta ei voi välttyä. Vähennä sotkua pienellä vaivalla ja lisää tämä ostoskoriin!', '4', '10', 50);

-- Lisätään Admin    salasana: admin
<<<<<<< HEAD
INSERT INTO users(`lname`, `fname`, `phone`, `email`, `address`, `post`, `city`, `uname`, `passwd`, `role`) VALUES ('Testaava', 'Keijo', '---', '---', '---', '---', '---', 'admin', '$2a$10$lDKDfLNQA4V5.NaR/bu/4OKnf6f26i8tfcO2l0jvX1wc0mez6gFcK', 'admin');
=======
INSERT INTO users(`lname`, `fname`, `uname`, `passwd`, `role`) VALUES ('Testaava', 'Keijo', 'admin', '$2a$10$lDKDfLNQA4V5.NaR/bu/4OKnf6f26i8tfcO2l0jvX1wc0mez6gFcK', 'admin');
>>>>>>> 45af32b (Muokkauksia)
