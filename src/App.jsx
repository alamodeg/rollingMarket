import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Footer from "./components/footer/Footer";
import { Navigator } from './components/navBar/Navigator.jsx'
import Page404 from './page/404/Page404';

function App() {
  return (
    <>
      <Navigator/>
      <Page404/>
      <Footer />
    </>
  );
}

export default App;
  


