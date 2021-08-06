import React from 'react'
import CrudTableRow from './CrudTableRow'
import Message from './Message'

const CrudTable = ({ data, setDataToEdit, deleteData }) => {
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
                        data.length > 0 ? 
                        (data.map((el) => (
                            <CrudTableRow key={el.id} el={el} 
                                setDataToEdit = {setDataToEdit} 
                                deleteData = {deleteData} 
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