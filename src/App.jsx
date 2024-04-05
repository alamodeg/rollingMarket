import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import { Navigator } from './components/navBar/Navigator.jsx';
import Footer from './components/footer/Footer.jsx';
import { Rutas } from './components/rutas/Rutas.jsx';



function App() {
  return (
    <>
    <Navigator/>
    <Rutas/>
    <Footer/>
    </>
  );
}

export default App
