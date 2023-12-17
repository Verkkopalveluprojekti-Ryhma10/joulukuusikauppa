import axios from "axios"
import { useState } from "react"
import { token, userInfo } from "../signals/LoginSignal"
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

   async function login() {
       //send as parameters
       await axios.postForm('http://localhost:3001/login', {uname, pw})  
       .then(res => token.value = res.data.jwtToken) //this gets tokenvalue
       .catch(error => console.log(error.message))
   };
   
   return(
       <div className="forms-container">
           <input placeholder="käyttäjänimi" value={uname} onChange={e => setUname(e.target.value)}/>
           <input placeholder="salasana" type="password" value={pw} onChange={e => setPw(e.target.value)}/>
           <button onClick={login}>Kirjaudu</button>
       </div>
   )
}

function UserInfo() {

    //if userinfo.value is not null..
    if(userInfo.value != null){
        //userinfo.value.role is admin navigate to adminaddproducts
        
        return(
        <div>
            {/* if userInfo has value, then show last name and first name*/}
            {userInfo.value && <h2 className="forms-container">Heippa, {userInfo.value.lname + ' ' + userInfo.value.fname + ', ' + userInfo.value.role}, oot linjoilla!</h2>}
        </div>
        )
}
}