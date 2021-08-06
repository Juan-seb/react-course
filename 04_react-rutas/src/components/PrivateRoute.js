import { Redirect, Route } from "react-router-dom"

/* const Privateroute = (props) => {
    return (
        <Route exact={props.exact} path={props.path} component={props.component} />
    );
} */

/* const Privateroute = (props) => {
    console.log(props)
    return (
        <Route {...props} />
    );
}
 */
// Simular la autenticacion



let auth;
auth = null /*Si no ha pasado la autenticacion */
auth = true /*Si ya paso la autenticacion */

const Privateroute = ({component:Component,...rest}) => {

    return (
        <Route {...rest} >
            {auth?<Component />:<Redirect to="/login"/>}
        </Route>
    );
}


export default Privateroute
