import {useContext, useState} from 'react'
import { Button, Modal, Form} from 'react-bootstrap';
import { ProductsProvider } from '../../context/ProductosContext';
import {v4 as uuidv4 } from "uuid"
import Swal from 'sweetalert2';

const FormProductos = ({editarProductos, handleClose}) => {

  console.log(editarProductos, "ediatr productos")
  const {addProducto, updateProductos} = useContext(ProductsProvider)

  const [producto, setProducto] = useState({
    _id: editarProductos ? editarProductos._id : (null),
    name: editarProductos ? editarProductos.name : "",
    description: editarProductos ? editarProductos.description: "",
    category: editarProductos ? editarProductos.category : "",
    price: editarProductos ? editarProductos.price : "",
    stock: editarProductos ? editarProductos.stock : "",
    image: editarProductos ? editarProductos.image : ""
  })

  const handleChange = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value
    })
  }


  const handleSubmit = (e) =>{
    e.preventDefault()
    if (editarProductos) {
      updateProductos(producto)
      handleClose()
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Producto Editado",
        showConfirmButton: false,
        timer: 1500,
      });
      setProducto({
        _id: "",
        name: "",
        description: "",
        category: "",
        price: "",
        stock: "",
        image: ""
      })
    }else {
      addProducto(producto);
      handleClose()
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Producto Agregado",
        showConfirmButton: false,
        timer: 1500,
      });
      setProducto({
        _id: "",
        name: "",
        description: "",
        category: "",
        price: "",
        stock: "",
        image: ""
      })
    }
    
  }

  
  return (
    <>


        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" >
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text"
        value={producto.name} 
        onChange={handleChange}
        name='name'
        placeholder="Nombre del Producto" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Categoria</Form.Label>
        <Form.Control type="text" 
        value={producto.category} 
        onChange={handleChange}
        name='category'
        placeholder="Categoria del Producto" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Descripcion</Form.Label>
        <Form.Control type="text" 
        value={producto.description} 
        onChange={handleChange}
        name='description'
        placeholder="Descripcion del Producto" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Stock</Form.Label>
        <Form.Control type="number" 
        value={producto.stock} 
        onChange={handleChange}
        name='stock'
        placeholder="Stock del Producto" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Precio</Form.Label>
        <Form.Control type="number" 
        value={producto.price} 
        onChange={handleChange}
        name='price'
        placeholder="Precio del Producto" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Imagen</Form.Label>
        <Form.Control type="text" 
        value={producto.image}
        onChange={handleChange}
        name='image' 
        placeholder="Imagen del Producto" />
      </Form.Group>

      {editarProductos ? (
      <Button type="submit" variant="primary">
        Editar Producto
      </Button>
      ) : (
      <Button type="submit" >
        Agregar Producto
      </Button>
      )}

    </Form>

    </>
  )
}

export default FormProductos