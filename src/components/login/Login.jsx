import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, ButtonGroup, Form, Modal } from 'react-bootstrap';
import './Login.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import rollingMarketNaranja from '../../assets/img/imgLogin/rollingMarketNaranja.png';
import { Register } from '../../components/register/Register';
import { UsersProvider } from "../../context/UsersContext";
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

const Login = ({ handleClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalShow, setModalShow] = useState(false);


  const { loginUsuario, usuarioLogueado, usuarios } = useContext(UsersProvider);
  console.log(usuarioLogueado,"ESTE ES UN CLG DE usuarioLogueado ");
  console.log(usuarios,"ESTE ES UN CLG DE usuarios");

  const navigate = useNavigate();

  useEffect(() => {
    if (usuarioLogueado) {



      // console.log(usuarios,"----TODOS LOS USUARIOS SON : ----");
      // console.log(email,"ESTE ES EL EMAIL")
      // console.log(password,"ESTE ES EL PASSWOORD")

      // const user = usuarios.find(
      //   (user) => user.email === email && user.password === password
      // );
      // console.log(user,"____________________")
        const usuario = {
          name: usuarioLogueado.name,
          surname: usuarioLogueado.surname,
          email: usuarioLogueado.email,
          rol: usuarioLogueado.rol,
        };
        localStorage.setItem("user", JSON.stringify(usuario));
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Bienvenido",
          showConfirmButton: false,
          timer: 1500,
        });
        // handleClose();
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
    <div className="bodyLogin">
      <Container fluid className="containerLogin">
        <Row className="justify-content-center">
          <Col className="d-flex justify-content-center colLogin" md={12}>
            <Card className="cardLoginPrincipal align-items-center">
              <img src={rollingMarketNaranja} alt="Imagen de registro" className="imagenRegistro" />
              <Form onSubmit={handleSubmit} className="formLogin d-flex d-flex flex-column">
                <div className="opcionContraseñaLogin">
                  <p>
                    ¿Aún no tenes una cuenta?{' '}
                    <a className="etiquetaLogin" href="#" onClick={() => setModalShow(true)}>
                      Solicitá tu alta de usuario
                    </a>
                  </p>
                </div>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Ingresá tu email</Form.Label>
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
      <Register show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default Login;