import { useContext, useState } from 'react'
import { ProductsProvider } from '../../context/ProductosContext'
import { Table,Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const TablaProductos = () => {

    const {productos, deleteProducto} = useContext(ProductsProvider);

    return (
    
    <>

      {productos.length === 0 ? (
        <h2>El local no tiene ningún producto para mostrar</h2>
      ) : (
        <>
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Imagen</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {productos.map(producto => (
                <tr key={producto.id}>
                  <td>{producto.id}</td>
                  <td>{producto.name}</td>
                  <td>{producto.price}</td>
                  <td><img src={producto.image} style={{ width: '100px', height: '100px' }} /></td>
                  <td>
                    <Button variant="warning">Editar</Button>
                    <Button variant="danger" onClick={() => deleteProducto(producto.id)}> Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </>
    
  )
}

export default TablaProductos