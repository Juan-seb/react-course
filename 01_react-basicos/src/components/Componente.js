import React, { Component } from 'react'
/* 
const Component = (props) => {
    return <h2>{props.msg}</h2>
} */

/* function Componente (props){
    return <h2>{props.msg}</h2>
} Componente con funcion declarada*/

class Componente extends Component {
     
    
    static defaultProps = {
        nombre: "Juan"
    }/*Puedo usar las default props sin necesidad de usar el constructor */
    render() {
        return (
            <div>
                <h2>{this.props.msg}</h2>
                <h2>{this.props.nombre}</h2>
            </div>
        )
    }
} /* Componete con clases */

export default Componente;