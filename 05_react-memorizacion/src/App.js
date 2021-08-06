import Contador from "./components/Contador"

const App = () => {

    return (
        <div>
            <h1>Memorizacion en React</h1>
            <hr />
            <h2>Teoria</h2>
            <h3>
                <a href="https://es.reactjs.org/docs/react-api.html#reactmemo"
                    target="_blank"
                    rel="noreferrer"
                >Memo</a>
            </h3>
            <hr />
            <h3>
                <a href="https://es.reactjs.org/docs/hooks-reference.html#usecallback"
                    target="_blank"
                    rel="noreferrer"
                >
                    Use Callback
                </a>
            </h3>
            <hr />
            <h3>
                <a href="https://es.reactjs.org/docs/hooks-reference.html#usememo"
                    target="_blank"
                    rel="noreferrer"
                >
                    useMemo
                </a>
            </h3>
            <hr />
            <Contador />

        </div>
    )
}

export default App

