import axios from "axios";
import React, {useState, useEffect} from "react";



// Tilauksen seuranta
async function ordertracking(username) {
    try {
        //Tietokanta yhteyden yritys
        const connection = await  mysql.createConnection(conf);
        //
        const [rows] = await connection.execute('')

        let result = [];
        //Valitaan taulukosta tuotteen nimi, hinta, kuva, kategoria ja määrä
        for (const row of rows) {
            const [products] = await connection.execute("SELECT id,product_name,price,image_url,category, quantity FROM")

            let order ={
                orderDate: row.date,
                orderId: row.orderId,
                products: products
            }

            result.push(order);
        }

        return result;
    } catch (error) {
        res.status(500).json({ error:error.message });
    }
}