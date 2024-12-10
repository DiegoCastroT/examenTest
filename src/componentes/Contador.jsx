import React from "react";

import {useState} from "react";

const Contador = () =>{

    const [count, setCount] = useState(0);

    const addContador = ()=>{
        setCount(count + 1);
    }

    const removeContador = ()=>{
        setCount(count - 1);
    }
    return (
        <div>
        <button onClick={addContador}>Add</button>
        <button onClick={removeContador}>Remove</button>
         <p>{count}</p>
        </div>
    )

}

export default Contador;