import { useState, useEffect } from 'react'

export const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        
        const controller = new AbortController();
        const signal = controller.signal;

        const fetchData = async () => {
            setLoading(true);

            try {
                const res = await fetch(url,{signal});

                if(!res.ok){
                    let err = new Error("Error en la peticion Fetch");
                    err.status = res.status || "00";
                    err.statusText = res.statusText || "Ocurrio un error";
                    throw err;
                }

                const json = await res.json();

                if (!signal.aborted) {
                    setData(json);
                    setError(null); /*Actualizamos a nulo por si otras peticiones han dejado basura en este state */
                }
            } catch (error) {
                if (!signal.aborted) {
                    setData(null);
                    setError(error)
                }
            }finally{
                setLoading(false);                
            }
        }

        fetchData();

        return () => controller.abort();

    }, [url])

    return {data,error,loading};
}
