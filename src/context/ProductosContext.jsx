import { createContext, useEffect, useState } from "react"
import axios from "axios";

export const ProductsProvider = createContext();

const ProductosContext = ({ children }) => {
    
  const [productos, setProductos] = useState([]);

  //Obtener datos
  const obtenerDatos = async () => {
    try {
      const response = await axios.get("http://localhost:8000/products");
      setProductos(response.data);
    } catch (error) {
      console.error('Error en obtener todos los productos:', error);
    }
  };

  //Agregar productos
  const addProducto = async (producto) => {
    try {
      const response = await axios.post("http://localhost:8000/products", producto);
      setProductos([...productos, response.data])
    } catch (error) {
      console.error('Error en agregar producto:', error);
    }
  }; 

  //borrar productos
  const deleteProducto = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/products/${id}`);
      setProductos(productos.filter((producto) => producto.id !== id));
    } catch (error) {
      console.error('Error al borrar producto:', error);
    }
  }; 

  const getCategoria = async (category) => {
    try {
      const response = await axios.get(`http://localhost:8000/products?category=${category}`);
      setProductos(response.data);
    } catch (error) {
      console.error('Error al obtener productos por categoría:', error);
    }
  };
  

  useEffect(() => {
    obtenerDatos();
  }, []);


    
  return (
    <ProductsProvider.Provider value={{ productos, addProducto, deleteProducto, getCategoria }}>
        {children}
    </ProductsProvider.Provider>
  )
}

export default ProductosContext