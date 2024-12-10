import React from "react";
import '../App.css'

const Coches = () => {

    const vehiculos = [
        {Matricula: '1425BTY', Marca: 'Peugeot', Modelo: '3008', Tipo: 'Híbrido'},
        {Matricula: '1762MNY', Marca: 'Mercedes', Modelo: 'EQS', Tipo: 'Diesel'},
        {Matricula: '9882TPK', Marca: 'Renault', Modelo: '4 E-Tech', Tipo: 'Eléctrico'},
        {Matricula: '6634TRV', Marca: 'Volkswagen', Modelo: 'Golf', Tipo: 'Gasolina'},
        {Matricula: '2285RPL', Marca: 'Toyota', Modelo: 'RAV4', Tipo: 'Híbrido'},
        {Matricula: '1782PRT', Marca: 'Peugeot', Modelo: '5008', Tipo: 'Diesel'}
    ];

    return (
        <div>
            {vehiculos.map((vehiculo, index) => (
                <div key={index} className="StyledTextComponent">
                    {vehiculo.Matricula} - {vehiculo.Modelo} {vehiculo.Marca} {vehiculo.Tipo.toLowerCase()}
                </div>
            ))}
        </div>
    )
}

export default Coches;