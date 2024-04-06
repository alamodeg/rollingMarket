import { useState } from 'react'
import reactLogo from './assets/react.svg'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import { Navigator } from './components/navBar/Navigator.jsx'
import Footer from './components/footer/Footer.jsx';
import { Contact } from './page/contacto/Contact.jsx';


function App() {
  return (
    <>
    <Navigator/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App
