import React, { useState, useEffect } from 'react';

let temporizador = null

function Reloj({ hora }) {
    
    useEffect(() => {
        console.log("El componente ha sido montado")

        
        return () => {
            clearInterval(temporizador)
            console.log("Deteniendo, el componente fue eliminado del Dom")
        }
    },[]) /*El array vacio es equivalente a la fase de montado y desmontado, lo que hay en el return se 
    ejecutara una vez que el elemento se vaya a eliminar del DOM */
    
    return <h3>{hora}</h3>;
    
    
}

export default function RelojHooks() {
    const [reloj, setReloj] = useState(new Date().toLocaleTimeString())
    const [visible, setVisible] = useState(false)
    
    useEffect(() => {
        
        if (visible) {
            temporizador = setInterval(() => {
                setReloj(new Date().toLocaleTimeString())
            }, 1000);
        }

    }, [visible]) /*Es importante tener en cuenta que como adentro voy a iniciar un interval es mejor que observe la
    variable visible para que solo lo inicie una vez, esto requiere memoria */

    return (
        <>
            <h2>Reloj con Hooks</h2>
            <h3>{visible ? <Reloj hora={reloj} /> : null}</h3>
            <button onClick={() => setVisible(true)}>Iniciar</button>
            <button onClick={() => setVisible(false)}>Detener todo</button>
        </>
    )
}