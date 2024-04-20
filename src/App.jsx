import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import { Navigator } from './components/navBar/Navigator.jsx'
import MainPage from './components/mainPage/MainPage.jsx';
import  ProductosContext  from './context/ProductosContext';

function App() {
  return (
    <>
      <ProductosContext>

        <Navigator/>
        <MainPage/>

      </ProductosContext>
    </>
  );
}

export default App
