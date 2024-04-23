import React from 'react';
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Navigator } from './components/navBar/Navigator';
import { Rutas } from './components/rutas/Rutas.jsx';
import Footer from "./components/footer/Footer";
import UsersContext from './context/UsersContext.jsx';
import ProductosContext from './context/ProductosContext.jsx';



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
