
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Footer from "./components/footer/Footer";
import { Navigator } from './components/navBar/Navigator';
import  ProductosContext from './context/ProductosContext';
import UsersContext from "./context/UsersContext";
import Admin from './components/admin/Admin';
import { Rutas } from './components/rutas/Rutas.jsx';

function App() {


  return (
    <>
      <UsersContext>
        <ProductosContext>
          <Navigator />
          <Admin/>
          <Rutas />
          <Footer />
        </ProductosContext>
      </UsersContext>
    </>
  )
}

export default App
