const express = require('express')
const cors = require('cors')
const mysql = require('mysql2/promise')
const config = require('./db_config')

//for pw hash npm i bcrypt
const bcrypt = require('bcrypt')
//for multipart/form-data npm i multer
const multer = require('multer')
//destination ??
const upload = multer({ dest: "upload/" })

const port = 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', async (req,res) => {
    try {
        const connection = await mysql.createConnection(config.db)
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

//first register new admin
//should username be unique in db?
//upload.none, .none takes in only key-value pairs as text (not files, only formdata fields)
//with postman, choose body -> formdata -> enter keys and values 
app.post('/register-admin', upload.none(), async (req,res) => {
    //parameters
    const name = req.body.name;
    const uname = req.body.uname;
    let pw = req.body.pw;
    const role = req.body.role;

    //password hash with salt, bigger the salt number, slower the checking gets, safer it might be
    pw = await bcrypt.hash(pw, 10);

    //values are added as parameters
    const sqlAddUser = 'INSERT INTO users (name,uname,passwd,role) VALUES (?,?,?,?)';

    try {
        //create connection
        const connection = await mysql.createConnection(config.db);
        //execute slq with parameters
        await connection.execute(sqlAddUser,[name,uname,pw,role]);
        res.end();
    } catch (error) {
        res.status(500).send(error.message);
    }
})
//

app.listen(port,() => {
    console.log(`Server is running on port ${port}`)
})