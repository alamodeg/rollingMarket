import {Table, Button} from 'react-bootstrap';
import './tablaUsuarios.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const TablaUsuarios = () => {
  return (
    <>
        <div>
    <h2>Administar Usuarios</h2>
    </div>
    <Table striped bordered hover>
    <thead >
      <tr >
      <th>Email</th>
        <th>Rol</th>
        <th>Estado</th>
        <th>Crud</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Admin@admin.com</td>
        <td>Administrador</td>
        <td>Aprobado</td>
        <td className='fila'><Button className='boton-crud' variant="danger">Eliminar</Button></td>
      </tr>
      <tr>
        <td>Usuario@usuario.com</td>
        <td>Empleado</td>
        <td>Pendiente</td>
        <td className='fila'><Button className='boton-crud' variant="danger">Eliminar</Button></td>
      </tr>
      <tr>
        <td>Usuario1@usuario.com</td>
        <td>Empleado</td>
        <td>Restringido</td>
        <td className='fila'><Button className='boton-crud' variant="danger">Eliminar</Button></td>
      </tr>
    </tbody>
  </Table>
  </>
  )
}

export default TablaUsuarios