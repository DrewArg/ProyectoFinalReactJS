import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import NavBar from './components/NavBar/NavBar';
import Titulo from './components/Titulo/Titulo';
import ItemListContainer from '../src/container/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Titulo />
      <ItemListContainer saludo='Hola soy ItemListContainer' />

    </div>
  );
}

export default App;
