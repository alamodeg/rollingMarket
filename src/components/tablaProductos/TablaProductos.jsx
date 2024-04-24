import {Table, Button, Modal, Container} from 'react-bootstrap';
import '../tablaProductos/TablaProductos.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useContext, useState } from 'react';
import { ProductsProvider } from '../../context/ProductosContext';
import FormProductos from '../formProductos/FormProductos';
import { ResponsiveContainer } from 'recharts';


const TablaProductos = () => {

    const {productos, deleteProductos} = useContext(ProductsProvider)
    const [editarProductos, setEditarProductos] = useState(null)
    const [show, setShow] = useState(false);
    //formateo de hora
    const formatDate = (dateString) => {
      const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const handleClose = () => setShow(false);
    

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
      <Button className='boton-agregar-producto' onClick={handleAgregarProducto}>
        Agregar Producto
      </Button>
    </div>
    
    {productos.length === 0 ? (
      "no hay productos"
    ) : (
      <ResponsiveContainer >

      <Table className='tabla table-responsive' striped bordered hover>
        
      <thead className='subtitulo-tabla'>
        <tr>
          <th >Nombre del Producto</th>
          <th>Categoria</th>
          <th>Descripcion</th>
          <th>Stock</th>
          <th>Precio</th>
          <th className='imagen'>Fecha ultima Modificacion</th>
          <th className='imagen'>Imagen</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((producto) => (
          <tr>
          <td>{producto.name}</td>
          <td>{producto.category}</td>
          <td>{producto.description}</td>
          <td>{producto.stock}</td>
          <td>{producto.price}</td>
          <td>{formatDate(producto.updatedAt)}</td>
          <td><img src={producto.image} style={{ width: '100px', height: '100px' }} /></td>
          <td>
            <Button className='boton-crud' onClick={() => handleEdit(producto)} variant="link"><i class="bi bi-pencil-square"></i></Button>
            <Button className='boton-crud' variant="link" onClick={() => deleteProductos(producto._id)}><i class="bi bi-trash"></i></Button>
          </td>
        </tr>
        ))}
      </tbody>
      
    </Table>
    </ResponsiveContainer>
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

export default TablaProductos;