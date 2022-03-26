import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from '../src/container/ItemListContainer/ItemListContainer';
import Cart from '../src/components/Cart/Cart'
import ItemDetailContainer from '../src/container/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element=
            {<ItemListContainer
              saludo='Hola soy ItemListContainer'
            />}
          />
          <Route
            path="/type/:typeId"
            element=
            {<ItemListContainer
              saludo='Hola soy ItemListContainer'
            />}
          />
          <Route path="/detail/:detailId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          {/* crear un componente para el error 404 */}
          {/* <Route path=/notFound element={Componente404 />}/>} */}
          <Route path="/type/Animal/detail/:detailId" element={<ItemDetailContainer />} />
          <Route path="/type/Habilidad/detail/:detailId" element={<ItemDetailContainer />} />
          <Route path="/type/Alimento/detail/:detailId" element={<ItemDetailContainer />} />
          <Route path="/type/Habitat/detail/:detailId" element={<ItemDetailContainer />} />
          <Route path='/*' element={<Navigate to='/' />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
