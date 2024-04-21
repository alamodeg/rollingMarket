import Footer from './components/footer/Footer'
import { Navigator } from './components/navBar/Navigator'

import TablaProductos from './components/tablaProductos/TablaProductos'
import TablaUsuarios from './components/tablaUsuarios/TablaUsuarios'
import ProductosContext from './context/ProductosContext'
import FormProductos from './components/formProductos/FormProductos'
import Admin from './components/admin/Admin'

function App() {


  return (
    <>
    <ProductosContext>
      <Navigator/>
      <Admin/>
      <Footer/>
    </ProductosContext>

    </>
  )
}

export default App
