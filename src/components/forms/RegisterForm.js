import axios from "axios";
import { useState } from "react";
import '../../styles/Forms.css'


export default function RegisterForm() {

    const [lname, setLname] = useState('')
    const [fname, setFname] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [post, setPost] = useState('')
    const [city, setCity] = useState('')
    const [uname, setUname] = useState('')
    const [pw, setPw] = useState('')
    const [role, setRole] = useState('customer')
    const [errormessage, setErrormessage] = useState('')

    function registerButton() {        

        //lets post some new info to users table
        //this is only for customer registration so role is always customer, for now
        axios.post('http://localhost:3001/register', {lname, fname, phone, email, address, post, city, uname, pw, role} )
            .then((response) =>{
            setLname(response.data.lname)
            setFname(response.data.fname)
            setPhone(response.data.phone)
            setEmail(response.data.email)
            setAddress(response.data.address)
            setPost(response.data.post)
            setCity(response.data.city)
            setUname(response.data.uname)
            setPw(response.data.pw)
            setRole(response.data.role)
        }).catch (error => {
            setErrormessage('tapahtui virhe. ');
            console.log(error.message);
        })
    }

    return(
        <div className="forms-container">
            <label>Sukunimesi: </label>
            <input type="text" placeholder="Sukunimi" 
            value={lname} onChange={(e) => setLname(e.target.value)}/>
            <label>Etunimesi: </label>
            <input type="text" placeholder="Etunimi" 
            value={fname} onChange={(e) => setFname(e.target.value)}/>
            <label>Puhelinnumerosi: </label>
            <input type="text" placeholder="Puhelinnumero" 
            value={phone} onChange={(e) => setPhone(e.target.value)}/>
            <label>Sähköpostiosoitteesi: </label>
            <input type="email" placeholder="Sähköposti" 
            value={email} onChange={(e) => setEmail(e.target.value)}/>
            <label>Lähiosoite: </label>
            <input type="text" placeholder="Lähiosoite" 
            value={address} onChange={(e) => setAddress(e.target.value)}/>
            <label>Postinumero: </label>
            <input type="text" placeholder="Postinumero" 
            value={post} onChange={(e) => setPost(e.target.value)}/>
            <label>Paikkakunta: </label>
            <input type="text" placeholder="Paikkakunta" 
            value={city} onChange={(e) => setCity(e.target.value)}/>
            <label>Käyttäjänimi: </label>
            <input type="text" placeholder="Käyttäjänimi" 
            value={uname} onChange={(e) => setUname(e.target.value)}/>
            <label>Salasana: </label>
            <input type="password" placeholder="Salasana" 
            value={pw} onChange={(e) => setPw(e.target.value)}/>
            <button onClick={registerButton}>Rekisteröidy</button>
        </div>
    )
}