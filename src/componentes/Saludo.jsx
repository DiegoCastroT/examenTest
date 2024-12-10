import React from 'react';

const Saludo = ({ saludo }) => {
    if (saludo) {
        return (
            <h1>Hola, este es el saludo de bienvenida</h1>
        )
    } else {
        return (
            <h1>Adiós, este es el saludo de despedida</h1>
        )
    }
}

export default Saludo;
