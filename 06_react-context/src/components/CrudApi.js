import { useContext } from 'react';
import CrudContext from '../context/CrudContext';
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'
import Loader from './Loader';
import Message from './Message';

const CrudApi = () => {

    const {loading,error,db} = useContext(CrudContext) /*This variables come from CrudContext */

    return (
        <div>
            <h2>Crudd Api con CONTEXT API</h2>
            <article className='grid-1-2'>
                <CrudForm />
                {loading && <Loader/> /*loading allow to render the loader in the page while request respond */} 
                {error && <Message msg = {`Error: ${error.status} -> ${error.statusText}`} bgColor = '#dc3545'/>}
                {/*If the request have an error then render the message component */}
                { db && /*If db has no data the component CrudTable does not render */
                <CrudTable />}
                
            </article>
        </div>
    )
}

export default CrudApi
