import {Table, Button, Modal} from 'react-bootstrap';
import '../tablaProductos/TablaProductos.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useContext } from 'react';
import { ProductsProvider } from '../../context/ProductosContext';
import FormProductos from '../formProductos/FormProductos';

const TablaProductos = () => {

    const {productos} = useContext(ProductsProvider)

    const [mostrarModal, setMostrarModal] = useState(false)
    
    const abrirModal = () => {
      setMostrarModal(true)
    }

    const handleShow = () => setShow(true);
  return (
    <>
    <div className='titulo'>
    <h2>Administar Productos</h2>
    </div>
    
    <div>
        <Button variant="primary" className='boton-solo' onClick={abrirModal}>
        Agregar Productos
      </Button>
      {mostrarModal && <FormProductos onClick={() => setMostrarModal(false)}/>}
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
          
          <td className='fila'><Button className='boton-crud' variant="danger">Eliminar</Button><Button className='boton-crud' variant="danger">Editar</Button></td>
        </tr>
        ))}

      </tbody>
    </Table>
    )}


    
    </>
    
  )
}

export default TablaProductos