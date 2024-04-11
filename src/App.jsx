import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/footer/Footer";
import { Navigator } from './components/navBar/Navigator';

function App() {
  return (
    <>
      <Navigator/>

      <Footer />
    </>
  );
}

export default App;
