import axios from "axios"
import { useState } from "react"
import { token, userInfo } from "../signals/LoginSignal"
import AdminAddProducts from "./AdminAddProducts"
import '../../styles/Forms.css'

//npm i axios
//npm i @preact/signals-react

export default function LoginForm() {

    return(
        <div>
            {/* if tokens length is bigger than 0, show UserInfo, else Login*/}
            {token.value.length > 0 ? 
            <UserInfo/> :
            <Login/>}
        </div>
    )
}

function Login() { 
    
   const [uname, setUname] = useState('')
   const [pw, setPw] = useState('')

   function login() {
       //send as parameters
       axios.postForm('http://localhost:3001/login', {uname, pw})  
       .then( res => token.value = res.data.jwtToken) //this gets tokenvalue
       .catch(error => console.log(error.message))
   };
   
   return(
       <div className="forms-container">
           <input value={uname} onChange={e => setUname(e.target.value)}/>
           <input value={pw} onChange={e => setPw(e.target.value)}/>
           <button onClick={login}>Kirjaudu</button>
       </div>
   )
}

function UserInfo() {

    if( userInfo.value.lname === "Testaava") {
     return (
     <>  
     {userInfo.value && <h2>Heippa, {userInfo.value.lname + ' ' + userInfo.value.fname}, oot linjoilla!</h2>}
     < AdminAddProducts /> 
     </>) 
    } else {
        return(
        <div>
            {/* if userInfo has value, then show last name and first name*/}
            {userInfo.value && <h2>Heippa, {userInfo.value.lname + ' ' + userInfo.value.fname}, oot linjoilla!</h2>}
        </div>
    )}
}