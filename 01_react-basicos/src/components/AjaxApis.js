import React, { Component } from 'react'

function Pokemon(props) {
    return (
        <>
            <figure>
                <img src = {props.pokemon.avatar} /*Url de la imagen del pokemon del api */ alt={props.pokemon.name} />
                <figcaption>{props.pokemon.name}</figcaption>
            </figure>
        </>
    )
}

export default class AjaxApis extends Component {
  
    state = {
        pokemons : []
    };

    componentDidMount(){
        let url = 'https://pokeapi.co/api/v2/pokemon/'

        fetch(url)/*Aqui me esta obteniendo los primeros pokemones */
        .then(res => res.ok ? res.json() : Promise.reject(res)) /*Aqui convertimos la pregunta a lenguaje js por medio del
        metodo .json() */
        .then(json => {
            //console.log(json);
            json.results.forEach(el => { /*Por cada pokemon que hay en results */
                fetch(el.url)/*Esta peticion es para obtener la lista de caracteristicas de cada pokemon
                Concatenamos peticion */
                .then(res=>res.ok?res.json() : Promise.reject(res))
                .then(json =>{
                    //console.log(json)
                    const pokemon = {
                        id: json.id, /*El ides para asignarla como key al elemento renderizado */
                        name: json.name,
                        avatar: json.sprites.front_default
                    }

                    const pokemons = [...this.state.pokemons,pokemon] /*Spread operator para unir al array */

                    this.setState({
                        pokemons /*Este es un shorthand de ES6 que me permite ahorrar el poner pokemons:pokemons */
                    })
                    
                })
            });
        }) /*Aqui ya hacemos la manipulacion de datos */
    }

    render(){
        return(
            <>
                <h2>Peticiones asincrones en componentes de clase</h2>
                <ol>
                    {
                        this.state.pokemons.length === 0 ? (<h3>Cargando...</h3>): /*Podemos renderizar esta palabra de cargando
                        mientras se completa la peticion y luego si renderizamos los pokemons */
                        this.state.pokemons.map(el=>(
                            <li key={el.id}><Pokemon pokemon = {el} /*Este pokemon se obtiene de la peticion*//></li>
                        ))
                        /* this.state.pokemons.map(el=>(
                            <Pokemon key = {el.id} name = {el.name} avatar = {el.avatar} />
                            Podemos hacer esto que es pasar como prop cada parte para el componente, o podemos pasar todo el
                            pokemon como hice arriba, en el componente lo saco y poner el componente en una etiqueta <li></li> 
                        )) */
                    }
                </ol>
            </>
        )
    }
} 