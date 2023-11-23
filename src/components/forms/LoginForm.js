import axios from "axios"
import { useState } from "react"

//npm i axios
//npm i @preact/signals-react

export default function LoginForm() {

    const [uname, setUname] = useState('')
    const [pw, setPw] = useState('')

    function login() {
        //send as parameters
        axios.postForm('http://localhost:3001/login', {uname, pw})
        .then()
        .catch()

    }


    return(
        <div>
            <input value={uname} onChange={e => setUname(e.target.value)}/>
            <input value={pw} onChange={e => setPw(e.target.value)}/>
            <button onClick={login}>Kirjaudu</button>
        </div>
    )
}