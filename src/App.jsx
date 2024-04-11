import { useState } from 'react'
import reactLogo from './assets/react.svg'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import { Navigator } from './components/navBar/Navigator.jsx'
import Footer from './components/footer/Footer.jsx';


function App() {
  return (
    <>
    <Navigator/>

    <Footer/>
    </>
  );
}

export default App
