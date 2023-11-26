import axios from "axios"
import { useState } from "react"
import { token, userInfo } from "../signals/LoginSignal"

//npm i axios
//npm i @preact/signals-react

export default function LoginForm() {

    return(
        <div>
            <Login/>
        </div>
    )

}

function Login() {

       console.log(token.value); 
   console.log(userInfo.value); 

   const [uname, setUname] = useState('')
   const [pw, setPw] = useState('')

   function login() {
       //send as parameters
       axios.postForm('http://localhost:3001/login', {uname, pw})
       .then( res => token.value = res.data.jwtToken) //this gets tokenvalue
       .catch(error => console.log(error.message))

   };

   return(
       <div>
           <input value={uname} onChange={e => setUname(e.target.value)}/>
           <input value={pw} onChange={e => setPw(e.target.value)}/>
           <button onClick={login}>Kirjaudu</button>
       </div>
   )

}