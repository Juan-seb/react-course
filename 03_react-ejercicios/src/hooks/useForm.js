import { useState } from 'react';
import { helpHttp } from '../helpers/helpHttp'

export const useForm = (initialForm, validateForm) => {

    const [form, setForm] = useState(initialForm); /*Lo recibe del componente donde estoy metiendo los datos */
    const [errors, setErrors] = useState({}); /*Si el objeto esta vacio se hace el envio del form, osea no hay errores */
    const [loading, setLoading] = useState(false); /*Loader */
    const [response, setResponse] = useState(null);

    const handleChange = (e) => { /*Cuando el usuario empieza a rellenar el form */
        const { name, value } = e.target;
        
        setForm({
            ...form,
            [name]: value
        })
    }
    const handleBlur = (e) => { /*Validaciones del form */
        handleChange(e);
        setErrors(validateForm(form)) /*Si hay algun error esto es lo que los actualizara */
    }
    const handleSubmit = (e) => { /*Envio del formulario */
        e.preventDefault();
        setErrors(validateForm(form));

        if (Object.keys(errors).length === 0) {
            alert("Enviando formulario");
            setLoading(true);
            helpHttp().post("https://formsubmit.co/ajax/jsanguloc@correo.udistrital.edu.co",{
                body:form,
                headers:{
                    "Content-type":"application/json",
                }
            }).then(()=>{
                
                setLoading(false);
                setResponse(true)
                setForm(initialForm)
                setTimeout(() =>setResponse(false), 5000);
            })
        } else {
            return
        }
    }

    return {
        form,
        errors,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit
    }

}
