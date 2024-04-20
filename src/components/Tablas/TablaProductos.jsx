import { useContext, useState } from 'react'
import { ProductsProvider } from '../../context/ProductosContext'
import { Table,Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'

const TablaProductos = () => {

    const {productos} = useContext(ProductsProvider);


    const [nombre, setNombre] = useState(); //mover a otro lado
    const [precio, setPrecio] = useState(); //mover a otro lado

    const handleSubmit = (e) => {  //mover a otro lado
        e.preventDefault();
        console.log("Formulario enviado")
    }


    console.log(nombre,precio)

    return (
    
    <>

        <Form onSubmit={handleSubmit}> {/*MOVER A OTRO LADO*/}
            <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text"
                value={nombre}
                onChange={(e) => {
                    setNombre(e.target.value)
                }} 
                name="nombre" 
                placeholder= "Juan Perez" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Precio</Form.Label>
                <Form.Control type="number"
                value={precio}
                onChange={(e) => {
                    setPrecio(e.target.value)
                }}
                name="precio" 
                placeholder= "1000" />
            </Form.Group>
            <Button variant="success" type="submit">Nuevo Producto</Button>
        </Form>


      {productos.length === 0 ? (
        <h2>El local no tiene ningún producto para mostrar</h2>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {productos.map(producto => (
                <tr key={producto.id}>
                  <td>{producto.id}</td>
                  <td>{producto.name}</td>
                  <td>{producto.price}</td>
                  <td>
                    <Button variant="warning">Editar</Button>
                    <Button variant="danger"> Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
    
  )
}

export default TablaProductos