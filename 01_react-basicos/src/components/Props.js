import React from 'react';
import PropTypes from 'prop-types'

export default function Props(props) {
    return (
        <div>
            <h2>Propiedades</h2>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.booleano ? "Verdadero" : "False"}</li>
                <li>{props.arreglo.join()}</li>
                <li>{props.objeto.nombre}</li>
                <li>{props.elementoReact}</li>
                <li>{props.funcion(5)}</li>
                <li>{props.arreglo.map(props.funcion).join()}</li>
                <li>{props.componenteReact}</li>
            </ul>
        </div>
    );
};

Props.defaultProps = {/*Props por defecto */
    porDefecto: ["JUANITA", "Milena"]
}

Props.propTypes = {/*Tipo prop type para tipar algunas props*/ 
    cadena : PropTypes.string
}