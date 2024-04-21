import React, {useState} from 'react';
import { Container, Row, Col, Card, Button, ButtonGroup, Form, Modal} from 'react-bootstrap';
import './Login.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import rollingMarketNaranja from '../../assets/img/imgLogin/rollingMarketNaranja.png';
import { Register } from '../../components/register/Register';
import { UsersProvider } from "../../context/UsersContext";
import { useContext } from 'react';
import axios from 'axios';



const Login = () => {
  const [modalShow, setModalShow] = useState(false); // Estado para controlar la visibilidad del modal
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { usuarios } = useContext(UsersProvider);
  console.log(usuarios, "usuarios en el")


  // const login = async (dataform) => {
  //   const response = await axios.post("http://localhost:4000/login/",dataform)
  //   const data = response.data;
  //   console.log(data);
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const formdata = {
  //     email,password
  //   }
  //   login(formdata);
  // }  

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
                  <Form.Control type="password" name ="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} maxLength={25} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
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

export default UsersContext;