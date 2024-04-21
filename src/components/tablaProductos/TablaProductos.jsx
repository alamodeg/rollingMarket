import {Table, Button, Modal} from 'react-bootstrap';
import '../tablaProductos/TablaProductos.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useContext, useState } from 'react';
import { ProductsProvider } from '../../context/ProductosContext';
import FormProductos from '../formProductos/FormProductos';


const TablaProductos = () => {

    const {productos, deleteProductos} = useContext(ProductsProvider)
    const [editarProductos, setEditarProductos] = useState(null)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);





    const handleEdit = (producto) => {
      setEditarProductos(producto)
      setShow(true)
    }


  return (

    <>
            <div>
        <Button variant="primary" className='boton-solo' onClick={handleShow}>
        Agregar Productos
      </Button>
    </div>
    <div className='titulo'>
    <h2>Administar Productos</h2>
    </div>
    
    {productos.length === 0 ? (
      "no hay productos"
    ) : (
      <Table className='tabla' striped bordered hover>
      <thead >
        <tr >
        <th>Nombre del Producto</th>
          <th>Categoria</th>
          <th>Descripcion</th>
          <th>Stock</th>
          <th>Precio</th>
          <th>Fecha Ultima Modificacion</th>
          <th>Imagen</th>
          <th>Crud</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((producto) => (
          <tr>
          <td>{producto.nombre}</td>
          <td>{producto.categoria}</td>
          <td>{producto.descripcion}</td>
          <td>{producto.stock}</td>
          <td>{producto.precio}</td>
          <td>{producto.fecha}</td>
          <td>{producto.imagen}</td>
          <td className='fila'>
            <Button className='boton-crud' variant="danger" onClick={() => deleteProductos(producto.id)}>Eliminar</Button>
            <Button className='boton-crud' onClick={() => handleEdit(producto)} variant="danger">Editar</Button></td>
        </tr>
        ))}
      </tbody>
    </Table>
    )}
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body> <FormProductos editarProductos={editarProductos}/> </Modal.Body>
      </Modal>
      
    </>
    
  )
}

export default TablaProductos