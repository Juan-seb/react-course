import { useHistory, useLocation } from "react-router-dom"

const Productos = () => {
    //let location = useLocation();
    //console.log(location)

    const LIMIT = 20;

    let { search } = useLocation();
    let query = new URLSearchParams(search);

    let start = parseInt(query.get('inicio')) || 1;
    let end = parseInt(query.get('fin')) || LIMIT;

    let history = useHistory();

    const handlePrev = () => {
        start > LIMIT && history.push({search:`?inicio=${start - LIMIT}&fin=${end - LIMIT}`})
    }

    const handleNext = () => {
        history.push({search:`?inicio=${start + LIMIT}&fin=${end + LIMIT}`})
    }

    return (
        <div>
            <h3>Productos</h3>
            <p>Mostrando productos del <b>{start} al {end}</b></p>
            {start>LIMIT && <button onClick={handlePrev}>Atras</button>}
            <button onClick={handleNext}>Adelante</button>
        </div>
    )
}

export default Productos
