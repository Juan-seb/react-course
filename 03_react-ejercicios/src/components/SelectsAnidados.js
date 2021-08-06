import React, { useState } from 'react';
import SelectList from './SelectList';

const SelectsAnidados = () => {

    const [state, setState] = useState(""); /*Esto seria para los estados - departamentos */
    const [town, setTown] = useState(""); /*Ciudades - Municipip */
    const [suburb, setSuburb] = useState(""); /*Barrios o colonias (Mexico) */

    const TOKEN = 'bc644b5b-b53d-40b4-898b-f286f8d455f7';

    return (
        <div>
            <h2>Selects anidados</h2>
            <SelectList
                title="estado"
                url={`https://api-sepomex.hckdrk.mx/query/get_estados?token=${TOKEN}`}
                handleChange={e => { setState(e.target.value) }}
            />
            {state && /*Conditional render para que se carguen los select a medida que lo necesitamos */
                <SelectList
                    title="municipios"
                    url={`https://api-sepomex.hckdrk.mx/query/get_municipio_por_estado/${state}?token=${TOKEN}`}
                    handleChange={e => { setTown(e.target.value) }}
                />}
            {town &&
                <SelectList
                    title="colonia"
                    url={`https://api-sepomex.hckdrk.mx/query/get_colonia_por_municipio/${town}?token=${TOKEN}`}
                    handleChange={e => { setSuburb(e.target.value) }}
                />
            }

            <pre>
                <code>
                    {state} - {town} - {suburb}
                </code>
            </pre>
        </div>
    )
}

export default SelectsAnidados
