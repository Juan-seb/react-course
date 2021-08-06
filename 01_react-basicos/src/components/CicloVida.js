import React, { Component } from "react"

class Reloj extends Component {

    /* constructor (props){
        super(props)
    } */

    componentWillUnmount() {
        console.log(3, "El componente ha sido eliminado del DOM")
    }
    /*Metodo que se ejecuta cuando el componente ha sido removido del DOM, en este caso usamos 
    el renderizado condicional */

    render() {
        return <h3>{this.props.hora}</h3>
    }
}

export default class CicloVida extends Component {
    constructor(props) {
        super(props)
        console.log(0, "El componente se inicializa,aun No esta en el DOM")

        this.state = {
            hora: new Date().toLocaleTimeString(), /*Aqui me esta dando la hora local */
            visible: false
        }

        this.temporizador = null
        
    }

    componentDidMount() {
        console.log(1, 'El componente ya esta se encuentra en el DOM')
    }
    /*Metodo que se ejecuta cuando el componente ya se pinto en el Dom*/

    componentDidUpdate(prevProps, prevState) {
        console.log(2, "El estado o las props del componente han cambiado")
        console.log(prevProps)
        console.log(prevState)
    }
    /*Metodo que se ejecuta cuando el componente se ha repintado en el Dom porque cambio aldo de el */

    tictac = () => {
        this.temporizador = setInterval(() => {
            this.setState({
                hora: new Date().toLocaleTimeString()
            })
        }, 1000);
    }

    iniciar = () => {

        this.tictac();
        this.setState({
            visible : true
        })
        
    }

    detener = () => {
        clearInterval(this.temporizador)
        this.setState({
            visible : false
        })
        /*Actualizamos este estado para poder observar el componentWillUnmount */
    }

    render() {
        console.log(4, "El componente se dibuja o redibuja por algun cambio en el DOM")
        return (
            <>
                <h2>Ciclo de vida de los componentes de clase</h2>
                <h3>{this.state.visible && <Reloj hora={this.state.hora} /> /*Operador de cortocircuito, si
                 this.state.visible es true entonces va a pintar el componente*/}</h3>
                <button onClick={this.iniciar}>Iniciar</button>
                <button onClick={this.detener}>Detener</button>
            </>
        )
    }
}