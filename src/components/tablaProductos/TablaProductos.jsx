import {Table, Button, Modal, Container} from 'react-bootstrap';
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

    const handleAgregarProducto = () => {
      setEditarProductos(null); // Establece editarProductos en null al agregar un producto nuevo
      setShow(true);
    };

  return (

    <>
    <div className='boton-agregar-producto-padre'>
    <h2 className=''>Administar Productos</h2>
      <Button className='boton-agregar-producto' variant='link' onClick={handleAgregarProducto}>
        Agregar Productos
      </Button>
    </div>
    
    {productos.length === 0 ? (
      "no hay productos"
    ) : (
      <Container>
      <Table className='tabla' striped bordered hover>
        
      <thead className='subtitulo-tabla'>
        <tr>
          <th >Nombre del Producto</th>
          <th>Categoria</th>
          <th>Descripcion</th>
          <th>Stock</th>
          <th>Precio</th>
          <th className='imagen'>Fecha Ultima Modificacion</th>
          <th className='imagen'>Imagen</th>
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
          <td>
          <Button className='boton-crud' onClick={() => handleEdit(producto)} variant="link"><i class="bi bi-pencil-square"></i></Button>
          <Button className='boton-crud' variant="link" onClick={() => deleteProductos(producto.id)}><i class="bi bi-trash"></i></Button>
          </td>
        </tr>
        ))}
      </tbody>
      
    </Table>
    </Container>
    )}
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editarProductos ? 'Editar Producto' : 'Agregar Producto'}</Modal.Title>
        </Modal.Header>
        <Modal.Body> <FormProductos editarProductos={ editarProductos } handleClose={handleClose}/> </Modal.Body>
      </Modal>
      
    </>
    
  )
}

export default TablaProductos