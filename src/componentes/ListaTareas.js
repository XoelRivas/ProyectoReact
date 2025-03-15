import React from 'react';
import Tarea from './Tarea';

const ListaTareas = ({tareas, filtroCompletadas, editarTarea, 
    eliminarTarea, completarTarea}) => {
        return (
            <div>
                {tareas
                    .filter((tarea) => !filtroCompletadas || !tarea.completada)
                    .map((tarea) => (
                        <Tarea
                            key={tarea.id}
                            tarea={tarea}
                            editarTarea={editarTarea}
                            eliminarTarea={eliminarTarea}
                            completarTarea={completarTarea}/>
                    ))}
            </div>
        );
};

export default ListaTareas;