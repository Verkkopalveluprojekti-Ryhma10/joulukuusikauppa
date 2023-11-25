import axios from "axios"
import { useState } from "react"
import { LoginToken } from "../signals/LoginSignal"

//npm i axios
//npm i @preact/signals-react

export default function LoginForm() {

    const [uname, setUname] = useState('')
    const [pw, setPw] = useState('')

    function login() {
        //send as parameters
        axios.postForm('http://localhost:3001/login', {uname, pw})
        .then( res => LoginToken.value = res.data.jwtToken)
        .catch(error => console.log(error.message))

    }


    return(
        <div>
            <input value={uname} onChange={e => setUname(e.target.value)}/>
            <input value={pw} onChange={e => setPw(e.target.value)}/>
            <button onClick={login}>Kirjaudu</button>
        </div>
    )
}