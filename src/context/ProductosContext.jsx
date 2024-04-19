import { useEffect, useState, createContext } from 'react'
import axios from "axios"

export const ProductsProvider = createContext()

const ProductosContext = ({children}) => {

  const [productos, setProductos] = useState([])
  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const response = await axios.get("http://localhost:8000/productos")
        setProductos(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    obtenerProductos()
  },[])

  console.log(productos, "productos desde el context")

  return (
    <ProductsProvider.Provider value={{productos}}>
        {children}
    </ProductsProvider.Provider>
  )
}

export default ProductosContext