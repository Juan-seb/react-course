import { createContext, useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";

const CrudContext = createContext();

const CrudProvider = ({ children })=>{

    const [db, setDb] = useState(null);
    const [dataToEdit, setDataToEdit] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    let api = helpHttp();
    let url = 'http://localhost:5000/santos';
    
    useEffect(() => {
        setLoading(true)
        helpHttp().get(url).then(res => {
            
            if (!res.err) {
                setDb(res);
                setError(null);
            } else {
                setDb(null); /*Pasamos null para que unicamente se renderize el componente mensaje */
                setError(res);
            }
            setLoading(false);
        })

    }, [url])

    const createData = (data) => {
        data.id = Date.now();
        // Asignamos un id al nuevo obj, y luego vamos a hacer la peticion
        api.post(url,{
                body:data,
                headers: {
                    'Content-Type' : 'application/json', 
                }
            }).then(res => {
            console.log(res)
            if(!res.err){
                setDb([
                    ...db,res /*Actualiza la base de datos con lo que ya esta en la bd mas lo que hay en la rta */
                ])
            }else{
                setError(res)
            }
        })
    }
    const updateData = (data) => {
        let endpoint = `${url}/${data.id}`
        let options = {
            body:data,
            headers: {
                'Content-Type' : 'application/json', 
            }
        }
        api.put(endpoint,options).then(res => {
        console.log(res)
        if(!res.err){
            let newDb = db.map(el => data.id === el.id ? data : el) /*Mapear es para hacer cambios o aplicar cambios
            en los arreglos, en este caso si el id de la data es igual al del elemento entonces ese elemento va a tomar
            lo que hay en data sino seguira igual */
            setDb(newDb)
            /*Puedo mapear o puedo usar lo que me devuelve la res */
        }else{
            setError(res)
        }
    })
    }
    const deleteData = (id) => {
        let isDelete = window.confirm(`¿Estas seguro de eliminar el registro con el id ${id}?`)
        let endpoint = `${url}/${id}`
        
        let options = {
            headers: {
                'Content-Type' : 'application/json', 
            }
        }

        if (isDelete) {
            api.del(endpoint,options)
            .then(res => {
                console.log(res)
                if (!res.err) {
                    let newData = db.filter(el => el.id !== id);
                    setDb(newData)
                }else{
                    setError(res)
                }
            })
        }

    }

    const data = {dataToEdit,
            setDataToEdit,
            error,
            loading,
            db,
            createData,
            updateData,
            deleteData};

    return (
        <CrudContext.Provider value={data}>{children}</CrudContext.Provider>
    )
}

export {CrudProvider}
export default CrudContext