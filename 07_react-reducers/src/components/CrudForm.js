import React, { useState, useEffect } from 'react';

const initialForm = {
    name: "",
    constellation: "",
    id: null
}

const CrudForm = ({ createData, updateData, setDataToEdit , dataToEdit }) => {

    const [form, setForm] = useState(initialForm)

    useEffect(() => {
        if (dataToEdit) {
            setForm(dataToEdit)
        }else{
            setForm(initialForm)
        }
    }, [dataToEdit])

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value /*Con esta manera no se me van a repetir los atributos
            se va almacenando sin que se repita */
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!form.name || !form.constellation) {
            alert("Datos incompletos");
            return;
        }

        if (form.id === null){
            createData(form) /*Aqui le estamos mandando estos datos al formulario padre, aunque estemos desde el hijo
            esta funcion esta conectada directamente con CruddApp y en esta misma es que vamos a hacer la insercion, etc */
        }else{
            updateData(form)
        }

        handleReset()
    }
    const handleReset = () => {
        setForm(initialForm); /*Para limpiar todos los datos y que no haya errores  */
        setDataToEdit(null)

    }

    return (
        <div>
            {dataToEdit ? <h3>Editando datos</h3> : <h3>Agregando</h3>}
            <form onSubmit={handleSubmit}>
                <input type="text"
                    name="name"
                    placeholder="Nombre"
                    onChange={handleChange}
                    value={form.name}
                />
                <input type="text"
                    name="constellation"
                    placeholder="Constelacion"
                    onChange={handleChange}
                    value={form.constellation}
                />
                <input type="submit" value="Enviar" />
                <input type="reset" value="Limpiar" onClick={handleReset} />{/*El btn reset automaticamente limpia todos los campos */}
            </form>
        </div>
    )
}

export default CrudForm
