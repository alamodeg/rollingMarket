import Footer from './components/footer/Footer'
import { Navigator } from './components/navBar/Navigator'

import TablaProductos from './components/tablaProductos/TablaProductos'
import TablaUsuarios from './components/tablaUsuarios/TablaUsuarios'
import ProductosContext from './context/ProductosContext'
import FormProductos from './components/formProductos/FormProductos'

function App() {


  return (
    <>
    <ProductosContext>
      <Navigator/>
      <TablaProductos/>
      <TablaUsuarios/>
      <FormProductos/>
      <Footer/>
    </ProductosContext>

    </>
  )
}

export default App
