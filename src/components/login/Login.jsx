import React, {useState} from 'react';
import { Container, Row, Col, Card, Button, ButtonGroup, Form, Modal} from 'react-bootstrap';
import './Login.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import rollingMarketNaranja from '../../assets/img/imgLogin/rollingMarketNaranja.png';
import { Register } from '../../components/register/Register';

// Función de componente para el modal
// function MyVerticallyCenteredModal(props) {
//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           Registro
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//       <div className="d-flex justify-content-center">
//       <img src={rollingMarketNaranja} alt="Imagen de registro" className="imagenRegistro" />
//       </div>
//       <Form className="formLogin d-flex d-flex flex-column">
//                 <Form.Group className="mb-3" controlId="formBasicName">
//                   <Form.Label>Ingresá tu nombre completo</Form.Label>
//                   <Form.Control type="text" placeholder="Nombre y apellido" maxLength={30} />
//                   <Form.Text className="text-muted"></Form.Text>
//                 </Form.Group> 

//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                   <Form.Label>Ingresá tu email</Form.Label>
//                   <Form.Control type="email" placeholder="Email" maxLength={20} />
//                   <Form.Text className="text-muted"></Form.Text>
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                   <Form.Label>Contraseña</Form.Label>
//                   <Form.Control type="password" placeholder="Contraseña" maxLength={20} />
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicPasswordRepeat">
//                   <Form.Label>Vuelva a ingresar su contraseña</Form.Label>
//                   <Form.Control type="password" placeholder="Contraseña" maxLength={20} />
//                 </Form.Group>

//                 <Button variant="primary" className="botonFormLogin mb-4" type="submit">
//                   Registrarme
//                 </Button>
//                 <div>
//                   <p>Haciendo click en “Registrarme”, aceptas las Condiciones generales de uso y la Política de privacidad</p>
//                 </div>
//               </Form>

//       </Modal.Body>
//       <Modal.Footer>
//         <Button className="botonFormLogin" onClick={props.onHide}>Cancelar</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

const Login = () => {
  const [modalShow, setModalShow] = useState(false); // Estado para controlar la visibilidad del modal
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()


  return (
    <div className="bodyLogin">
      <Container fluid className="containerLogin">
        <Row className="justify-content-center">
          <Col className="d-flex justify-content-center colLogin" md={12}>
            <Card className="cardLoginPrincipal align-items-center">
              <img src={rollingMarketNaranja} alt="Imagen de registro" className="imagenRegistro" />
              <Form className="formLogin d-flex d-flex flex-column">
                <div className="opcionContraseñaLogin">
                  <p>
                    ¿Aún no tenes una cuenta?{' '}
                    <a className="etiquetaLogin" href="#" onClick={() => setModalShow(true)}>
                      Solicitá tu alta de usuario
                    </a>
                  </p>
                </div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Ingresá tu email</Form.Label>
                  <Form.Control type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
 name="email" maxLength={20} />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} maxLength={25} />
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

export default Login;