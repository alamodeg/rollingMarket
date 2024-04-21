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

  //Agregar datos

  const addProducto = async (producto) => {
    try {
      const response = await axios.post("http://localhost:8000/products", producto);
      console.log(response.data, "Producto agregado")
    } catch (error) {
      console.error('Error en agregar producto:', error);
    }
  }; 











  useEffect(() => {
    obtenerDatos();
  }, []);


    
  return (
    <ProductsProvider.Provider value={{productos, addProducto}}>
        {children}
    </ProductsProvider.Provider>
  )
}

export default ProductosContext