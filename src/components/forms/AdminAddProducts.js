import React, { useState } from 'react'
import '../../styles/Forms.css'

function AdminAddProducts() {

  const [productName, setProductName] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')

  function AddNewProduct() {
    
  }

  return (
    <div className='forms-container'>
      <label>Lisää tuotenimi: </label>
      <input type="text" placeholder="Lisää tuotenimi" 
      value={productName} onChange={(e) => setProductName(e.target.value)}/>
      <label>Lisää tuotekuvaus: </label>
      <input type="text" placeholder="Lisää tuotekuvaus" 
      value={description} onChange={(e) => setDescription(e.target.value)}/>
      <label>valitse kategoria: </label>
      <input type="text" placeholder="Valitse kategoria" 
      value={category} onChange={(e) => setCategory(e.target.value)}/>
      <label>Lisää tuotehinta: </label>
      <input type="text" placeholder="Lisää tuotehinta" 
      value={price} onChange={(e) => setPrice(e.target.value)}/>
      <button onClick={AddNewProduct}>Lisää uusi tuote tietokantaan</button>
    </div>
  )
}

export default AdminAddProducts