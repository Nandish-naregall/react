import React from "react";
import  { useState } from "react";

function NameChanger(){
const [name, setName] = useState("nagaraj")
const changeName = () => setName("")
 return (
        <div>
            <h2>Name: {name}</h2>
            <button onClick={changeName}>change Name </button>
        
        </div>
    )
}

export default NameChanger;
