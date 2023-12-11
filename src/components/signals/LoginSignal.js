import { effect, signal } from "@preact/signals-react";
import axios from "axios"


 export const token = signal(getTokenFromStorage());
 export const userInfo = signal(null);

 function getTokenFromStorage() {
    const t = sessionStorage.getItem('token')
    return t===null || t==='null' ? '' : t
}

 //effect runs always once in the beginning and then when needed
 effect(()=>{

    if(token.value.length === 0 ){
        sessionStorage.removeItem('token')
    } else {
        sessionStorage.setItem('token', token.value)
    }

    const conftoken = { 
        headers: {
            Authorization: 'Bearer ' + token.value
        }
    }
    //make request only if token has value
    if(token.value.length === 0 ) {
        userInfo.value = null
        return
    }
    //add token to .get using headers
    axios.get('http://localhost:3001/user', conftoken)
    .then(res => userInfo.value = res.data)
    .catch(error => console.log(error.message))
 })

