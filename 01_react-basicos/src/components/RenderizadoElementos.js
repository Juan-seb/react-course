import React, { Component } from 'react'
import data from '../helpers/data.json'

function ElementoLista(props) {
    return (
        <li>
            <a href = {props.element.web} target="_blank" rel="noreferrer">
                {props.element.name}
            </a>
        </li>
    )
}

export default class RenderizadoCondicional extends Component {

    constructor(props) {
        super(props)

        this.state = {
            seasons: ["Primavera", "Verano", "Otoño", "Invierno"]
        }
    }

    render() {
        /* console.log(data) */
        /*React me permite importar archivos json y usarlos sin necesidad de hacer parser o la peticion */
        return (

            <div>
                <h2>Renderizado de Elementos</h2>
                <h3>Estaciones del año</h3>
                <ol>
                    {
                        /* this.state.seasons.forEach((el, index) => (
                            <li key={index}>{el}</li>
                        )) El for each no se usa para renderizar las listas, no sirve*/
                        this.state.seasons.map((el,index) => (
                            <li key={index}>{el}</li>
                        ))
                    }
                </ol>
                <h3>Frameworks frontend Javascript</h3>
                <ul>
                    {
                        data.framewors.map((el) => (
                            <ElementoLista key = {el.id} element = {el}/> /* React me permite renderizar tambien componentes
                            de esta manera puedo ser mas recursivo si tengo que usar muchas veces para varias listas 
                            en distintos componentes, las props de este elemento van a ser el objeto correspondiente 
                            dentro del arreglo de frameworks*/
                        ))
                    }
                </ul>
            </div>
        )
    }
}