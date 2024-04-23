import React, { useState, useContext } from 'react';
import '../register/Register.css';
import { Button, Form, Modal } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import rollingMarketNaranja from '../../assets/img/imgLogin/rollingMarketNaranja.png';
import { UsersProvider } from "../../context/UsersContext";

export function Register(props) {
  // Obtener la función addUser del contexto de usuario
  const { addUser } = useContext(UsersProvider);

  // Declaración de estados para almacenar los valores del formulario
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordc, setPasswordc] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    
    // Crear un objeto con los datos del usuario
    const newUser = {
      name: name,
      surname: surname,
      email: email,
      password: password,
    };

    try {
      // Llamar a la función addUser del contexto de usuario para agregar un nuevo usuario
      await addUser(newUser);
      console.log('Usuario registrado exitosamente');
      // Aquí puedes redirigir al usuario a otra página o mostrar un mensaje de éxito
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
      // Aquí puedes mostrar un mensaje de error al usuario si ocurrió algún problema
    }
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
          <Form className="d-flex d-flex flex-column" onSubmit={handleSubmit}>
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