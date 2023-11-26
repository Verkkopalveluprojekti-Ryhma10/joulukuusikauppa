import { effect, signal } from "@preact/signals-react";
import axios from "axios"


 export const token = signal('');
 export const userInfo = signal(null);

 //effect runs always once in the beginning and then when needed
 effect(()=>{

    const conftoken = { 
        headers: {
            Authorization: 'Bearer ' + token.value
        }
    }
    //add token to .get using headers
    axios.get('http://localhost:3001/user', conftoken)

    //doesn´t log res.data yet..... !?
    .then(res => userInfo.value = res.data)
    .catch(error => console.log(error.message))
 })

