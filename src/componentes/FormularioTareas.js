import React, { useState } from 'react';
import Header from './Header';
import ListaTareas from "./ListaTareas"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";


const FormularioTareas = ({
    filtroCompletadas, setFiltroCompletadas, 
    agregarTarea, tareas, editarTarea, eliminarTarea,
    completarTarea
}) => {
    const [texto, setTexto] = useState("");

    const manejarSubmit = (e) => {
        e.preventDefault();
        if (!texto.trim()) return;
        agregarTarea(texto);
        setTexto("");
    };

    return (
        <div className='contenedor'>
            <Header filtroCompletadas={filtroCompletadas} setFiltroCompletadas={setFiltroCompletadas}/>

            <form onSubmit={manejarSubmit}>
                <div className='entrada-tareas'>
                    <input
                        type='text'
                        placeholder='Escribe una tarea'
                        value={texto}
                        onChange={(e) => setTexto(e.target.value)}/>
                    <button type='submit'>
                        <FontAwesomeIcon icon={faPlusSquare} style={{color: '#80BE4E'}}
                            size='xl'/>
                    </button>
                </div>
            </form>

            <ListaTareas
                tareas={tareas}
                filtroCompletadas={filtroCompletadas}
                editarTarea={editarTarea}
                eliminarTarea={eliminarTarea}
                completarTarea={completarTarea}
            />
        </div>
    );
}

export default FormularioTareas;
