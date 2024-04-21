import {useContext, useState} from 'react'
import { Button, Modal, Form} from 'react-bootstrap';
import { ProductsProvider } from '../../context/ProductosContext';
import {v4 as uuidv4 } from "uuid"

const FormProductos = ({editarProductos}) => {

  console.log(editarProductos, "ediatr productos")
  const {addProducto, updateProductos} = useContext(ProductsProvider)

  const [producto, setProducto] = useState({
    id: editarProductos ? editarProductos.id : uuidv4(),
    nombre: editarProductos ? editarProductos.nombre : "",
    categoria: editarProductos ? editarProductos.categoria : "",
    descripcion: editarProductos ? editarProductos.descripcion: "",
    stock: editarProductos ? editarProductos.stock : "",
    precio: editarProductos ? editarProductos.precio : "",
    imagen: editarProductos ? editarProductos.imagen : ""
  })

  const handleChange = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value
    })
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) =>{
    e.preventDefault()
    if (editarProductos) {
      updateProductos(producto)
      setProducto({
        id: uuidv4(),
        nombre: "",
        categoria: "",
        descripcion: "",
        stock: "",
        precio: "",
        imagen: ""
      })
    }else {
      addProducto(producto);
      setProducto({
        id: uuidv4(),
        nombre: "",
        categoria: "",
        descripcion: "",
        stock: "",
        precio: "",
        imagen: ""
      })
    }
    addProducto(producto)
    setProducto({
      id: uuidv4(),
      nombre: "",
      categoria: "",
      descripcion: "",
      stock: "",
      precio: "",
      imagen: ""
    })
  }

  
  return (
    <>


        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" >
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text"
        value={producto.nombre} 
        onChange={handleChange}
        name='nombre'
        placeholder="Nombre del Producto" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Categoria</Form.Label>
        <Form.Control type="text" 
        value={producto.categoria} 
        onChange={handleChange}
        name='categoria'
        placeholder="Categoria del Producto" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Descripcion</Form.Label>
        <Form.Control type="text" 
        value={producto.descripcion} 
        onChange={handleChange}
        name='descripcion'
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
        value={producto.precio} 
        onChange={handleChange}
        name='precio'
        placeholder="Precio del Producto" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Imagen</Form.Label>
        <Form.Control type="text" 
        value={producto.imagen}
        onChange={handleChange}
        name='imagen' 
        placeholder="Imagen del Producto" />
      </Form.Group>

      {editarProductos ? (
      <Button type="submit" variant="primary">
      Editar Producto
    </Button>
      ) : (
        <Button type="submit" variant="primary">
        Agregar Producto
      </Button>
      )}

    </Form>

    </>
  )
}

export default FormProductos