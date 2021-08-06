import React, { useState, useEffect } from 'react';

function Pokemon(props) {
    return (
        <>
             <figure>
                <img src = {props.pokemon.img} /*Url de la imagen del pokemon del api */ alt={props.pokemon.name} />
                <figcaption>{props.pokemon.name}</figcaption>
            </figure>
        </>
    )
}
let url = 'https://pokeapi.co/api/v2/pokemon/'

export default function AjaxHooks() {
    
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        
        const getPokemons = async () => {
            const res = await fetch(url),
                json = await res.json()

            console.log(json)

            json.results.forEach(async (element) => {

                const resPokemon = await fetch(element.url),
                    jsonPokemon = await resPokemon.json()

                const pokemon = {
                    id: jsonPokemon.id,
                    name: jsonPokemon.name,
                    img: jsonPokemon.sprites.front_default
                }

                setPokemons((pokemons) => [...pokemons, pokemon])
            });

        }

        getPokemons()
        /* fetch(url).
            then(res => res.ok ? res.json() : Promise.reject(res)).
            then(json => {
                json.results.forEach(element => {
                    fetch(element.url).
                        then(res => res.ok ? res.json() : Promise.reject(res)).
                        then(json => { 
                            console.log(json) 
                            const pokemon = {
                                id: json.id,
                                name: json.name,
                                img: json.sprites.front_default
                            }

                            setPokemons((pokemons) => [...pokemons, pokemon])
                        })
                });
            }) */

    }, []) /*Va vacio porque queremos hacer la peticion en el momento en que se monta el componente */

    return (
        <>
            <h2>Peticiones asincronas con Hooks</h2>
            <ol>
                {
                    pokemons.length === 0 ? (<h3>Cargando datos</h3>) :
                        pokemons.map(el => (
                            <li key={el.id}><Pokemon pokemon={el} /*Este pokemon se obtiene de la peticion*/ /></li>
                        ))
                }
            </ol>
        </>
    )
}