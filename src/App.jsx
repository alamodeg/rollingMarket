import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css' 
import Footer from "./components/footer/Footer";
import { Navigator } from './components/navBar/Navigator.jsx'
import LoginPage from './page/login/LoginPage.jsx';

function App() {
  return (
  <>

    <Navigator/>
    <LoginPage/>
    <Footer/>

  </>    
) } ;

export default App