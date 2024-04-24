import React from 'react';
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import { Navigator } from './components/navBar/Navigator';
import ProductosContext from './context/ProductosContext';
import UsersContext from "./context/UsersContext";
import { Rutas } from './components/rutas/Rutas.jsx';
import Footer from "./components/footer/Footer";



function App() {


  return (
    <>

      <UsersContext>
        <ProductosContext>
          <Navigator />
          <Rutas />
          <Footer />
        </ProductosContext>
      </UsersContext>

    </>
  )
}

export default App;
