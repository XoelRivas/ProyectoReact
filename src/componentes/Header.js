import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Header = ({filtroCompletadas, setFiltroCompletadas}) => {
    return (
        <header>
            <h1>Lista de Tareas</h1>
            <button className='btn-filtro' onClick={() => setFiltroCompletadas(!filtroCompletadas)}>
                {filtroCompletadas ? "Mostrar completadas" : "No mostrar completadas"}
                <FontAwesomeIcon icon={filtroCompletadas ? faEye : faEyeSlash}/>
            </button>
        </header>
    )
}

export default Header;