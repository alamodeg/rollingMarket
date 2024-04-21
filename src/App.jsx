import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import { Navigator } from './components/navBar/Navigator.jsx'
import MainPage from './components/mainPage/MainPage.jsx';
import  ProductosContext  from './context/ProductosContext';
import FormularioProductos from './components/formProductos/FormularioProductos.jsx';

function App() {
  return (
    <>
      <ProductosContext>

        <Navigator/>
        <FormularioProductos/>
        <MainPage/>

      </ProductosContext>
    </>
  );
}

export default App
