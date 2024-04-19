import React from 'react'
import '../register/Register.css';
import { Button, Form, Modal} from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import rollingMarketNaranja from '../../assets/img/imgLogin/rollingMarketNaranja.png';
import { UsersProvider } from "../../context/UsersContext";
import { useContext } from 'react';

export function Register (props) {
  return (
    <>
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Registro
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className="d-flex justify-content-center">
      <img src={rollingMarketNaranja} alt="Imagen de registro" className="imagenRegistro" />
      </div>
      <Form className="d-flex d-flex flex-column">
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Ingresá tu nombre completo</Form.Label>
                  <Form.Control type="text" placeholder="Nombre y apellido" maxLength={30} />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group> 

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Ingresá tu email</Form.Label>
                  <Form.Control type="email" placeholder="Email" maxLength={20} />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control type="password" placeholder="Contraseña" maxLength={20} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPasswordRepeat">
                  <Form.Label>Vuelva a ingresar su contraseña</Form.Label>
                  <Form.Control type="password" placeholder="Contraseña" maxLength={20} />
                </Form.Group>

                <Button variant="primary" className="botonFormLogin mb-4" type="submit">
                  Registrarme
                </Button>
                <div>
                  <p>Haciendo click en “Registrarme”, aceptas las Condiciones generales de uso y la Política de privacidad</p>
                </div>
              </Form>

      </Modal.Body>
      <Modal.Footer>
        <Button className="botonFormLogin" onClick={props.onHide}>Cancelar</Button>
      </Modal.Footer>
    </Modal>

    </>
  );
};