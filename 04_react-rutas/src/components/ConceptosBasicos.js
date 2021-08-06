import {
    BrowserRouter as Router
    , Route, Switch, Redirect,
    HashRouter
} from "react-router-dom";
import Acerca from "./pages/Acerca";
import Contacto from "./pages/Contacto";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import MenuConceptos from "./MenuConceptos";
import Usuario from "./pages/Usuario";
import Productos from "./pages/Productos";
import ReactTopics from "./pages/ReactTopics";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from './PrivateRoute'

const ConceptosBasicos = () => {
    return (
        <div>
            <h2>Hash Router</h2>
            <HashRouter>
                <MenuConceptos />
                <Switch>
                    <Route exact path="/" component={Home} /> {/*Aqui se ve mucho mejor y mas limpio 
                    tener presente el uso adecuado del atributo exact */}
                    <Route exact path="/acerca" component={Acerca} />
                    <Route exact path="/contacto" component={Contacto} />
                    <Route exact path="/usuario/:username" component={Usuario} />
                    <Route exact path="/productos" component={Productos} />
                    <Route exact path="/about">
                        <Redirect to="/acerca" />
                    </Route>
                    <Route exact path="/contact">
                        <Redirect to="/contacto" />
                    </Route>
                    <Route path="/react" component={ReactTopics} /> {/*Debido a que tenemos rutas anidadas
                    entonces no es conveniente tener el exact debido a que se van a tomar varios valores,
                    en la url */}
                    <Route exact path="/login" component={Login} />
                    {/* <Route exact path="/dashboard" component={Dashboard} /> */}
                    <PrivateRoute exact path="/dashboard" component={Dashboard} />
                    <Route path="*" component={Error404} />
                </Switch>
            </HashRouter>
            <hr />
            <h2>Conceptos Basicos</h2>
            <Router>
                <MenuConceptos />
                <Switch>
                    <Route exact path="/" component={Home} /> {/*Aqui se ve mucho mejor y mas limpio 
                    tener presente el uso adecuado del atributo exact */}
                    <Route exact path="/acerca" component={Acerca} />
                    <Route exact path="/contacto" component={Contacto} />
                    <Route exact path="/usuario/:username" component={Usuario} />
                    <Route exact path="/productos" component={Productos} />
                    <Route exact path="/about">
                        <Redirect to="/acerca" />
                    </Route>
                    <Route exact path="/contact">
                        <Redirect to="/contacto" />
                    </Route>
                    <Route path="/react" component={ReactTopics} /> {/*Debido a que tenemos rutas anidadas
                    entonces no es conveniente tener el exact debido a que se van a tomar varios valores,
                    en la url */}
                    <Route exact path="/login" component={Login} />
                    {/* <Route exact path="/dashboard" component={Dashboard} /> */}
                    <PrivateRoute exact path="/dashboard" component={Dashboard} />
                    <Route path="*" component={Error404} />
                </Switch>
            </Router>
        </div>
    )
}

/* const ConceptosBasicos = () => { Conceptos basicos para las rutas
    return (
        <div>
            <h2>Conceptos Basicos</h2>
            <Router>
                <Switch>
                    <Route exact path="/acerca">
                        <Acerca />
                    </Route>
                    <Route exact path="/contacto" component={Contacto}/> Rutas con component
                    <Route exact path="/contacto" children={<Contacto />} /> Rutas con children
                    <Route exact path="/">
                        <h3>Home</h3>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
} */

export default ConceptosBasicos

