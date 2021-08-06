import React, { Component } from 'react'

export default class Padre extends Component {

    state = {
        contador: 0
    }

    incrementarContador = (e) => {
        this.setState({
            contador: this.state.contador + 1
        })
    }

    render() {
        return (
            <>
                <h2>Comuncacion entre componentes</h2>
                <p>Contador<b> {this.state.contador}</b></p>
                <Hijo
                    mensaje="Mensaje para el hijo 1"
                /*Comunicacion de padre a hijo, como vemos el componente padre les esta mandando el mensaje por medio de las prosp */
                />
                <Hijo
                    mensaje="Mensaje para el hijo 2"
                    incrementarContador={this.incrementarContador} 
                    /*Dado que le pasamos la funcion como prop de esta manera podemos afectar el estado del 
                    componente padre desde el componente hijo.  Solo se renderiza el componente y no toda la pagina */
                />

            </>)
    }
}

function Hijo(props) {
    return (
        <>
            <h3>{props.mensaje}</h3>
            <button onClick={props.incrementarContador}>+</button>
        </>
    )
}