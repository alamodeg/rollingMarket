import {Table, Button, Modal, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useContext, useState } from 'react';
import { UsersProvider } from '../../context/UsersContext';
import '../' //ELIMINAR LUEGO




const TablaUsuarios = () => {

    const {usuarios} = useContext(UsersProvider)

  return (

    <>

    <Table className='tabla' striped bordered hover>
            
            <thead>
              <tr className='subtitulo-tabla'>
                <th >Usuario</th>
                <th>Apellido</th>
                <th>Role</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rey Julien</td>
                <td>Rosameltrozo</td>
                <td>Admin</td>
                <td>rosalemo@gmail.com</td>
              </tr>
              <tr>
                <td>Jorge</td>
                <td>Avalos</td>
                <td>Usuario</td>
                <td>jorge@mail.com</td>
              </tr>
            </tbody>
            
          </Table>
    
    {usuarios.length === 0 ? (
      <h1 className="text-center">No hay usuarios para mostrar</h1>
    ) : (
      <Container >

    <Table className='tabla table-responsive' striped bordered hover>
        
      <thead>
        <tr className='subtitulo-tabla'>
          <th >Usuario</th>
          <th>Apellido</th>
          <th>Role</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {usuarios.map((usuario) => (
          <tr className='contenido-tabla'>
            <td>{usuario.name}</td>
            <td>{usuario.surname}</td>
            <td>{usuario.rol}</td>
            <td>{usuario.email}</td>
          </tr>
        ))}
        <tr>
          <td>Rey Julien</td>
          <td>Rosameltrozo</td>
          <td>Admin</td>
          <td>rosalemo@gmail.com</td>
        </tr>
        <tr>
          <td>Jorge</td>
          <td>Avalos</td>
          <td>Usuario</td>
          <td>jorge@mail.com</td>
        </tr>
      </tbody>
      
    </Table>
    </Container>
    )}
      
    </>
    
  )
}

export default TablaUsuarios