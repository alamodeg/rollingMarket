import { useState } from 'react';
import {Form, Button, Modal} from 'react-bootstrap'

function FormularioProductos() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Nuevo Producto
      </Button>

      {/* <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Nuevo Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <Form on>
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

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal> */}
    </>
  );
}

export default FormularioProductos;