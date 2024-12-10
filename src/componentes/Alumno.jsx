import React, { useState, useEffect } from "react";

const Alumno = () => {
    const [alumnos, setAlumnos] = useState([]);
    const [notas, setNotas] = useState([]);
    const [promedio, setPromedio] = useState(null);
    const [filtro, setFiltro] = useState(-1);
    const [textoFiltro, setTextoFiltro] = useState("");

    useEffect(() => {
        fetch('/alumnos.json')
            .then(res => res.json())
            .then(data => setAlumnos(data.alumnos));
    }, []);

    const getNotas = (alumno) => {
        const notasAlumno = [];
        for (let asignatura in alumno.asignaturas) {
            const asignaturaData = alumno.asignaturas[asignatura];
            notasAlumno.push({
                asignatura,
                primeraEvaluacion: asignaturaData.primera_evaluacion,
                segundaEvaluacion: asignaturaData.segunda_evaluacion,
                terceraEvaluacion: asignaturaData.tercera_evaluacion,
                promedio: asignaturaData.promedio,
            });
        }
        setNotas(notasAlumno);
    };

    const getPromedio = (alumno) => {
        let total = 0;
        let count = 0;
        for (let asignatura in alumno.asignaturas) {
            total += alumno.asignaturas[asignatura].promedio;
            count++;
        }
        setPromedio(total / count);
    };

    const handleFiltroChange = (event) => {
        setFiltro(Number(event.target.value));
    };

    const handleTextoFiltroChange = (event) => {
        setTextoFiltro(event.target.value);
    };

    const alumnosFiltrados
        = alumnos.filter(alumno => alumno.nombre.includes(textoFiltro)).sort((a, b) => {
            if (filtro === 0) {
                return a.nombre.localeCompare(b.nombre);
            } else if (filtro === 1) {
                const promedioA = Object.values(a.asignaturas)
                    .reduce((acc, asignatura) => acc + (
                        (asignatura.primera_evaluacion + signatura.segunda_evaluacion
                            + asignatura.tercera_evaluacion) / 3)
                    ) / 3;
                const promedioB = Object.values(b.asignaturas)
                    .reduce((acc, asignatura) => acc + (
                        (asignatura.primera_evaluacion + asignatura.segunda_evaluacion +
                            asignatura.tercera_evaluacion) / 3)
                    ) / 3;
                return promedioA - promedioB;
            }
            return 0;
        });

    return (
        <div>
            <h2>Buscador de alumnos</h2>
            <input
                type="text"
                placeholder="Buscar alumno..."
                value={textoFiltro}
                onChange={handleTextoFiltroChange}
            />

            <ul>
                {alumnosFiltrados.map((alumno, index) => (
                    <li key={index}>
                        <h2 onClick={() => getNotas(alumno)}>{alumno.nombre}</h2>
                        <button onClick={() => {
                            getPromedio(alumno);
                            getNotas(alumno);
                        }}>Calcular media
                        </button>
                    </li>
                ))}
            </ul>

            {promedio !== null && (
                <div>
                    <h3>Promedio general: {promedio}</h3>
                </div>
            )}

            <div>
                <select onChange={handleFiltroChange}>
                    <option value={0}>Orden alfabético</option>
                    <option value={1}>Orden por promedio</option>
                </select>
            </div>

            <div>
                <ul>
                    {notas.map((nota, index) => (
                        <li key={index}>
                            <p>Asignatura: {nota.asignatura}</p>
                            <p>Primera evaluación: {nota.primeraEvaluacion}</p>
                            <p>Segunda evaluación: {nota.segundaEvaluacion}</p>
                            <p>Tercera evaluación: {nota.terceraEvaluacion}</p>
                            <p>Promedio: {nota.promedio}</p>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
};

export default Alumno;
