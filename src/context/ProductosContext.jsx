import { useEffect, useState, createContext } from 'react'
import axios from "axios"

export const ProductsProvider = createContext()

const ProductosContext = ({children}) => {

  const [productos, setProductos] = useState([])


  
    const obtenerProductos = async () => {
      try {
        const response = await axios.get("https://rollingmarketbe-1.onrender.com/productos")
        setProductos(response.data)
      } catch (error) {
        console.error(error)
      }
    }

    //POST PARA ALIMENTAR LA BASE DE DATO
    const addProducto = async (producto) => {
      try {
        const response = await axios.post("https://rollingmarketbe-1.onrender.com/productos", producto)
        setProductos([...productos, response.data])
      } catch (error) {
        console.log(error)
      }
    }

    //DELETE PARA ELIMINAR UN PRODCUTO DE LA BASE DE DATOS
    const deleteProductos = async (id) => {
      console.log(id)
      try {
        await axios.delete(`https://rollingmarketbe1.onrender.com/producto/delete/${id}`)
        
        setProductos(productos.filter(producto => producto._id !== id));
      } catch (error) {
        console.log(error)
      }
    }

    //PUT PARA ACTUALIZAR UN PORDUCTO DE LA BASE DE DATOS
    const updateProductos = async (producto) => {
      try {
        await axios.put(`https://rollingmarketbe-1.onrender.com/producto/update/${producto._id}`, producto)
        await obtenerProductos()
      } catch (error) {
        console.log(error)
      }
    }
    useEffect(() =>{
      obtenerProductos()
    }, [])



  return (
    <ProductsProvider.Provider value={{productos, addProducto, deleteProductos, updateProductos}}>
        {children}
    </ProductsProvider.Provider>
  )
}

export default ProductosContext