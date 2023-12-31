require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mysql = require('mysql2/promise')

//for pw hash npm i bcrypt
const bcrypt = require('bcrypt')
//for multipart/form-data npm i multer
const multer = require('multer')
//destination ??
const upload = multer({ dest: "upload/" })
//for token npm i jsonwebtoken
const jwt = require('jsonwebtoken')
//for fileserver npm i fs
const fs = require('fs')
const { Axios, default: axios } = require('axios')

const port = 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

// Haetaan dbconffit envistä
const conf = {    
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE    
}

//Kunhan annetaan status että serveri rullaa
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
        // Koitetaan muodostaa tietokantayhteys
        const connection = await mysql.createConnection(conf);
        //luetaan annettuja parametreja
        const category = req.query.category;
        const name = req.query.name;
        const categorynamebyid = req.query.categorynamebyid;
        const id = req.query.id;

        let result;        
        
        //Jos category määritetty
        if(category) {
            result = await connection.execute("SELECT * FROM product_categories WHERE id=?", [category]);
        }
        //Jos name määritetty
        else if(name){
            result = await connection.execute("SELECT * FROM product_categories WHERE name=?", [name]);
        }
        //Jos categorynamebyid määritetty
        else if(categorynamebyid){
            result = await connection.execute("SELECT name FROM product_categories WHERE id=?", [categorynamebyid]);
        }
        else if(id){
            result = await connection.execute("SELECT * FROM product_categories WHERE id=?", [id]);
        }
        //Muuten
        else{
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
        const name = req.query.name;

        let result;     
        if(category){
            // Haetaan tuotteet jos kategoria määritetty
            result = await connection.execute("SELECT * FROM products WHERE category=?", [category]);
        } else if(name){
            // Haetaan tuotteen jos alikategoria määritetty
            result = await connection.execute("SELECT p.id, p.name, p.name2, p.description, p.category, p.price, p.storage, p.image_url FROM products p join product_categories pc on pc.id=p.category WHERE pc.name =?", [name]);
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
                //create token for user, save username and more if needed
                const token = jwt.sign({username: uname }, process.env.JWT_KEY)
                res.status(200).json({jwtToken: token});
            } else {
                //401 unauthorized
                res.status(401).send("Invalid username or password");
            }
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
})

//Only authenticated user can fetch data with username 
app.get('/user', async (req,res) => {

    //check token from headers
    //questionmark if there is no authorization, returns null
    //use split (token is Bearer token so [1] is token)
    const token = req.headers.authorization?.split(' ')[1];

    const sql = 'SELECT * FROM users WHERE uname=?'

    try {
        //this checks that token matches with user
        const username = jwt.verify(token, process.env.JWT_KEY).username;        
        const connection = await mysql.createConnection(conf)
        //now we can use username for checking data
        //execute sql with token verified username parameter
        const [rows] = await connection.execute(sql, [username])

        res.json(rows[0]);
    } catch (error) {
        //if there is no token
        res.status(403).send('Access forbidden')
    }
})

//for admin part, multirest files destinations

const storage = multer.diskStorage({

    destination: ( req, file, cb ) => {
        cb(null, '../src/assets/images')  
    },
    filename: (req, file, cb ) => {
        cb(null, Date.now() +'-' + file.originalname)
    }
})

//new multer for multirest files
const upload2 = multer({storage: storage})

//add images and create new folders
////upload.single sending one image at a time, defining parameter(key) name, here 'pic'
//with postman - body - formdata - file
//add other product data
app.post('/addproduct', upload2.single('pic'), async (req, res) => {
    
    const currentPath = req.file.path
    const filename = req.file.filename
    let categoryName
     
    try {
        const connection = await mysql.createConnection(conf)
        let { productName, productName2, description, category, price, storage } = req.body;
        
        productName = capitalizeFirstLetter(productName)
        productName2 = capitalizeFirstLetter(productName2)
        description = capitalizeFirstLetter(description)

        //Haetaan kategorian nimi IDn perusteella
        const response = await axios.get('http://localhost:3001/categories?categorynamebyid='+category);
        categoryName = response.data[0].name

        const targetDir = '../src/assets/images/'  + categoryName
            
        //Varmistetaan onko tuommonen kansio jo olemassa
        if(!fs.existsSync(targetDir)) {
            //create folder
            await fs.promises.mkdir(targetDir)
        }
        //Siirrellään lisätty kuva oikeaan kansioon
        await fs.promises.rename(currentPath, '../src/assets/images/'+categoryName+'/'+ filename) 

        //destination path send for users
        const imageUrl = '/images/' + categoryName + '/' + filename

        //Lauseke tuotteiden lisäämistä varten
        const sqlAddProducts = 'INSERT INTO products (name, name2, description, category, price, storage, image_url) VALUES (?, ?, ?, ?, ?, ?, ?)';
        //Muuttujat tuotteiden lisäämistä varten
        const reqBodyValues = [ productName, productName2, description, category, price, storage, imageUrl ];     
        //Lisätään tuotteet kantaan
        await connection.execute(sqlAddProducts, reqBodyValues)
        res.status(200).json({message: 'Tuotteen lisäys onnistui.', imageUrl: imageUrl})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
} )

//for admin to add new category with image
app.post('/addcategories', upload2.single('pic'), async (req, res) => {
    
    const currentPath = req.file.path
    let newFolderName = capitalizeFirstLetter(req.body.newFolderName)
    const filename = req.file.filename
    
    //destination path send for users
    const imageUrl = '/images/categories/' + filename
    //create folder
    const targetDir = '../src/assets/images/'  + newFolderName
      
    try {
        //if folder does not exist
        if(!fs.existsSync(targetDir)) {
            //create folder
            await fs.promises.mkdir(targetDir)
        }
        await fs.promises.rename(currentPath, '../src/assets/images/categories/'+ filename)

        let { name, description2 } = req.body;

        name = capitalizeFirstLetter(name)
        description2 = capitalizeFirstLetter(description2)

        const sqlAddCategory = 'INSERT INTO product_categories (name, description, image_url) VALUES (?, ?, ?)';   
        const reqBodyValues2 = [ name, description2, imageUrl ];
        
        const connection = await mysql.createConnection(conf)
        await connection.execute(sqlAddCategory, reqBodyValues2)
        res.status(200).json({message: 'Kategorian lisäys onnistui.', imageUrl: imageUrl})

    } catch (error) {
        res.status(500).json({error: error.message})
    }  
} )

//post for order and order_items tables
app.post('/orders', upload.none(), async (req, res) => {

    const { customer, payMethod } = req.body;
    const items = req.body.items;

    const sqlAddOrders = 'INSERT INTO orders (customer, payMethod) VALUES (?, ?)'; 
    
    const sqlAddItems = 'INSERT INTO order_items ( orderid, productid, amount, price) VALUES (?, ?, ?, ?)' 
    
    const reqBodyValues = [customer, payMethod]

    try {
        const connection = await mysql.createConnection(conf);
        //for oders table
        await connection.execute(sqlAddOrders, reqBodyValues)

        //this takes last executed tables id
        const [order] = await connection.execute('SELECT LAST_INSERT_ID()');
        const orderId = order[0]['LAST_INSERT_ID()'];
        //for order_items table
        for (const item of items) {
            const itemValues = [ item.product, item.amount, item.price];
            await connection.execute(sqlAddItems, [orderId, item.product, item.amount, item.price]);
        }

        res.status(200).json({ message: 'Tilaus vastaanotettu onnistuneesti' });
    } catch (error) {
        console.error('Virhe tilausta tallennettaessa:', error);
        res.status(500).json({ error: error.message });
    }
});

app.listen(port,() => {
    console.log(`Server is running on port ${port}`)
})