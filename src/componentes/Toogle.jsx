import React from "react";
import {useState} from "react";

const Toogle = () => {

    const [visible, setVisible] = useState(false)

    let content

    if(visible){
        content = "Hola"
    }else{
        content = null
    }

    const handleButton = () => {
        if(!visible){
            setVisible(true)
        }else {
            setVisible(false)
        }
    }


    return (
        <div>
            <p>{content}</p>
            <button onClick={handleButton}>Boton</button>
        </div>
    )

}

export default Toogle;