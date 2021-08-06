import React, { useState, useEffect, useReducer } from 'react';
import { TYPES } from '../actions/crudActions';
import { helpHttp } from '../helpers/helpHttp';
import { crudInitialState, crudReducer } from '../reducers/crudReducer';
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'
import Loader from './Loader';
import Message from './Message';

const CrudApi = () => {

    //const [db, setDb] = useState(null);
    const [state, dispatch] = useReducer(crudReducer, crudInitialState)
    const { db } = state;

    const [dataToEdit, setDataToEdit] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    let api = helpHttp();
    let url = 'http://localhost:5000/santos';

    useEffect(() => {
        setLoading(true)
        helpHttp().get(url).then(res => {

            if (!res.err) {
                /* setDb(res); */
                dispatch({ type: TYPES.READ_ALL_DATA, payload: res })
                setError(null);
            } else {
                /* setDb(null); */ /*Pasamos null para que unicamente se renderize el componente mensaje */
                dispatch({ type: TYPES.NO_DATA })
                setError(res);
            }
            setLoading(false);
        })

    }, [url])

    const createData = (data) => {
        data.id = Date.now();
        // Asignamos un id al nuevo obj, y luego vamos a hacer la peticion
        api.post(url, {
            body: data,
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res => {

            if (!res.err) {
                /*Actualiza la base de datos con lo que ya esta en la bd mas lo que hay en la rta */
                /* setDb([
                    ...db, res 
                ]) */
                dispatch({ type: TYPES.CREATE_DATA, payload: res })
            } else {
                setError(res)
            }
        })
    }

    const updateData = (data) => {
        let endpoint = `${url}/${data.id}`
        let options = {
            body: data,
            headers: {
                'Content-Type': 'application/json',
            }
        }
        api.put(endpoint, options).then(res => {

            if (!res.err) {
                dispatch({ type: TYPES.UPDATE_DATA, payload: data })
                /* let newDb = db.map(el => data.id === el.id ? data : el) */ /*Mapear es para hacer cambios o aplicar cambios
            en los arreglos, en este caso si el id de la data es igual al del elemento entonces ese elemento va a tomar
            lo que hay en data sino seguira igual */
                /* setDb(newDb) */
                /*Puedo mapear o puedo usar lo que me devuelve la res */
            } else {
                setError(res)
            }
        })
    }
    const deleteData = (id) => {
        let isDelete = window.confirm(`¿Estas seguro de eliminar el registro con el id ${id}?`)
        let endpoint = `${url}/${id}`

        let options = {
            headers: {
                'Content-Type': 'application/json',
            }
        }

        if (isDelete) {
            api.del(endpoint, options)
                .then(res => {
                    
                    if (!res.err) {
                        dispatch({ type: TYPES.DELETE_DATA, payload: id })
                        //let newData = db.filter(el => el.id !== id);
                        /* setDb(newData) */
                    } else {
                        setError(res)
                    }
                })
        }

    }

    return (
        <div>
            <h2>Crudd Api</h2>
            <article className='grid-1-2'>
                <CrudForm createData={createData}
                    updateData={updateData}
                    dataToEdit={dataToEdit}
                    setDataToEdit={setDataToEdit}
                />
                {loading && <Loader />}
                {error && <Message msg={`Error: ${error.status} -> ${error.statusText}`} bgColor='#dc3545' />}

                {db && /*Si la db tiene algo se va a renderizar la crud table */
                    <CrudTable data={db}
                        setDataToEdit={setDataToEdit}
                        deleteData={deleteData}
                    /*setDataToEdit es para actualizar el state */
                    />}

            </article>
        </div>
    )
}

export default CrudApi
