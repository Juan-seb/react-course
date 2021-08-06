import React from 'react';
import { useFetch } from '../hooks/useFetch'

export default function HooksPersonalizados() {

    let url = 'https://pokeapi.co/api/v2/pokemon/'
    let { data, isPending, error } = useFetch(url)

    return (
        <>
            <h2>Hooks Personalizados</h2>
            <h3>{JSON.stringify(isPending)}</h3>
            <h3>{JSON.stringify(error) /*Tengo que utilizar el stringify para que no haya errores mostrando el obj error */}</h3>
            <h3>
                <pre style={{
                    whiteSpace: 'pre-wrap',
                    display : 'none'
                }}>
                    {JSON.stringify(data)}
                </pre>
            </h3>
        </>
    )
}