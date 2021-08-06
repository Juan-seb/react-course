import React, { useState } from 'react';

/* export default function Formularios() {

    const [nombre, setNombre] = useState("")
    const [sabor, setSabor] = useState("")
    const [lenguaje, setLenguaje] = useState("")
    const [terminos, setTerminos] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        alert("El formulario se ha enviado")
    }

    return (
        <>
            <h2>Formularios</h2>
            <form onSubmit = {handleSubmit}>
                <label htmlFor="nombre" >Nombre:</label>
                <input type="text"
                    id="nombre"
                    name="nombre"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
                <p>Elige tu sabor favorito</p>
                <input
                    type='radio'
                    id="Vanilla"
                    name="sabor"
                    value="Vanilla"
                    onChange={e => setSabor(e.target.value)}
                />
                <label htmlFor="Vanilla">Vanilla Js: </label>
                <br />
                <input
                    type='radio'
                    id="React"
                    value="React"
                    name="sabor"
                    onChange={e => setSabor(e.target.value)}
                />
                <label htmlFor="React">React JS: </label>
                <br />
                <input
                    type='radio'
                    id="angular"
                    value="Angular"
                    name="sabor"
                    onChange={e => setSabor(e.target.value)}
                />
                <label htmlFor="angular">Angular JS: </label>
                <br />
                <label htmlFor="vue">Vue JS: </label>
                <input
                    type='radio'
                    id="vue"
                    value="Vue"
                    name="sabor"
                    onChange={e => setSabor(e.target.value)}
                />
                <br />
                <br />
                <p>Elige tu lenguaje de programacion favorito</p>
                <select name="lenguaje" 
                    onChange={e => setLenguaje(e.target.value)}
                    defaultValue = {""}    
                >   
                    <option value="" > ------ </option>
                    <option value="js" > JavaScript </option>
                    <option value="php" > PHP </option>
                    <option value="py" > Python </option>
                    <option value="go" > GO </option>
                    <option value="rb" > Ruby </option>
                </select>
                <br />
                <label htmlFor = "terminos">Acepto terminos y condiciones</label>
                <input 
                    type='checkbox' 
                    id ="terminos" 
                    name = "terminos" 
                    onChange = {e => setTerminos(e.target.checked)}    
                />
                <br />
                <input type = "submit"  />
            </form>

        </>
    )
} */

export default function Formularios() {

    const [form, setForm] = useState({})

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    const handleChecked = (e) => { /*Para el input checkbox */
        setForm({
            ...form,
            [e.target.name] : e.target.checked
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert("El formulario se ha enviado")
    }

    return (
        <>
            <h2>Formularios</h2>
            <form onSubmit = {handleSubmit}>
                <label htmlFor="nombre" >Nombre:</label>
                <input type="text"
                    id="nombre"
                    name="nombre"
                    value = {form.nombre}
                    onChange={handleChange}
                />
                <p>Elige tu sabor favorito</p>
                <input
                    type='radio'
                    id="Vanilla"
                    name="sabor"
                    value="Vanilla"
                    onChange={handleChange}
                />
                <label htmlFor="Vanilla">Vanilla Js: </label>
                <br />
                <input
                    type='radio'
                    id="React"
                    value="React"
                    name="sabor"
                    onChange={handleChange}
                />
                <label htmlFor="React">React JS: </label>
                <br />
                <input
                    type='radio'
                    id="angular"
                    value="Angular"
                    name="sabor"
                    onChange={handleChange}
                />
                <label htmlFor="angular">Angular JS: </label>
                <br />
                <label htmlFor="vue">Vue JS: </label>
                <input
                    type='radio'
                    id="vue"
                    value="Vue"
                    name="sabor"
                    onChange={handleChange}
                />
                <br />
                <br />
                <p>Elige tu lenguaje de programacion favorito</p>
                <select name="lenguaje" 
                    onChange={handleChange}
                    defaultValue = {""}    
                >   
                    <option value="" > ------ </option>
                    <option value="js" > JavaScript </option>
                    <option value="php" > PHP </option>
                    <option value="py" > Python </option>
                    <option value="go" > GO </option>
                    <option value="rb" > Ruby </option>
                </select>
                <br />
                <label htmlFor = "terminos">Acepto terminos y condiciones</label>
                <input 
                    type='checkbox' 
                    id ="terminos" 
                    name = "terminos" 
                    onChange = {handleChecked}    
                />
                <br />
                <input type = "submit"  />
            </form>

        </>
    )
}