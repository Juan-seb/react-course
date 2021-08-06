import React, { useContext } from 'react'
import CrudContext from '../context/CrudContext'
import CrudTableRow from './CrudTableRow'
import Message from './Message'

const CrudTable = () => {

    const {db} = useContext(CrudContext)
    /*The variable db contains the data of the request */
    return (
        <div>
            <h3>Tabla de datos</h3>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Constelacion</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        db.length > 0 ? 
                        (db.map((el) => (
                            <CrudTableRow key={el.id} el={el} 
                                
                            />
                        )))
                        :<Message msg = {"Ocurrio un error con la base de datos, comuniquese con soporte"} bgColor = {'#dc3545'}/>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CrudTable