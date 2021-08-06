import React, { useState } from 'react';
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'

const initialDB = [
    {
        id: 1,
        name: "Seiya",
        constellation: "Pegaso"
    },
    {
        id: 2,
        name: "Shiryu",
        constellation: "Dragon"
    },
    {
        id: 3,
        name: "Hyoga",
        constellation: "Cisne"
    },
    {
        id: 4,
        name: "Shun",
        constellation: "Andromeda"
    },
    {
        id: 5,
        name: "Ikki",
        constellation: "Fenix"
    }
]

const CruddApp = () => {
    const [db, setDb] = useState(initialDB)
    const [dataToEdit, setDataToEdit] = useState(null)

    const createData = (dat) => {
        dat.id = Date.now()
        console.log(db)
        setDb([
            ...db, dat
        ])
    }
    const updateData = (data) => {
        let newDb = db.map(el => data.id === el.id ? data : el)
        setDb(newDb)
    }
    const deleteData = (id) => {
        let isDelete = window.confirm(`¿Estas seguro de eliminar el registro con el id ${id}?`)

        if (isDelete) {
            let newData = db.filter(el => el.id !== id);
            setDb(newData);
        }

    }

    return (
        <div>
            <h2>Crudd APP</h2>
            <article className='grid-1-2'>
                <CrudForm createData={createData}
                    updateData={updateData}
                    dataToEdit={dataToEdit}
                    setDataToEdit={setDataToEdit}
                />
                <CrudTable data={db}
                    setDataToEdit={setDataToEdit}
                    deleteData={deleteData} /*setDataToEdit es para actualizar el state */
                />
            </article>

        </div>
    )
}

export default CruddApp
