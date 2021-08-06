import React, { useState } from 'react';

const initialForm = {
    artist : "",
    song: ""
}

const SongForm = ({handleSearch}) => {

    const [form, setForm] = useState(initialForm)

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value /*Toma una copia de lo que ya hay en form y lo une a lo que se esta escribiendo
            en los formularios, aparte de esto no repite la propiedad en caso de que ya exista */
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!form.artist || !form.song){ /*Si alguno de ellos viene vacio ejecuta lo que hay en el if */
            alert("Datos incompletos");
            return;
        }
        
        handleSearch(form);
        setForm(initialForm); /*Para limpiar lo que hay en los inputs del form */
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="artist" 
                    placeholder="Nombre del interprete" 
                    onChange={handleChange} 
                    value = {form.artist}   
                />
                <input 
                    type="text" 
                    name="song" 
                    placeholder="Nombre de la cancion"  
                    onChange={handleChange} 
                    value = {form.song}/>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default SongForm
