import { useEffect, useState, createContext } from 'react'
import axios from "axios"
import Swal from 'sweetalert2';

export const ProductsProvider = createContext()

const ProductosContext = ({children}) => {

  const [productos, setProductos] = useState([])

  
    const obtenerProductos = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("https://rollingmarketbe1.onrender.com/productos"
        ,{
          headers: {
            authorization:`${token}`,
          }
        });

        setProductos(response.data)
      } catch (error) {
        console.error(error)
      }
    }

    //POST PARA ALIMENTAR LA BASE DE DAT
    const addProducto = async (producto) => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post("https://rollingmarketbe1.onrender.com/product", producto
        ,{
          headers: {
            authorization:`${token}`,
          }
        });
        
        setProductos([...productos, response.data])
      } catch (error) {
        console.log(error)
      }
    }

    const getCategoria = async (category) => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`https://rollingmarketbe1.onrender.com/producto/categoria/${category}`
      
        ,{
          headers: {
            authorization:`${token}`,
          }
        });
        setProductos(response.data);
      } catch (error) {
        console.error('Error al obtener productos por categoría:', error);
      }
    };

    //DELETE PARA ELIMINAR UN PRODCUTO DE LA BASE DE DATOS
    const deleteProductos = async (id) => {
      try {
        const token = localStorage.getItem("token");
        const confirmacion = await Swal.fire({
          title: '¿Estás seguro que desea eliminar el producto?',
          text: 'Esta acción no se puede deshacer',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Sí, eliminar',
          cancelButtonText: 'Cancelar'
        });
    
        if (confirmacion.isConfirmed) {
          await axios.delete(`https://rollingmarketbe1.onrender.com/producto/delete/${id}`
          ,{
            headers: {
              authorization:`${token}`,
            }
          });
          setProductos(productos.filter(producto => producto._id !== id));
          Swal.fire('¡Eliminado!', 'El producto ha sido eliminado correctamente', 'success');
        }
      } catch (error) {
        console.log(error);
        Swal.fire('¡Error!', 'Ha ocurrido un error al eliminar el producto', 'error');
        console.log(error);
        Swal.fire('¡Error!', 'Ha ocurrido un error al eliminar el producto', 'error');
      }
    }

    //PUT PARA ACTUALIZAR UN PORDUCTO DE LA BASE DE DATOS
    const updateProductos = async (producto) => {
      try {
        const token = localStorage.getItem("token");
        await axios.put(`https://rollingmarketbe1.onrender.com/producto/update/${producto.id}`, producto
        ,{
          headers: {
            authorization:`${token}`,
          }
        });
        await obtenerProductos()
      } catch (error) {
        console.log(error)
      }
    }
    useEffect(() =>{
      obtenerProductos()
    }, [])



  return (
    <ProductsProvider.Provider value={{productos, addProducto, deleteProductos, updateProductos, getCategoria}}>
        {children}
    </ProductsProvider.Provider>
  )
}

export default ProductosContext;