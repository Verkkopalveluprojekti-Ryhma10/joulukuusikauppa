USE joulukuusikauppa;

-- Lisätään Tuotekategoriat
INSERT INTO product_categories (`name`, `description`, `image_url`) VALUES ('Kuuset', 'Joulun kuningas, kodin vihdeä juhlavieras. Hanki kuusi meiltä, se on vastuullisesti itse tuotetuista siemenistä kasvatettu, luonnon metsiä säästäen. Valitse oma suosikkisi ja luo täydellinen joulutunnelma valitsemallasi kuusella!', '/images/Categories/Trees.jpg');
INSERT INTO product_categories (`name`, `description`, `image_url`) VALUES ('Koristeet', 'Täältä löydät monenmoista koristepakettia valitsemasi kuusen koristeluun', '/images/decorations/Decorations.jpg');
INSERT INTO product_categories (`name`, `description`, `image_url`) VALUES ('Latvatähdet', 'Latvatähti, tämä joulukuusen kruunu! Viimeistele kuusen koristelu tarpeeksi hienolla tähdellä, meiltä löytyy
seuraavanlaisia tähtiä.', '/images/Decorations/Stars.jpg');
INSERT INTO product_categories (`name`, `description`, `image_url`) VALUES ('Muut', 'Valitse laajasta valikoimastamma täydellisiä joulun ajan tarvikkeita kotiisi. Joulunajan ilo ja käytännöllisyys yhdistyvät näissä tuotteissa - Hanki omasi ja loihdi kotiisi joulun taikaa!', '/images/Decorations/Others.jpg');

-- Lisätään Kuusien pituudet

INSERT INTO products (`name`, `name2`, `description`, `category`, `price`, `storage`, `image_url`) VALUES ('Metsäkuusi', 'Pituus 80-120', 'Perinteinen suomalainen metsäkuusi, melkein niinkuin naapurin metsästä varastettu. Hommaa heti!', '1', '80', 100, '/images/trees/metsakuusi.jpg');
INSERT INTO products (`name`, `name2`, `category`, `price`, `storage`) VALUES ('Metsäkuusi', 'Pituus 121-160', '1', '120', 150);
INSERT INTO products (`name`, `name2`, `category`, `price`, `storage`) VALUES ('Metsäkuusi', 'Pituus 161-200', '1', '160', 50);
INSERT INTO products (`name`, `name2`, `category`, `price`, `storage`) VALUES ('Metsäkuusi', 'Pituus 201-240', '1', '200', 50);
INSERT INTO products (`name`, `name2`, `description`, `category`, `price`, `storage`, `image_url`) VALUES ('Mustakuusi', 'Pituus 80-120', 'Joulukuusi mallia amerikasta ja kanadasta. Soveltuu myös skandinaaviseen kotiin.', '1', '80', 100, '/images/trees/mustakuusi.jpg');
INSERT INTO products (`name`, `name2`, `category`, `price`, `storage`) VALUES ('Mustakuusi', 'Pituus 121-160', '1', '120', 150);
INSERT INTO products (`name`, `name2`, `category`, `price`, `storage`) VALUES ('Mustakuusi', 'Pituus 161-200', '1', '160', 50);
INSERT INTO products (`name`, `name2`, `category`, `price`, `storage`) VALUES ('Mustakuusi', 'Pituus 201-240', '1', '200', 50);
INSERT INTO products (`name`, `name2`, `description`, `category`, `price`, `storage`, `image_url`) VALUES ('Sinikuusi', 'Pituus 80-120', 'Kauniin sinertävä kuusi perinteisen vihreän sijaan.', '1', '80', 100, '/images/trees/sinikuusi.jpg');
INSERT INTO products (`name`, `name2`, `category`, `price`, `storage`) VALUES ('Sinikuusi', 'Pituus 121-160', '1', '120', 150);
INSERT INTO products (`name`, `name2`, `category`, `price`, `storage`) VALUES ('Sinikuusi', 'Pituus 161-200', '1', '160', 50);
INSERT INTO products (`name`, `name2`, `category`, `price`, `storage`) VALUES ('Sinikuusi', 'Pituus 201-240', '1', '200', 50);
INSERT INTO products (`name`, `name2`, `description`, `category`, `price`, `storage`, `image_url`) VALUES ('Mänty', 'Pituus 80-120', 'Voiko mänty olla joulukuusi? Osta ja kokeile! Tämä on sisäsiistimpi kuin kuusi ja lapissa mänty on kuusta suositumpi vaihtoehto "joulukuuseksi".', '1', '80', 100, '/images/trees/manty.jpg');
INSERT INTO products (`name`, `name2`, `category`, `price`, `storage`) VALUES ('Mänty', 'Pituus 121-160', '1', '120', 150);
INSERT INTO products (`name`, `name2`, `category`, `price`, `storage`) VALUES ('Mänty', 'Pituus 161-200', '1', '160', 50);
INSERT INTO products (`name`, `name2`, `category`, `price`, `storage`) VALUES ('Mänty', 'Pituus 201-240', '1', '200', 50);
INSERT INTO products (`name`, `name2`, `description`, `category`, `price`, `storage`, `image_url`) VALUES ('Timanttituija', 'Pituus 80-120', 'Tämä kartion mallinen, erittäin tuuhea lajike, sopii erittäin hyvin myös joulukuuseksi.', '1', '80', 100, '/images/trees/tuija.jpg');
INSERT INTO products (`name`, `name2`, `category`, `price`, `storage`) VALUES ('Timanttituija', 'Pituus 121-160', '1', '120', 150);
INSERT INTO products (`name`, `name2`, `category`, `price`, `storage`) VALUES ('Timanttituija', 'Pituus 161-200', '1', '160', 50);
INSERT INTO products (`name`, `name2`, `category`, `price`, `storage`) VALUES ('Timanttituija', 'Pituus 201-240', '1', '200', 50);
INSERT INTO products (`name`, `name2`, `description`, `category`, `price`, `storage`, `image_url`) VALUES ('Serbiankuusi', 'Pituus 80-120', 'Tämä kuusi on erittäin uhanalainen luonnossa, mutta me tuotamme kuusen siemenet paikallisella tuotannolla, joten elvytämme kantaa ja tarjoamme teille kauniin kuusen sekä puhtaan omantunnon!.', '1', '80', 100, '/images/trees/serbiankuusi.jpg');
INSERT INTO products (`name`, `name2`, `category`, `price`, `storage`) VALUES ('Serbiankuusi', 'Pituus 121-160', '1', '120', 150);
INSERT INTO products (`name`, `name2`, `category`, `price`, `storage`) VALUES ('Serbiankuusi', 'Pituus 161-200', '1', '160', 50);
INSERT INTO products (`name`, `name2`, `category`, `price`, `storage`) VALUES ('Serbiankuusi', 'Pituus 201-240', '1', '200', 50);


-- Lisätään Koristeet
INSERT INTO products (`name`, `description`, `category`, `price`, `storage`, `image_url`) VALUES ('Koristepaketti, punainen, 12kpl', 'Täältä löydät etsimäsi! Eli monenmoisia palloja jokaiseen makuun. Näillä saat kuuseen mahtavaa väriloistetta ja jouluisen ilmeen.', '2', '7', 1500, '/images/decorations/punainen.jpg');
INSERT INTO products (`name`, `description`, `category`, `price`, `storage`, `image_url`) VALUES ('Koristepaketti, roosa, 12kpl', 'Täältä löydät etsimäsi! Eli monenmoisia palloja jokaiseen makuun. Näillä saat kuuseen mahtavaa väriloistetta ja jouluisen ilmeen.', '2', '7', 1500, '/images/decorations/roosa.jpg');
INSERT INTO products (`name`, `description`, `category`, `price`, `storage`, `image_url`) VALUES ('Koristepaketti, hopea, 12kpl', 'Täältä löydät etsimäsi! Eli monenmoisia palloja jokaiseen makuun. Näillä saat kuuseen mahtavaa väriloistetta ja jouluisen ilmeen.', '2', '7', 1500, '/images/decorations/hopea.jpg');
INSERT INTO products (`name`, `description`, `category`, `price`, `storage`, `image_url`) VALUES ('Koristepaketti, kulta, 12kpl', 'Täältä löydät etsimäsi! Eli monenmoisia palloja jokaiseen makuun. Näillä saat kuuseen mahtavaa väriloistetta ja jouluisen ilmeen.', '2', '7', 1500, '/images/decorations/kulta.jpg');
INSERT INTO products (`name`, `description`, `category`, `price`, `storage`, `image_url`) VALUES ('Koristepaketti, värisekoitus, 12kpl', 'Täältä löydät etsimäsi! Eli monenmoisia palloja jokaiseen makuun. Näillä saat kuuseen mahtavaa väriloistetta ja jouluisen ilmeen.', '2', '7', 1500, '/images/decorations/varikas.jpg');
INSERT INTO products (`name`, `description`, `category`, `price`, `storage`, `image_url`) VALUES ('Koristepaketti, valkea, 12kpl', 'Täältä löydät etsimäsi! Eli monenmoisia palloja jokaiseen makuun. Näillä saat kuuseen mahtavaa väriloistetta ja jouluisen ilmeen.', '2', '7', 1500, '/images/decorations/valkea.jpg');
INSERT INTO products (`name`, `description`, `category`, `price`, `storage`, `image_url`) VALUES ('Kulkuset, 10kpl', 'Kulkusten kilinähän kuuluu erottamattomasti joulunaikaan, muokkaile tämän paketin kulkusista mukavia koristeita tonttulakkeihin tai kuusen ympärille', '2', '11', 1500, '/images/decorations/kulkuset.jpg');
INSERT INTO products (`name`, `description`, `category`, `price`, `storage`, `image_url`) VALUES ('Koristepaketti, olki, 10kpl', 'Paikallisten eläkeläisten taidon näytteet! Hartaudella ja ammattitaidolla valmistuneet kauniit koristeet juuri sinulle!', '2', '20', 1500, '/images/decorations/olki.jpg');
INSERT INTO products (`name`, `description`, `category`, `price`, `storage`, `image_url`) VALUES ('Koristepaketti, pehmeä, 10kpl', 'Marttojen rakkaudella tehdyt pehmeät koristeet. Näistä voit tuntea joulun lämmön!', '2', '20', 1500, '/images/decorations/pehmea.jpg');
INSERT INTO products (`name`, `description`, `category`, `price`, `storage`, `image_url`) VALUES ('Koristepaketti, tähdet, 10kpl', 'Ekologisesti valmistetut puuartesaanien käsityönä tekemät tähdet koristamaan sinun joulukuustasi. Kaikki nämä tähdet on tehty luonnon kaatamista puista, jolloin turhaa hävikkiä ei synny.', '2', '20', 1500, '/images/decorations/puutahti.jpg');


-- Lisätään Latvatähdet
INSERT INTO products (`name`, `description`, `category`, `price`, `storage`, `image_url`) VALUES ('Latvatähti, hopea', 'Kaunis ja ajaton hopeinen koriste', '3', '10', 1500, '/images/stars/hopeatahti.jpg');
INSERT INTO products (`name`, `description`, `category`, `price`, `storage`, `image_url`) VALUES ('Latvatähti, kulta', 'Lämpimän kultainen latvatähti', '3', '10', 1500, '/images/stars/kultatahti.jpg');
INSERT INTO products (`name`, `description`, `category`, `price`, `storage`, `image_url`) VALUES ('Latvatähti, valkoinen', 'Hillitympi valkoinen tähti', '3', '15', 1500, '/images/stars/valkotahti.jpg');
INSERT INTO products (`name`, `description`, `category`, `price`, `storage`, `image_url`) VALUES ('Latvatähti, ruskea', 'Hillitympi ruskea tähtä', '3', '9', 1500, '/images/stars/ruskeatahti.jpg');
INSERT INTO products (`name`, `description`, `category`, `price`, `storage`, `image_url`) VALUES ('Latvatähti, olki', 'Erittäin perinteikäs valinta, sopii kuuseen kuin kuuseen', '3', '25', 1500, '/images/stars/olkitahti.jpg');


-- Lisätään Muuta
INSERT INTO products (`name`, `description`, `category`, `price`, `storage`, `image_url`) VALUES ('Lahjasäkki', 'Reilumman kokoinen Joulupukin säkki johon mahtuu kilttien ja lapsien ja miksei myös aikuisten lahjat odottamaan h-hetkeä', '4', '30.50', 100, '/images/others/lahjasakki.jpg');
INSERT INTO products (`name`, `description`, `category`, `price`, `storage`, `image_url`) VALUES ('Tontut', 'Joulupukin luotettavat tontut vahtivat aina, etenkin joulun alla. Osta teidän talouteen tämä pari!', '4', '10', 50, '/images/others/tontut.jpg');
INSERT INTO products (`name`, `description`, `category`, `price`, `storage`, `image_url`) VALUES ('Havukranssi', 'Näytä myös naapurille, että teillä juhlitaan joulua ja koristele se vaikka ledivaloilla, hommaa heti!', '4', '30', 50, '/images/others/havukranssi.jpg');
INSERT INTO products (`name`, `description`, `category`, `price`, `storage`, `image_url`) VALUES ('Kuusenjalka', 'Perinteikäs valurautainen tukeva jalka, joka takaa kuusen pysyvän tolpillaan.', '4', '30', 50, '/images/others/kuusenjalka.jpg');
INSERT INTO products (`name`, `description`, `category`, `price`, `storage`, `image_url`) VALUES ('Kuusenalusmatto', 'Perinteikkäästä juutista tehty kaunis matto. Kaikki meistä vanhenevat, myös kuusi ja irtohavuilta ei voi välttyä. Vähennä sotkua pienellä vaivalla ja lisää tämä ostoskoriin!', '4', '10', 50, '/images/others/kuusenalusmatto.jpg');

-- Lisätään Admin    salasana: admin
INSERT INTO users(`lname`, `fname`, `phone`, `email`, `address`, `post`, `city`, `uname`, `passwd`, `role`) VALUES ('Testaava', 'Keijo', '---', '---', '---', '---', '---', 'admin', '$2a$10$lDKDfLNQA4V5.NaR/bu/4OKnf6f26i8tfcO2l0jvX1wc0mez6gFcK', 'admin');