import React, { useState } from 'react';
import '../register/Register.css';
import { Button, Form, Modal } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import rollingMarketNaranja from '../../assets/img/imgLogin/rollingMarketNaranja.png';
import { UsersProvider } from "../../context/UsersContext";
import { useContext } from 'react';

export function Register(props) {
  // Declaración de estados para almacenar los valores del formulario
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordc, setPasswordc] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    // Aquí puedes utilizar los valores de las constantes para lo que necesites, como enviar una solicitud al servidor, por ejemplo.
    console.log('Nombre:', name);
    console.log('Apellido:', surname);
    console.log('Email:', email);
    console.log('Contraseña:', password);
    console.log('Confirmación de contraseña:', passwordc);
  };

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
              <Form.Label>Ingresá tu nombre</Form.Label>
              <Form.Control type="text" placeholder="Nombre" maxLength={30} onChange={(e) => setName(e.target.value)} />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicSurname">
              <Form.Label>Ingresá tu apellido</Form.Label>
              <Form.Control type="text" placeholder="Apellido" maxLength={30} onChange={(e) => setSurname(e.target.value)} />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Ingresá tu email</Form.Label>
              <Form.Control type="email" placeholder="Email" maxLength={50} onChange={(e) => setEmail(e.target.value)} />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Contraseña" maxLength={20} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPasswordRepeat">
              <Form.Label>Vuelva a ingresar su contraseña</Form.Label>
              <Form.Control type="password" placeholder="Contraseña" maxLength={20} onChange={(e) => setPasswordc(e.target.value)} />
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
}