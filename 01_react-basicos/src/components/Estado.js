import React, { Component } from 'react'

function EstadoAHijo(props) {
    return (
        <div>
            <h3>{props.contadorHijo}</h3>
        </div>
    )
    /* Componente funcional que recibe el estado del componente padre por medio de una prop */
}

export default class Estado extends Component {

    constructor(props) {
        super(props)
        this.state = {
            contador: 0
        }

        /* setInterval(() => {
            this.setState({
                contador: this.state.contador + 1
            })
        }, 1000); */

    }

    static defaultProps = {
        nombre: "Juan",
        apellido : "Angulo" /*Props por defecto metodo para componentes en clases */
    }


    render() {
        return (
            <div>
                <h2>Estado</h2>
                <p>{this.state.contador}</p>
                <p>{this.props.nombre}</p>
                <p>{this.props.apellido}</p>
                <EstadoAHijo contadorHijo={this.state.contador} /> 
                {/*Paso del estado del componente padre al hijo por medio de una prop */}
            </div>
        )
    }
}
/* 
Estado.defaultProps = {
    apellido: "Angulo"
} Props por defecto metodo normal */