import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Cart from '../src/components/Cart/Cart'
import CartContextProvider from './context/cartContext';
import ItemDetailContainer from '../src/container/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../src/container/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import React from 'react'


function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
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
            <Route path="/type/:typeId/detail/:detailId" element={<ItemDetailContainer />} />
            <Route path='/*' element={<Navigate to='/' />} />
          </Routes>

        </div>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
