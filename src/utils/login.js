import React,{useState} from 'react'
export default function test() {
    const [name, setName] = useState("");
    const [surname, setSurname] =useState("");
    const [adress, setAdress] =useState("");
    
    const handleChange = () => { 
    return (
        <div>
            <form>
                <input value={name} onChange={handleChange}/>
                <input value={surname} onChange={handleChange}/>
                <input value={adress} onChange={handleChange} />

            </form>
        </div>
    )};
}