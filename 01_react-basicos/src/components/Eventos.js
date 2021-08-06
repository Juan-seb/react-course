import React, { Component } from 'react'

export class EventosES6 extends Component {
    /*Esta es la forma sin las property initializer */
    constructor(props) {
        super(props)

        this.state = {
            contador: 0
        }

        this.sumar = this.sumar.bind(this)
        this.restar = this.restar.bind(this) /*Recordar siempre enlazar los contextos */
    }

    sumar(e) {
        console.log(e.target)
        console.log("Sumando")
        console.log(this)
        this.setState({
            contador: this.state.contador + 1, /*No puedo poner ++, porque lo que hace es obtener y luego le suma 1 */
        })
    }


    restar(e, valor) {
        console.log(e.target)
        console.log("Restando")
        console.log(this)
        this.setState({
            contador: this.state.contador - valor, /*No puedo poner --, porque lo que hace es obtener y luego le resta 1 */
        })
    }

    render() {
        return (
            <div>
                <h2>Eventos en componentes de clase ES6</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={(e) => this.restar(e, 5)}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>

        )
    }
}

export class EventosES7 extends Component {
    /*Componente con property initializer */

    /*No necesito el constructor para utilizar el estado */
    state = {
        contador: 0
    }

    /*Con arrow functions no necesito hacer el bindeo directamente el contexto del metodo pasa a ser el del componente */

    sumar = (e) => {
        console.log(e.target)
        console.log("Sumando")
        console.log(this)
        this.setState({
            contador: this.state.contador + 1,
        })
    }

    restar = (e) => {
        console.log(e.target)
        console.log("Restar")
        console.log(this)
        this.setState({
            contador: this.state.contador - 1,
        })
    }

    render() {
        return (
            <div>
                <h2>Eventos en componentes de clase ES7</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        )
    }
}

/* function Boton(props) {
    return (
        <button onClick={props.myOnClick}>Boton hecho componente</button>
    )
}
 */

/* const Boton = (props) => <button onClick={props.myOnClick}>Boton hecho componente</button> 
Componente con arrow function el return es implicito porque es solo una linea*/

const Boton = ({ myOnClick }) => <button onClick={myOnClick}>Boton hecho componente</button>
/*Puedo utilizar la destructuracion {myOnClick} para llamar solo a la prop que necesito y no a todas */

export class MasSobreEventos extends Component {

    state = {
        contador: 0
    }

    handleClick = (e, mensaje) => {
        console.log(e)
        console.log(e.target)
        console.log(e.nativeEvent)
        console.log(e.nativeEvent.target)
        console.log(mensaje)
        this.setState({
            contador: this.state.contador + 1
        })
    }

    render() {
        return (
            <div>
                <h2>Mas sobre eventos</h2>
                <button onClick={(e) => /*Cedemos el control del evento a la arrow function para poder pasar parametros */
                    this.handleClick(e, "Hola pasando parametros desde un evento")
                }>Saludar</button>
                {/*Evento personalizado */}
                {/* <Boton onClick={(e) => 
                    this.handleClick(e,"Hola pasando parametros desde un evento")
                }/> No podemos hacer esto con un componente, que es lo mismo que un elemento React*/}
                <Boton myOnClick={(e) => /*Cedemos el control del evento a la arrow function para poder pasar parametros */
                    this.handleClick(e, "Hola pasando parametros desde un evento")
                } />
            </div>
        )
    }
}