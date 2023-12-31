import React, { useEffect, useState } from 'react'
import '../../styles/Forms.css'
import axios from 'axios'
import { userInfo } from "../signals/LoginSignal"

export default function AdminAddProducts() {

  //this state is used to track if product is succesfully added
  const [productAdded, setProductAdded] = useState(false);
  const [categoryAdded, setCategoryAdded] = useState(false);
  

  //successfully added new product to database
  function productIsAdded() {
    setProductAdded(true)
  }

  function categoryIsAdded() {
    setCategoryAdded(true)
  }

  //for adding another product after success message
  function anotherProduct() {
    setProductAdded(false)
    setCategoryAdded(false)
  }

  return(
    <>
    <div className="forms-container">
    {userInfo.value && <h2>Heippa, {userInfo.value.lname + ' ' + userInfo.value.fname}, oot linjoilla!</h2>}
    </div>
    {/* check if the product transfer was ok */}
    {!productAdded && !categoryAdded ? (
      <div>
      <AddCategory categoryAdded={categoryIsAdded}/>
      {/* render the AddProducts component
      productAdded prop is in addproducts functions axios .then  */}
      <AddProducts productAdded={productIsAdded}/>
      </div>
    ) : (
      //show success message and button that takes you back to addproducts
      <div className='forms-container'>
        <p>{productAdded ? 'tuote lisätty.' : 'Kategoria lisätty.'}</p>
        <button onClick={anotherProduct}>Lisää uusia</button>
      </div>
    )}    
    </>
  )
}

function AddProducts({productAdded}) {

  const [productName, setProductName] = useState('')
  const [productNameTwo, setProductNameTwo] = useState('')
  const [description, setDescription] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [price, setPrice] = useState('')
  const [storage, setStorage] = useState('')
  //for imagefile
  const [imgFile, setImgFile] = useState('')
  //for imgUrl
  const [imgUrl, setimgUrl] = useState("")
  const [errormessage, setErrormessage] = useState('')
  const [inputError, setInputError] = useState('')

  const [categoryData, setCategoryData] = useState([]);

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
 
  function AddNewProduct() {
    const params = {
      pic: imgFile,
      imageUrl: imgUrl,
      productName: productName,
      productName2: productNameTwo,
      description: description,
      category: selectedCategory,
      price: price,
      storage: storage
    }

    //checks that input values are not empty, so server won´t crash..
    if(productName.trim() ==='' || productNameTwo.trim() ==='' || 
      description.trim() ==='' || selectedCategory.trim() ==='' || 
      price.trim() ==='' || storage.trim() ==='') {
      console.log('Kenttä ei voi olla tyhjä');
      setInputError('Syötä kaikkiin kenttiin tiedot ensin.')
      return
    }
    //empty error message if inputs are not empty
    setInputError('')

    axios.postForm('http://localhost:3001/addproduct', params)
    .then(res => {
      setimgUrl(res.data.imageUrl)
      setProductName(res.data.productName)
      setProductNameTwo(res.data.productName2)
      setSelectedCategory(res.data.selectedCategory)
      setPrice(res.data.price)
      setStorage(res.data.storage)
      // use callback if transfer ok
      productAdded()
    })
    .catch(error => {
      setErrormessage('Tapahtui virhe.')
      console.log(error.message)
    })
  }  

  return (
    <div className='forms-container'>
      <label>Lisää tuotenimi: </label>
      <input type="text" placeholder="Lisää tuotenimi" 
      value={productName} onChange={(e) => setProductName(e.target.value)} required/>
      <label>Lisää tuotenimi2: </label>
      <input type="text" placeholder="Lisää tuotenimi2" 
      value={productNameTwo} onChange={(e) => setProductNameTwo(e.target.value)}/>
      <label>Lisää tuotekuvaus: </label>
      <input type="text" placeholder="Lisää tuotekuvaus" 
      value={description} onChange={(e) => setDescription(e.target.value)}/>
      <label>Valitse kategoria: </label>
      
      <select onChange={(e) => {setSelectedCategory(e.target.value)}} placeholder="Valitse kategoria">
        <option>Valitse Kategoria:</option>
        {categoryData.map((category, i) => {
            return (     
              <option key={i} value={category.id}>{category.name}</option>
          )})
        }
        
      </select>
      
      <label>Lisää tuotehinta: </label>
      <input type="text" placeholder="Lisää tuotehinta" 
      value={price} onChange={(e) => setPrice(e.target.value)}/>
      <label>Lisää varastomäärä: </label>
      <input type="text" placeholder="Lisää varastomäärä" 
      value={storage} onChange={(e) => setStorage(e.target.value)}/>  
      <label>Valitse kuvatiedosto: </label>
      <input type='file' onChange={(e) => setImgFile(e.target.files[0])}/>
      <p>{inputError}</p>
      <button onClick={AddNewProduct}>Lisää uusi tuote tietokantaan</button>      
    </div>
  )
}

function AddCategory({categoryAdded}) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')  
  
  //for imagefile
  const [imgFile, setImgFile] = useState('')
  //for imgUrl
  const [imgUrl, setimgUrl] = useState("")
  const [errormessage, setErrormessage] = useState('')
  const [inputError, setInputError] = useState('')
  
  function AddNewCategory() {

    const params = {
      pic: imgFile,
      newFolderName: name,
      imageUrl: imgUrl,
      name: name,
      description2: description,
    }
    //checks that input values are not empty, so server won´t crash..
    if(name.trim() ==='' || description.trim() ==='') {
      console.log('Kenttä ei voi olla tyhjä');
      setInputError('Syötä kaikkiin kenttiin tiedot ensin.')
      return
    }
    //empty error message if inputs are not empty
    setInputError('')

    axios.postForm('http://localhost:3001/addcategories', params)
    .then(res => {
      setimgUrl(res.data.imageUrl)
      setName(res.data.name)
      // use callback if transfer ok
      categoryAdded()
    })
    .catch(error => {
      setErrormessage('Tapahtui virhe.')
      console.log(error.message)
    })
  }  

  return (
    <div className='forms-container'>
      <label>Lisää kategorian nimi: </label>
      <input type="text" autoCapitalize='words' placeholder="Lisää tuotenimi" 
      value={name} onChange={(e) => setName(e.target.value)}/>
      <label>Lisää tuotekuvaus: </label>
      <input type="text" placeholder="Lisää tuotekuvaus" 
      value={description} onChange={(e) => setDescription(e.target.value)}/>         
      <label>Valitse kuvatiedosto: </label>
      <input type='file' onChange={(e) => setImgFile(e.target.files[0])}/>
      <p>{inputError}</p>
      <button onClick={AddNewCategory}>Lisää uusi kategoria tietokantaan</button>      
    </div>
  )
}

