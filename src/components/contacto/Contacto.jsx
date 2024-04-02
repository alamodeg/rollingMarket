import React from 'react';
import '../contacto/Contacto.css'
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';



export function Contacto() {
  return (
    <>
      <Container fluid className='p-0'>
        <img className='imgContacto' src="https://masonlineprod.vtexassets.com/assets/vtex.file-manager-graphql/images/78d545f7-7217-4cba-8914-94e9f6b27c8c___40719512d07ec389bd37898afab91c2e.png" alt="imagenSuperiorContacto" />
      </Container>

      <div className='pieFotoContacto mt-0 mb-4 p-2 bg-body-secondary'>
        <a className='segundoNavContacto' href="#" variant='nav-underline'>Preguntas Frecuentes</a>
        <a className='segundoNavContacto' href="#">Sucursales y métodos de entrega</a>
        <a className='segundoNavContacto' href="#">Medios de Contacto</a>
        <a className='segundoNavContacto' href="#">Política de Privacidad</a>
      </div>


      <Container className='mt-3 p-2 containerContacto'>
        <Row>
          <Col md={6}>
            <div className='p-2'>
              <iframe className='iframeMaps' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14240.187713396721!2d-65.21420511645508!3d-26.838459654448318!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses-419!2sar!4v1711827232447!5m2!1ses-419!2sar" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </Col>

          <Col md={6}>
            <div className='mt-2 p-2 divFormContacto' /*style={{ border: '2px solid black', borderRadius: '10px' }}*/>
              <Form className='formContacto'>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="juanperez@hotmail.com" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label className='mt-3'>Dejanos tu consulta!</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder='Consulta' maxLength={155} minLength={10} />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox" className='p-2'>
                  <Form.Check className='d-flex justify-content-center pb-2' type="checkbox" label="Estoy de acuerdo con los terminos y condiciones" />
                </Form.Group>
                <Button variant='success' type="submit">
                  Enviar Consulta
                </Button>
              </Form>
              <div className='d-flex justify-content-center text-center
          align-items-center m-3 p-3'>
                Comunicate de manera gratuita llamando al 0381 578-3030 de lunes a sábados de 8 a 21 hs.
              </div>

            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid className='imagenFondoPieContacto mt-5 mb-5'>
        <Row>
          <Col xs={12} md={4}>
            <Card className="text-center mb-3 p-2 cardFondoContacto">
              <Card.Header className='cardFondoContacto'>
                <Card.Title>Demo de Prueba para tu sitio</Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  Reserva tu demo y proba tu sitio web con un solo click!.
                </Card.Text>
                <Button variant="dark">Click Aquí!</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="text-center mb-3 p-2 cardFondoContacto">
            <Card.Header className='cardFondoContacto'>
                <Card.Title>Nuestro Centro de Ayuda</Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  Comunicate con nuestros asesores de forma inmediata.
                </Card.Text>
                <Button variant="dark">Click Aquí!</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="text-center mb-3 p-2 cardFondoContacto">
            <Card.Header className='cardFondoContacto'>
                <Card.Title>Unite a nuestro proyecto</Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  Forma parte de nuestro equipo para futuros desarrollos.
                </Card.Text>
                <Button variant="dark">Click Aquí!</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    </>
  );
};