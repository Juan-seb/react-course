import { Route, Link, Switch, useRouteMatch, useParams } from "react-router-dom"

const Topic = () => {
    let {topic} = useParams();

    return(
        <div>
            <h4>{topic}</h4>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Laborum repellendus sed fugiat pariatur minima aliquid repellat hic 
                rem odit architecto cum incidunt culpa modi cupiditate porro est, accusamus commodi dolores?
            </p>
        </div>
    )
}

const ReactTopics = () => {

    //let match = useRouteMatch()
    //console.log(match)

    let { path, url } = useRouteMatch();

    return (
        <div>
            <h2>Temas de React</h2>
            <ul>
                <li>
                    <Link to={`${url}/jsx`}>JSX</Link>
                </li>
                <li>
                    <Link to={`${url}/props`}>Props</Link>
                </li>
                <li>
                    <Link to={`${url}/estado`}>Estado</Link>
                </li>
                <li>
                    <Link to={`${url}/componentes`}>Components</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path={path}>
                    <h4>Elige un tema de react</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Asperiores quisquam vel, quidem doloribus molestias neque quibusdam dolore?
                        Eveniet labore sint earum vel molestias ab quam ducimus commodi! Velit, autem. Qui!
                    </p>
                </Route>
                <Route path={`${path}/:topic`} component={Topic} />
            </Switch>
        </div>
    )
}

export default ReactTopics
