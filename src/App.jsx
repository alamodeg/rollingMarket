import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import { Navigator } from './components/navBar/Navigator.jsx'
import MainPage from './components/mainPage/MainPage.jsx';
import  ProductosContext  from './context/ProductosContext';
import FormularioProductos from './components/formProductos/FormularioProductos.jsx';
import DropdownCategoria from './components/formProductos/DropdownCategoria.jsx';

function App() {
  return (
    <>
      <ProductosContext>

        <Navigator/>
        <DropdownCategoria/>
        <FormularioProductos/>
        <MainPage/>

      </ProductosContext>
    </>
  );
}

export default App
