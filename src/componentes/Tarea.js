import React, {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faSquare, faSquareCheck, faTrash } from "@fortawesome/free-solid-svg-icons";

const Tarea = ({tarea, editarTarea, eliminarTarea, completarTarea}) => {
    const [modoEdicion, setModoEdicion] = useState(false);
    const [nuevoTexto, setNuevoTexto] = useState(tarea.texto);

    const manejarActualizar = () => {
        if (!nuevoTexto.trim()) return;
        editarTarea(tarea.id, nuevoTexto);
        setModoEdicion(false);
    };

    return (
        <div 
            className={`tarea ${modoEdicion ? "modo-edicion" : ""}`}
            style={{backgroundColor: tarea.completada ? "#F3F3F3" : "white"}}>
            <div className='checkbox-y-tarea'>
                <FontAwesomeIcon
                    icon={tarea.completada ? faSquareCheck : faSquare}
                    size='xl'
                    color='#4B4B4B'
                    className='checkbox-icon'
                    onClick={() => completarTarea(tarea.id)}/>

                {modoEdicion ? (
                    <input
                        type='text'
                        value={nuevoTexto}
                        onChange={(e) => setNuevoTexto(e.target.value)}/>
                ) : (
                    <span style={{textDecoration: tarea.completada ? "line-through" : "none"}}>
                        {tarea.texto}
                    </span>
                )}
            </div>

            <div className='botones'>
                {modoEdicion && (
                    <button className="btn-actualizar" onClick={manejarActualizar}>
                        Actualizar
                    </button>
                )}
                <button className="btn-editar" onClick={() => setModoEdicion(true)}>
                    <FontAwesomeIcon icon={faEdit} size='lg'/>
                </button>
                <button className="btn-eliminar" onClick={() => eliminarTarea(tarea.id)}>
                    <FontAwesomeIcon icon={faTrash} size='lg'/>
                </button>
            </div>
        </div>
    );
};


export default Tarea;