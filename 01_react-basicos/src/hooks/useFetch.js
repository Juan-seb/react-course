import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {


        const getData = async (url) => {
            try {

                const res = await fetch(url)

                if (!res.ok) { /*Validamos si hay un error */
                    let errorMessage ={ /*Este es el objeto de error, aqui manejamos el error, este es el que se pasa al catch */
                        err : true,
                        status : res.status,
                        statusText : !res.statusText ? "Ocurrio un error" : res.statusText
                    }
                    throw errorMessage 
                }
                    
                const data = await res.json() 

                setIsPending(false) /*Actualizamos el estado de pendiente porque ya recibimos respuesta */
                setData(data) /*Actualizamos la data que vamos a enviar */
                setError({err:false}) /*Informamos que no hubo error */

            } catch (error) { /*Esta variable error es el objeto que definimos arriba */
                setError(error)
                
            }
        }

        getData(url)
    }, [url]) /*Este useEffect se ejecuta cuando cambie la url */


    return {
        data, isPending, error /*Como las variables del objeto se llaman igual solo la retorno asi por el shorthand 
        que nos da ES6 para evitar la redundancia como data : data */
    }
}