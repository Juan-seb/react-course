import React, { useState, useEffect } from 'react'

export default function ScrollHooks() {

    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        /* console.log("Fase de actualizacion") */
        const detectarScroll = () => setScrollY(window.pageYOffset);

        window.addEventListener('scroll', detectarScroll)
        return () => {
            window.removeEventListener('scroll',detectarScroll)
            /* console.log("El scroll ya no esta") */
        }
    }, [scrollY]) /*Fase de actualizacion al poner [scrollY] lo que hay dentro del use efect se va a ejecutar 
    cuando haya un cambio en el estado scrollY*/

    useEffect(() => {
        /* console.log("Fase de actualizacion") */
    }) /*Fase de actualizacion siempre es mejor pasar [variables], esto lo recomienda react y es precisamente
    para definir cuando este useEffect se tiene que aplicar, si lo dejamos asi entonces siempre que haya un cambio en
    el componente se va a ejecutar.*/

    useEffect(() => {
        /* console.log("Fase de montaje") */
    }, []) /*Como pasamos el array vacio nos referimos unicamente a la fase de montaje */

    useEffect(() => {

        return () => {
            /* console.log("Fase de desmontaje") */
        }
    })/*Aqui nos referimos unicamente a la fase de desmontaje, aunque la podemos unir con la fase de actualizacion */


    return (
        <>
            <h2>Hooks - UseEffect y el ciclo de vida</h2>
            <p>Scroll Y del navegador {scrollY} px</p>
        </>
    )
}