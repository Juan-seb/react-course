import React from 'react';
import ContactForm from './components/ContactForm';
import CrudApi from './components/CrudApi';
import CruddApp from "./components/CruddApp";
import SelectsAnidados from './components/SelectsAnidados';
import SongSearch from './components/SongSearch';
import Modals from './components/Modals';

function App() {
  return (
    <>
      <h1>Ejercicios con React</h1>
      <hr />
      <Modals />
      <hr />
      <ContactForm />
      <hr />
      <SelectsAnidados />
      <hr />
      <SongSearch />    
      <hr />
      <CrudApi />  
      <hr/>
      <CruddApp />
    </>
  );
}

export default App;
