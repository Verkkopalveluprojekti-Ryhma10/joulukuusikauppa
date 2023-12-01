import React, { useState } from 'react'
import '../../styles/Forms.css'
import axios from 'axios'

function AdminAddProducts() {

  const [productName, setProductName] = useState('')
  const [productNameTwo, setProductNameTwo] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [storage, setStorage] = useState('')
  //subfolder name
  const [newFolderName, setNewFolderName] = useState('')
  //for imagefile
  const [imgFile, setImgFile] = useState('')
  //for imgUrl
  const [imgUrl, setimgUrl] = useState("")
  const [errormessage, setErrormessage] = useState('')

  function AddNewProduct() {
    const params = {
      pic: imgFile,
      newFolderName: newFolderName,
      imageUrl: imgUrl,
      productName: productName,
      productName2: productNameTwo,
      description: description,
      category: category,
      price: price,
      storage: storage
    }

    axios.postForm('http://localhost:3001/image', params)
    .then(res => {
      setimgUrl(res.data.imageUrl)
      setProductName(res.data.productName)
      setProductNameTwo(res.data.productName2)
      setCategory(res.data.category)
      setPrice(res.data.price)
      setStorage(res.data.storage)
    })
    .catch(error => setErrormessage('tapahtui virhe: ' + error.message))
  }  

  return (
    <div className='forms-container'>
      <label>Lisää tuotenimi: </label>
      <input type="text" placeholder="Lisää tuotenimi" 
      value={productName} onChange={(e) => setProductName(e.target.value)}/>
      <label>Lisää tuotenimi2: </label>
      <input type="text" placeholder="Lisää tuotenimi2" 
      value={productNameTwo} onChange={(e) => setProductNameTwo(e.target.value)}/>
      <label>Lisää tuotekuvaus: </label>
      <input type="text" placeholder="Lisää tuotekuvaus" 
      value={description} onChange={(e) => setDescription(e.target.value)}/>
      <label>Lisää/valitse kategoria: </label>
      <input type="text" placeholder="Lisää kategoria" 
      value={category} onChange={(e) => setCategory(e.target.value)}/>        
      <label>Lisää tuotehinta: </label>
      <input type="text" placeholder="Lisää tuotehinta" 
      value={price} onChange={(e) => setPrice(e.target.value)}/>
      <label>Lisää varastomäärä: </label>
      <input type="text" placeholder="Lisää varastomäärä" 
      value={storage} onChange={(e) => setStorage(e.target.value)}/>  
      <label>Lisää uusi alikansio kuville: </label>
      <input type="text" placeholder="Lisää alikansio" 
      value={newFolderName} onChange={(e) => setNewFolderName(e.target.value)}/>
      <label>Valitse kuvatiedosto: </label>
      <input type='file' onChange={(e) => setImgFile(e.target.files[0])}/>
      <button onClick={AddNewProduct}>Lisää uusi tuote tietokantaan</button>
    </div>
  )
}

export default AdminAddProducts