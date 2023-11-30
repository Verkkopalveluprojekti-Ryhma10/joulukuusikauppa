import React, { useState } from 'react'
import '../../styles/Forms.css'
import axios from 'axios'

function AdminAddProducts() {

  const [productName, setProductName] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  //for imagefile
  const [imgFile, setImgFile] = useState('')
  //for imgUrl
  const [imgUrl, setimgUrl] = useState('')

  function AddNewProduct() {
    const params = {
      pic: imgFile,
      category: category
    }

    axios.postForm('http://localhost:3001/image', params)
    .then(res => setimgUrl(res.data.imageUrl))
    .catch(error => console.log(error.message))

  }

  

  return (
    <div className='forms-container'>
      <label>Lisää tuotenimi: </label>
      <input type="text" placeholder="Lisää tuotenimi" 
      value={productName} onChange={(e) => setProductName(e.target.value)}/>
      <label>Lisää tuotekuvaus: </label>
      <input type="text" placeholder="Lisää tuotekuvaus" 
      value={description} onChange={(e) => setDescription(e.target.value)}/>
      <label>Lisää kategoria: </label>
      <input type="text" placeholder="Valitse kategoria" 
      value={category} onChange={(e) => setCategory(e.target.value)}/>
      <label>Lisää tuotehinta: </label>
      <input type="text" placeholder="Lisää tuotehinta" 
      value={price} onChange={(e) => setPrice(e.target.value)}/>
      <input type='file' onChange={(e) => setImgFile(e.target.files[0])}/>
      <button onClick={AddNewProduct}>Lisää uusi tuote tietokantaan</button>

      {imgUrl && <img src={'http://localhost:3001/' + imgUrl} alt='lisattykuva' height={50}/>}
    </div>
  )
}

export default AdminAddProducts