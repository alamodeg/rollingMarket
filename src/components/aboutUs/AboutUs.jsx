import React from 'react';
import { Container, Row, Col, Card, Button, ButtonGroup } from 'react-bootstrap';
import './AboutUs.css';
import Nacho from '../../assets/img/imgAboutUs/Nacho.png';
import Julian from '../../assets/img/imgAboutUs/Julian.png';
import Gabriel from '../../assets/img/imgAboutUs/Gabriel.png';
import Jorge from '../../assets/img/imgAboutUs/Jorge.png';
import Alvaro from '../../assets/img/imgAboutUs/Alvaro.png';
import fondo from '../../assets/img/imgAboutUs/fondo.png';
import 'bootstrap-icons/font/bootstrap-icons.css';

export function AboutUs () {
  return (
    <Container fluid>
      <Row>
        {/* Tarjeta Principal */}
        <Col md={12}>
          <Card className="cardPrincipal card-principal-hover">
            <Card.Body>
              <Card.Text>
                Somos un apasionado grupo de desarrolladores web comprometidos con la creación de soluciones digitales innovadoras. En nuestro equipo, nos identificamos como Rolling Coders, y nuestra misión es ofrecer a nuestros clientes experiencias web excepcionales y aplicaciones que satisfagan sus necesidades de manera efectiva. En Rolling Coders, comprendemos la importancia de comprender las metas y aspiraciones de nuestros clientes. Nos esforzamos por ir más allá de las expectativas, colaborando estrechamente con cada cliente para garantizar que cada proyecto sea una expresión auténtica de su visión. Nuestro compromiso con la excelencia técnica y la atención al detalle nos impulsa a alcanzar estándares de calidad superiores en cada línea de código que escribimos. Nos emociona presentar este proyecto como un reflejo de nuestra pasión y dedicación al mundo del desarrollo web. Estamos ansiosos por demostrar nuestra capacidad para transformar ideas en realidad digital, abordando desafíos con soluciones creativas y adaptándonos constantemente a las últimas tendencias tecnológicas. En Rolling Coders, no solo construimos sitios web y aplicaciones; construimos asociaciones duraderas con nuestros clientes. Estamos listos para enfrentar nuevos desafíos, aprender y crecer juntos. Gracias por ser parte de nuestro viaje y explorar el mundo de las posibilidades que ofrecemos.
              </Card.Text>
              <Button variant="primary" style={{ backgroundColor: '#FF5733', borderColor: '#FF5733' }}>Conocer más</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        {/* Primera fila con tres tarjetas */}
        <Col md={4} className="d-flex justify-content-center">
          <Card className="cardSecundaria">
            <Card.Img variant="top" src={Jorge} />
            <Card.Body>
              <Card.Title>Jorge Medina</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <ButtonGroup className="button-group-hover">
                <Button variant="primary" className="rounded-circle mx-1" style={{ backgroundColor: '#FF5733', borderColor: '#FF5733' }}><i className="bi bi-github"></i></Button>
                <Button variant="primary" className="rounded-circle mx-1" style={{ backgroundColor: '#FF5733', borderColor: '#FF5733' }}><i className="bi bi-linkedin"></i></Button>
                <Button variant="primary" className="rounded-circle mx-1" style={{ backgroundColor: '#FF5733', borderColor: '#FF5733' }}><i className="bi bi-instagram"></i></Button>
              </ButtonGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="d-flex justify-content-center">
          <Card className="cardSecundaria">
            <Card.Img variant="top" src={Nacho} />
            <Card.Body>
              <Card.Title>Ignacio Skibski</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <ButtonGroup className="button-group-hover">
                <Button variant="primary" className="rounded-circle mx-1" style={{ backgroundColor: '#FF5733', borderColor: '#FF5733' }}><i className="bi bi-github"></i></Button>
                <Button variant="primary" className="rounded-circle mx-1" style={{ backgroundColor: '#FF5733', borderColor: '#FF5733' }}><i className="bi bi-linkedin"></i></Button>
                <Button variant="primary" className="rounded-circle mx-1" style={{ backgroundColor: '#FF5733', borderColor: '#FF5733' }}><i className="bi bi-instagram"></i></Button>
              </ButtonGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="d-flex justify-content-center">
          <Card className="cardSecundaria">
            <Card.Img variant="top" src={Gabriel} />
            <Card.Body>
              <Card.Title>Gabriel Urueña</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <ButtonGroup className="button-group-hover">
                <Button variant="primary" className="rounded-circle mx-1" style={{ backgroundColor: '#FF5733', borderColor: '#FF5733' }}><i className="bi bi-github"></i></Button>
                <Button variant="primary" className="rounded-circle mx-1" style={{ backgroundColor: '#FF5733', borderColor: '#FF5733' }}><i className="bi bi-linkedin"></i></Button>
                <Button variant="primary" className="rounded-circle mx-1" style={{ backgroundColor: '#FF5733', borderColor: '#FF5733' }}><i className="bi bi-instagram"></i></Button>
              </ButtonGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        {/* Segunda fila con dos tarjetas */}
        <Col md={6} className="d-flex justify-content-center">
          <Card className="cardSecundaria">
            <Card.Img variant="top" src={Julian} />
            <Card.Body>
              <Card.Title>Julián Martin</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <ButtonGroup className="button-group-hover">
                <Button variant="primary" className="rounded-circle mx-1" style={{ backgroundColor: '#FF5733', borderColor: '#FF5733' }}><i className="bi bi-github"></i></Button>
                <Button variant="primary" className="rounded-circle mx-1" style={{ backgroundColor: '#FF5733', borderColor: '#FF5733' }}><i className="bi bi-linkedin"></i></Button>
                <Button variant="primary" className="rounded-circle mx-1" style={{ backgroundColor: '#FF5733', borderColor: '#FF5733' }}><i className="bi bi-instagram"></i></Button>
              </ButtonGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="d-flex justify-content-center">
          <Card className="cardSecundaria">
            <Card.Img variant="top" src={Alvaro} />
            <Card.Body>
              <Card.Title>Alvaro Deguer</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <ButtonGroup className="button-group-hover">
                <Button variant="primary" className="rounded-circle mx-1" style={{ backgroundColor: '#FF5733', borderColor: '#FF5733' }}><i className="bi bi-github"></i></Button>
                <Button variant="primary" className="rounded-circle mx-1" style={{ backgroundColor: '#FF5733', borderColor: '#FF5733' }}><i className="bi bi-linkedin"></i></Button>
                <Button variant="primary" className="rounded-circle mx-1" style={{ backgroundColor: '#FF5733', borderColor: '#FF5733' }}><i className="bi bi-instagram"></i></Button>
              </ButtonGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

