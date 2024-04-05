import Footer from './components/footer/Footer'
import { Navigator } from './components/navBar/Navigator'

import TablaProductos from './components/tablaProductos/TablaProductos'
import TablaUsuarios from './components/tablaUsuarios/TablaUsuarios'

function App() {


  return (
    <>
      <Navigator/>
      <TablaProductos/>
      <TablaUsuarios/>
      <Footer/>
    </>
  )
}

export default App
