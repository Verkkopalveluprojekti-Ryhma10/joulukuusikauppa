require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mysql = require('mysql2/promise')
//const config = require('./db_config')


//for pw hash npm i bcrypt
const bcrypt = require('bcrypt')
//for multipart/form-data npm i multer
const multer = require('multer')
//destination ??
const upload = multer({ dest: "upload/" })
//for token npm i jsonwebtoken
const jwt = require('jsonwebtoken')

const port = 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

const conf = {    
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE    
}

app.get('/', async (req,res) => {
    try {
        const connection = await mysql.createConnection(conf)
        res.status(200).json({message: 'Node server is running on port ' + port})
    } catch (err) {
        res.status(500).send(err.message)        
    }
});

// Haetaan tuotekategoriat
app.get('/categories', async (req, res) => {
    try {
        const connection = await mysql.createConnection(conf);
        const subcategory = req.query.subcategory;

        let result;        
        if(subcategory){
            result = await connection.execute("SELECT * FROM product_categories WHERE subcategory=?", [subcategory]);
        }else{
            result = await connection.execute("SELECT * FROM product_categories");
        }
        
        //Tuloksen ensimmäinen indeksi sisältää tulokset taulukkona
        res.json(result[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Haetaan tuotteet
app.get('/products', async (req, res) => {
    try {
        // Koitetaan muodostaa tietokantayhteys
        const connection = await mysql.createConnection(conf);
        // Luetaan jos annettu parametreja
        const category = req.query.category;
        const subcategory = req.query.subcategory;

        let result;     
        if(category){
            // Haetaan tuotteet jos kategoria määritetty
            result = await connection.execute("SELECT * FROM products WHERE category=?", [category]);
        }else if(subcategory){
            // Haetaan tuotteen jos alikategoria määritetty
            result = await connection.execute("SELECT * FROM products WHERE subcategory=?", [subcategory]);
        } else {
            // Haetaan kaikki tuotteet
            result = await connection.execute("SELECT * FROM products");
        }
        
        //Tuloksen ensimmäinen indeksi sisältää tulokset taulukkona
        res.json(result[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

//Maalela yrittää tähän codes
//pw hash stuff
//first register new user
//upload.none, .none takes in only key-value pairs as text (not files, formdata fields)
//with postman, choose body -> formdata -> enter keys and values 
app.post('/register', upload.none(), async (req,res) => {
    //parameters needed for registering
    const lname = req.body.lname;
    const fname = req.body.fname;
    const phone = req.body.phone;
    const email = req.body.email;
    const address = req.body.address;
    const post = req.body.post;
    const city = req.body.city;
    const uname = req.body.uname;
    let pw = req.body.pw;
    const role = req.body.role;

    //password hash with salt, bigger the salt number, slower the checking gets, safer it might be
    pw = await bcrypt.hash(pw, 10);

    //values are added as parameters to sql
    const sqlRegisterUser = 
    'INSERT INTO users (lname, fname, phone, email, address, post, city, uname, passwd, role) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

    try {
        //create connection
        const connection = await mysql.createConnection(conf);
        //execute slq with parameters
        await connection.execute(sqlRegisterUser,[lname, fname, phone, email, address, post, city, uname, pw, role]);
        res.end();
    } catch (error) {
        res.status(500).send(error.message);
    }
})

//with login check is user valid or not
app.post('/login', upload.none(), async (req, res) => {
    const uname = req.body.uname;
    const pw = req.body.pw;

    //choose passwd with uname param
    const sql = 'SELECT passwd FROM users WHERE uname=?';

    try {
        //create connection
        const connection = await mysql.createConnection(conf);
        //execute sql search for uname
        const [rows] = await connection.execute(sql, [uname]);

        //check if uname is found
        if(rows.length === 0) {
            // if not then 404 not found or 401 unauthorized
            res.status(401).send("User not found");
        } else {
            //if uname is found, take passwd
            const pwHash = rows[0].passwd;
            //compare hashed pw with pw user has entered
            //if match, valid is true
            const valid =  await bcrypt.compare(pw, pwHash);

            //if valid true, then ok, else unauthorized
            if(valid) {
                res.status(200).send("Login successful");
            } else {
                //401 unauthorized
                res.status(401).send("Invalid username or password");
            }
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
})

//

app.listen(port,() => {
    console.log(`Server is running on port ${port}`)
})