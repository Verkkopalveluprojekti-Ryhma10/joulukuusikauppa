import React,{useState} from 'react'
export default function test() {
    const [name, setName] = useState("");
    const [surname, setSurname] =useState("");
    const [adress, setAdress] =useState("");
    
    const handleChange = () => { 
    return (
        <div>
            <form>
                <label >
                    Nimi:
                    <input value={name} onChange={handleChange}/>
                </label>
                <label>
                    Sukunimi:
                    <input value={surname} onChange={handleChange}/>
                </label>
                <label>
                    Osoite:
                    <input value={adress} onChange={handleChange}/>
                </label>
            </form>
        </div>
    )};
}