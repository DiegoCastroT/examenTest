import React, { useState } from 'react';

const Form = () => {

    const [name, setName] = useState(""); // Estado para el input
    const [submittedName, setSubmittedName] = useState(""); // Estado para el nombre enviado

    const handleSubmit = (event) => {
        event.preventDefault(); // Evitar recargar la página
        setSubmittedName(name); // Almacenar el nombre enviado
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Nombre:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <button type="submit">Enviar</button>
            </form>
         <p>Bienvenido {submittedName}</p>
        </div>
    );
};

export default Form;
