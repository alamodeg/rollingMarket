import React from 'react';
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Navigator } from './components/navBar/Navigator.jsx';
import { Rutas } from './components/rutas/Rutas.jsx';
import Footer from './components/footer/Footer.jsx';


function App() {
  return (
    <>
    <Navigator/>
    <Rutas/>
    <Footer/>
    </>
  );
}

export default App;