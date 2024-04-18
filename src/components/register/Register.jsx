import React, { useState, useContext } from 'react';
import '../register/Register.css';
import { Button, Form, Modal} from 'react-bootstrap';
import UserContext from '../../context/UsersContext'; // Importa el contexto de usuario
import 'bootstrap-icons/font/bootstrap-icons.css';
import rollingMarketNaranja from '../../assets/img/imgLogin/rollingMarketNaranja.png';

const Register = (props) => {
  const { addUser } = useContext(UserContext); // Obtiene la función addUser del contexto de usuario

  const [name, setName] = useState(''); // Define el estado para el nombre
  const [email, setEmail] = useState(''); // Define el estado para el email
  const [password, setPassword] = useState(''); // Define el estado para la contraseña
  const [passwordRepeat, setPasswordRepeat] = useState(''); // Define el estado para repetir la contraseña

  const handleRegister = () => {
    // Aquí puedes realizar cualquier validación adicional antes de agregar el usuario
    const newUser = {
      name,
      email,
      password,
    };

    // Llama a la función addUser del contexto de usuario para agregar el nuevo usuario
    addUser(newUser);

    // Cierra el modal de registro
    props.onHide();
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
              <Form.Label>Ingresá tu nombre completo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre y apellido"
                maxLength={30}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Ingresá tu email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                maxLength={20}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                maxLength={20}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPasswordRepeat">
              <Form.Label>Vuelva a ingresar su contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                maxLength={20}
                value={passwordRepeat}
                onChange={(e) => setPasswordRepeat(e.target.value)}
              />
            </Form.Group>

            <Button
              variant="primary"
              className="botonFormLogin mb-4"
              type="button" // Cambiado a type="button" para prevenir el envío del formulario
              onClick={handleRegister} // Llama a la función para manejar el registro
            >
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

export default Register;
