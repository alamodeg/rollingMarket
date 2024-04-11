import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Footer from "./components/footer/Footer";
import { Navigator } from './components/navBar/Navigator';
import AboutUsPage  from './page/aboutUs/AboutUsPage';

function App() {
  return (
    <>

      <Navigator/>
    <AboutUsPage/>

    <Footer/>
    </>
  );
}

export default App
