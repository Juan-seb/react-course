import React from 'react'
import './Loader.css';
/*Componente que se encargara de renderizar el loader cuando se tengan distintas peticiones */
const Loader = () => {
    return (
        <div>   
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loader
