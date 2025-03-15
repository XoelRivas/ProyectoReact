import React, { useState } from 'react';
import FormularioTareas from './FormularioTareas';

function App() {
  const [filtroCompletadas, setFiltroCompletadas] = useState(false);
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (texto) => {
    setTareas([...tareas, {id: Date.now(), texto, completada: false}]);
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  const editarTarea = (id, nuevoTexto) => {
    setTareas(tareas.map((tarea) => (tarea.id === id ? {...tarea, texto: nuevoTexto} : tarea)));
  };

  const completarTarea = (id) => {
    setTareas(tareas.map((tarea) => (tarea.id === id ? {...tarea, completada: !tarea.completada} : tarea)));
  };

  return (
    <FormularioTareas
      filtroCompletadas={filtroCompletadas}
      setFiltroCompletadas={setFiltroCompletadas}
      agregarTarea={agregarTarea}
      tareas={tareas}
      editarTarea={editarTarea}
      eliminarTarea={eliminarTarea}
      completarTarea={completarTarea}/>
  );
}

export default App;
