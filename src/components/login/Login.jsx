import React, { useState, useContext } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import './Login.css';
import { Register } from '../../components/register/Register';
import { UsersProvider } from "../../context/UsersContext";
import axios from 'axios';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import rollingMarketNaranja from '../../assets/img/imgLogin/rollingMarketNaranja.png';
import { useEffect } from 'react';

const Login = ({ handleClose }) => {
  const [modalShow, setModalShow] = useState(false); // Estado para controlar la visibilidad del modal
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const { usuarios = [] } = useContext(UsersProvider); // Asigna un array vacío por defecto si `usuarios` no está definido

  const { loginUsuario, usuarioLogueado } = useContext(UsersProvider);

  console.log(usuarioLogueado, "usuarios en el login");

  const navigate = useNavigate();

  useEffect(() => {
    if (usuarioLogueado) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Bienvenido",
        showConfirmButton: false,
        timer: 1500,
      });

      const usuario = {
        name: usuarioLogueado.name,
        surname: usuarioLogueado.surname,
        email: usuarioLogueado.email,
        rol: usuarioLogueado.rol,
      };

      localStorage.setItem("user", JSON.stringify(usuario));
      
      handleClose();
    } 
  }, [usuarioLogueado, handleClose]);

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      loginUsuario({ email, password });
    } catch (error) {
      console.log(error);
    }
  };


  
  return (
    <>
    <div className="bodyLogin">
      <Container fluid className="containerLogin">
        <Row className="justify-content-center">
          <Col className="d-flex justify-content-center colLogin" md={12}>
            <Card className="cardLoginPrincipal align-items-center">
              <img src={rollingMarketNaranja} alt="Imagen de registro" className="imagenRegistro" />
              <Form onSubmit={handleSubmit} className="formLogin d-flex d-flex flex-column">
                <div className="opcionContraseñaLogin">
                  <p>
                    ¿Aún no tienes una cuenta?{' '}
                    <a className="etiquetaLogin" href="#" onClick={() => setModalShow(true)}>
                      Solicita tu alta de usuario
                    </a>
                  </p>
                </div>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Ingresa tu email</Form.Label>
                  <Form.Control name="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} maxLength={50} />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control type="password" name="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} maxLength={25} />
                </Form.Group>
                <Button variant="primary" className="botonFormLogin mb-4" type="submit">
                  Ingresar
                </Button>
                <div className="opcionRegistro">
                  <p>
                    ¿Olvidaste tu contraseña?{' '}
                    <a className="etiquetaLogin" href="#">
                      Recupera tu cuenta
                    </a>
                  </p>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
      <Register show={modalShow} onHide={handleClose} />
    </div>
    </>
  );
};

export default Login;








  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const user = usuarios.find((user) => user.email === email && user.password === password);
  //     console.log(user, "-----------------ESTE ES EL USER-----------------")

  //     console.log(user, "user");
  //     // if (user) {
  //     //   Swal.fire({
  //     //     position: "center",
  //     //     icon: "success",
  //     //     title: "Bienvenido",
  //     //     showConfirmButton: false,
  //     //     timer: 1500,
  //     //   });

  //     //   localStorage.setItem("user", JSON.stringify(user));
  //     //   navigate("/contacto");
  //     //   handleClose();
  //     // } else {
  //     //   Swal.fire({
  //     //     position: "center",
  //     //     icon: "error",
  //     //     title: "Usuario o contraseña incorrectos",
  //     //     showConfirmButton: false,
  //     //     timer: 1500,
  //     //   });
  //     // }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
