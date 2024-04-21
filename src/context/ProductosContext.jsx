import { useEffect, useState, createContext } from 'react'
import axios from "axios"

export const ProductsProvider = createContext()

const ProductosContext = ({children}) => {

  const [productos, setProductos] = useState([])


  
    const obtenerProductos = async () => {
      try {
        const response = await axios.get("http://localhost:8000/productos")
        setProductos(response.data)
      } catch (error) {
        console.error(error)
      }
    }

    //POST PARA ALIMENTAR LA BASE DE DATO
    const addProducto = async (producto) => {
      try {
        const response = await axios.post("https://rollingmarketbe-os1b.onrender.com/product", producto)
        setProductos([...productos, response.data])
      } catch (error) {
        console.log(error)
      }
    }

    //DELETE PARA ELIMINAR UN PRODCUTO DE LA BASE DE DATOS
    const deleteProductos = async (id) => {
      try {
        await axios.delete(`http://localhost:8000/productos/${id}`)
        setProductos(productos.filter((producto) => producto.id !== id))
      } catch (error) {
        console.log(error)
      }
    }

    //PUT PARA ACTUALIZAR UN PORDUCTO DE LA BASE DE DATOS
    const updateProductos = async (producto) => {
      try {
        await axios.put(`http://localhost:8000/productos/${producto.id}`, producto)
        await obtenerProductos()
      } catch (error) {
        console.log(error)
      }
    }
    useEffect(() =>{
      obtenerProductos()
    }, [])

  console.log(productos, "productos desde el context")

  return (
    <ProductsProvider.Provider value={{productos, addProducto, deleteProductos, updateProductos}}>
        {children}
    </ProductsProvider.Provider>
  )
}

export default ProductosContext