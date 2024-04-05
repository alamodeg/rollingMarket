import {Table, Button, Modal} from 'react-bootstrap';
import './tablaProductos.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
const TablaProductos = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <div className='titulo'>
    <h2>Administar Productos</h2>
    </div>
    
    <div>
        <Button variant="primary" className='boton-solo' onClick={handleShow}>
        Agregar Productos
      </Button>
    </div>
 <Table className='tabla' striped bordered hover>
      <thead >
        <tr>
        <th>Nombre del Producto</th>
          <th>Categoria</th>
          <th>Descripcion</th>
          <th>Stock</th>
          <th>Fecha Ultima Modificacion</th>
          <th>Imagen</th>
          <th>Crud</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Coca cola</td>
          <td>Bebida</td>
          <td>Gaseosa 2 Litros</td>
          <td>15</td>
          <td>15/03/2024</td>
          <td></td>
          <td className='fila'><Button className='boton-crud' variant="danger">Eliminar</Button><Button className='boton-crud' variant="danger">Editar</Button></td>
        </tr>
        <tr>
          <td>Coca cola</td>
          <td>Bebida</td>
          <td>Gaseosa 2 Litros</td>
          <td>15</td>
          <td>15/03/2024</td>
          <td></td>
          <td className='fila'><Button className='boton-crud' variant="danger">Eliminar</Button><Button className='boton-crud' variant="danger">Editar</Button></td>
        </tr>
        <tr>
          <td>Coca cola</td>
          <td>Bebida</td>
          <td>Gaseosa 2 Litros</td>
          <td>15</td>
          <td>15/03/2024</td>
          <td></td>
          <td className='fila'><Button className='boton-crud' variant="danger">Eliminar</Button><Button className='boton-crud' variant="danger">Editar</Button></td>
        </tr>
        <tr>
          <td>Coca cola</td>
          <td>Bebida</td>
          <td>Gaseosa 2 Litros</td>
          <td>15</td>
          <td>15/03/2024</td>
          <td></td>
          <td className='fila'><Button className='boton-crud' variant="danger">Eliminar</Button><Button className='boton-crud' variant="danger">Editar</Button></td>
        </tr>
      </tbody>
    </Table>
    


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    
    </>
    
  )
}

export default TablaProductos