import axios from "axios"
import { useState } from "react"

export default function LoginForm() {

    const [uname, setUname] = useState('')
    const [pw, setPw] = useState('')

    function login() {
        //send as parameters
        axios.post('http://localhost:3001/login', {uname, pw})
        .then(response => {
            // Save the user ID to localStorage
            localStorage.setItem('userId', response.data.userId);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    return(
        <div>
            <input value={uname} onChange={e => setUname(e.target.value)}/>
            <input value={pw} onChange={e => setPw(e.target.value)}/>
            <button onClick={login}>Kirjaudu</button>
        </div>
    )
}