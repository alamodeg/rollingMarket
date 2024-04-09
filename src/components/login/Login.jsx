import React from 'react';
import { Container, Row, Col, Card, Button, ButtonGroup, Form } from 'react-bootstrap';
import './Login.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Login = () => {
  return (
    <body className="bodyLogin"> 
      <Container fluid className="containerLogin">
        <Row className="justify-content-center">
          <Col className="d-flex justify-content-center colLogin" md={12} > 
            <Card className="cardLoginPrincipal align-items-center">
              <Form className="formLogin d-flex d-flex flex-column">
              <div className="opcionContraseñaLogin">
                <p>¿Aún no tenes una cuenta? <a className="etiquetaLogin"href="#" >Solicitá tu alta de usuario</a></p>
              </div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Ingresá tu email</Form.Label>
                  <Form.Control type="email" placeholder="Email" />
                  <Form.Text className="text-muted">
                  </Form.Text>
                </Form.Group>
  
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control type="password" placeholder="Contraseña" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" className="botonFormLogin mb-4" type="submit">
                  Ingresar
                </Button>
              <div className="opcionRegistro">
                <p>¿Olvidaste tu contraseña? <a className="etiquetaLogin"href="#" >Recupera tu cuenta</a></p>
              </div>

              </Form>
             
            </Card>
          </Col>
        </Row>
      </Container>
    </body>
  ) 
}

export default Login