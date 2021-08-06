import React, { useState } from 'react';

const initialOperation = {
    tipoUno: "Decimal",
    tipoDos: "Decimal",
    valorUno: "",
    valorDos: ""
};

const CalcApp = () => {

    const [operacion, setOperacion] = useState(initialOperation);

    const handleChange = (e) => {
        setOperacion({
            ...operacion,
            [e.target.name]: e.target.value,
            valorUno: "",
            valorDos: "",
        })
    }

    const handleConvert = () => {

        if (operacion.tipoUno === "Decimal" && operacion.tipoDos === "Binario") {
            setOperacion({
                ...operacion,
                valorDos: operacion.valorUno.toString(2)
            })
        }
        if (operacion.tipoUno === "Decimal" && operacion.tipoDos === "Octal") {
            setOperacion({
                ...operacion,
                valorDos: operacion.valorUno.toString(8)
            })
        }
        if (operacion.tipoUno === "Decimal" && operacion.tipoDos === "Hexadecimal") {
            setOperacion({
                ...operacion,
                valorDos: operacion.valorUno.toString(16)
            })
        }
        if (operacion.tipoUno === "Binario" && operacion.tipoDos === "Decimal") {
            setOperacion({
                ...operacion,
                valorDos: parseInt(operacion.valorUno,2)
            })
        }
        if (operacion.tipoUno === "Binario" && operacion.tipoDos === "Octal") {
            setOperacion({
                ...operacion,
                valorDos: parseInt(operacion.valorUno,2).toString(8)
            })
        }
        if (operacion.tipoUno === "Binario" && operacion.tipoDos === "Hexadecimal") {
            setOperacion({
                ...operacion,
                valorDos: parseInt(operacion.valorUno,2).toString(16)
            })
        }
        if (operacion.tipoUno === "Octal" && operacion.tipoDos === "Decimal") {
            setOperacion({
                ...operacion,
                valorDos: parseInt(operacion.valorUno, 8).toString(10)
            })
        }
        if (operacion.tipoUno === "Octal" && operacion.tipoDos === "Binario") {
            setOperacion({
                ...operacion,
                valorDos: parseInt(operacion.valorUno, 8).toString(2)
            })
        }
        if (operacion.tipoUno === "Octal" && operacion.tipoDos === "Hexadecimal") {
            setOperacion({
                ...operacion,
                valorDos: parseInt(operacion.valorUno, 8).toString(16)
            })
        }
        if (operacion.tipoUno === "Hexadecimal" && operacion.tipoDos === "Decimal") {
            setOperacion({
                ...operacion,
                valorDos: parseInt(operacion.valorUno, 16).toString(10)
            })
        }
        if (operacion.tipoUno === "Hexadecimal" && operacion.tipoDos === "Binario") {
            setOperacion({
                ...operacion,
                valorDos: parseInt(operacion.valorUno, 16).toString(2)
            })
        }
        if (operacion.tipoUno === "Hexadecimal" && operacion.tipoDos === "Octal") {
            setOperacion({
                ...operacion,
                valorDos: parseInt(operacion.valorUno, 16).toString(8)
            })
        }
    }

    return (
        <div className="calc">
            <h2 className="title">Conversor de bases</h2>
            <section className="grid">
                <div>
                    <select onChange={handleChange} name="tipoUno" className="selectUno">
                        <option value="Decimal">Decimal</option>
                        <option value="Binario">Binario</option>
                        <option value="Octal">Octal</option>
                        <option value="Hexadecimal">Hexadecimal</option>
                    </select>
                    <label htmlFor="valorUno">Numero a convertir:</label>
                    <input type="text"
                        onChange={(e) => {
                            let base = 0;
                            if(operacion.tipoUno === "Binario"){
                                base = null
                            }else{
                                operacion.tipoUno === "Hexadecimal"?base = null:base=10
                            }

                            setOperacion({
                                ...operacion,
                                valorUno: base?parseInt(e.target.value, base):e.target.value
                            });
                        }}
                        name="valorUno"
                        value={operacion.valorUno}
                    />
                </div>
                <div>
                    <select onChange={handleChange} name="tipoDos" className="selectDos">
                        <option value="Decimal">Decimal</option>
                        <option value="Binario">Binario</option>
                        <option value="Octal">Octal</option>
                        <option value="Hexadecimal">Hexadecimal</option>

                    </select>
                    <label htmlFor="valorDos">Resultado:</label>
                    <input type="text" onChange={handleChange} value={operacion.valorDos} name="valorDos" />
                </div>
            </section>
            <button onClick={handleConvert}>Convertir</button>
        </div>
    )
}

export default CalcApp