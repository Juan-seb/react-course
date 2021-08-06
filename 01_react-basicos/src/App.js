import React from 'react'
import './App.css';
import logo from './logo.svg';
import Componente from './components/Componente'
import Props from './components/Props'
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional'
import RenderizadoElementos from './components/RenderizadoElementos'
import { EventosES6, EventosES7, MasSobreEventos } from './components/Eventos';
import Padre from './components/ComunicacionComponentes';
import CicloVida from './components/CicloVida';
import AjaxApis from './components/AjaxApis';
import ContadorHooks from './components/ContadorHooks';
import ScrollHooks from './components/scrollHooks';
import RelojHooks from './components/RelojHooks';
import AjaxHooks from './components/AjaxHooks';
import HooksPersonalizados from './components/HooksPersonalizados';
import Referencias from './components/Referencias';
import Formularios from './components/Formularios';
import Estilos from './components/Estilos';
import ComponentesEstilizados from './components/ComponentesEstilizados';

function App() {
  /* let nombre = "JUANITO";
  let auth = false;
  let estaciones = ["Primavera", "Invierno", "Otoño", "Verano"] Pruebas JSX */
  return (
    <>
      <div className="App">
        <header className="App-header">
          <section>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
          </p>
            {/* <label htmlFor="nombre">Ingrese</label>
          <input type="text" name="nombre" />
          <h1>{nombre}</h1>
          <p>{auth ? "Conectado" : "Desconectado"}</p>
          <ul>
            {estaciones.map((el, index) => (
              <li key={index}>{el}</li>
            ))}
          </ul> Pruebas JSX*/}
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
          </a>
          </section>
          <section>
            {/* <Componente></Componente> Forma normal de llamar un componente */}
            <Componente msg="Hola soy un componente desde una funcion expresada" />
            <hr />
            <Props cadena="Juan"
              numero={13}
              booleano={true}
              arreglo={[1, 2, 3]}
              objeto={{
                nombre: "Juan",
                correo: "angulocita@gmail.com"
              }}
              elementoReact={<i>Esto es jsx</i>}
              funcion={(num) => num * num}
              componenteReact={<Componente msg="Soy un componente pasado como prop" />} />
            <hr />
            <Estado />
            <hr />
            <RenderizadoCondicional />
            <hr />
            <RenderizadoElementos />
            <hr />
            <EventosES6 />
            <hr />
            <EventosES7 />
            <hr />
            <MasSobreEventos />
            <hr />
            <Padre />
            <hr />
            <CicloVida />
            <hr />
            <AjaxApis />
            <hr />
            <ContadorHooks title="Seguidores" />
            <hr />
            <ScrollHooks />
            <hr />
            <RelojHooks />
            <hr />
            <AjaxHooks />
            <hr />
            <HooksPersonalizados />
            <hr />
            <Referencias />
            <hr />
            <Formularios />
            <br />
            <br />
            <hr/>
            <Estilos />
            <hr/>
            <ComponentesEstilizados />
          </section>
        </header>

      </div>
    </>
  );
}

export default App;
