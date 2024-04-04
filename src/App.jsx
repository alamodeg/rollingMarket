import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import { Navigator } from './components/navBar/Navigator.jsx'
import { Contacto } from './components/contacto/Contacto.jsx';
import Footer from './components/footer/Footer.jsx';


function App() {
  return (
    <>
    <Navigator/>
    <Contacto/>
    <Footer/>
    </>
  );
}

export default App
