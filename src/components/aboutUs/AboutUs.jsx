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
      <Row className="cardPrincipalAboutUs">
        {/* Tarjeta Principal */}
        <Col md={12} className="d-flex justify-content-center">
          <Card className="cardPrincipal card-principal-hover">
            <Card.Body>
              <Card.Text>
              Somos Rolling Coders, un equipo apasionado de desarrolladores web dedicados a crear soluciones digitales innovadoras. Nuestra misión es proporcionar a nuestros clientes experiencias excepcionales y aplicaciones efectivas, colaborando estrechamente con ellos para materializar su visión. Nos comprometemos con la excelencia técnica y la atención al detalle, adaptándonos constantemente a las últimas tendencias tecnológicas. Más que construir sitios y aplicaciones, forjamos asociaciones duraderas. Estamos preparados para enfrentar nuevos desafíos y crecer juntos. ¡Únete a nosotros en este emocionante viaje hacia el mundo de las posibilidades digitales!             
              </Card.Text>
              <Button variant="primary" className="botonCardPrincipalAboutUs">Conocer más</Button>

            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        {/* Primera fila con tres tarjetas miembros*/}
        <Col md={4} className="d-flex justify-content-center">
          <Card className="cardSecundaria">
            <Card.Img variant="top" src={Jorge} />
            <Card.Body>
              <Card.Title>Jorge Medina</Card.Title>
              <Card.Text>
              ¡Hola! Soy Jorge, tengo 30 años y me encuentro inmerso en mi formación en Ingeniería en Sistemas de Información. Desde joven, he estado fascinado por la tecnología y cómo puede transformar nuestras vidas. Mi experiencia y dedicación se reflejan en mi trabajo en Rolling Coders, donde me enorgullece formar parte de un equipo que constantemente desafía los límites de la creatividad y la innovación.
              </Card.Text>
              <ButtonGroup className="button-group-hover">
                <Button variant="primary" className="botonCardSecuAboutUs rounded-circle mx-1"><i className="bi bi-github"></i></Button>
                <Button variant="primary" className="botonCardSecuAboutUs rounded-circle mx-1"><i className="bi bi-linkedin"></i></Button>
                <Button variant="primary" className="botonCardSecuAboutUs rounded-circle mx-1"><i className="bi bi-instagram"></i></Button>
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
              Saludos, soy Ignacio, un apasionado de la programación de 21 años. Estoy actualmente estudiando Tecnicatura en Programación, y cada día descubro nuevas posibilidades dentro del mundo del código. En Rolling Coders, encuentro un espacio para poner en práctica mis habilidades y aprender de mis compañeros, contribuyendo así a la creación de soluciones digitales que realmente impacten positivamente en la vida de las personas.
              </Card.Text>
              <ButtonGroup className="button-group-hover">
                <Button variant="primary" className="botonCardSecuAboutUs rounded-circle mx-1"><i className="bi bi-github"></i></Button>
                <Button variant="primary" className="botonCardSecuAboutUs rounded-circle mx-1"><i className="bi bi-linkedin"></i></Button>
                <Button variant="primary" className="botonCardSecuAboutUs rounded-circle mx-1"><i className="bi bi-instagram"></i></Button>
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
              Hola, soy Gabriel. Tengo 22 años y actualmente estoy estudiando Ingeniería Geodésica. Desde que descubrí mi pasión por la programación, he encontrado una forma de combinar mis habilidades técnicas con mi interés por resolver problemas. En el equipo de Rolling Coders, me encanta contribuir con mi entusiasmo y conocimientos para crear soluciones digitales innovadoras.
              </Card.Text>
              <ButtonGroup className="button-group-hover">
                <Button variant="primary" className="botonCardSecuAboutUs rounded-circle mx-1"><i className="bi bi-github"></i></Button>
                <Button variant="primary" className="botonCardSecuAboutUs rounded-circle mx-1"><i className="bi bi-linkedin"></i></Button>
                <Button variant="primary" className="botonCardSecuAboutUs rounded-circle mx-1"><i className="bi bi-instagram"></i></Button>
              </ButtonGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="segundaFilaCardsAboutUs">
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
                <Button variant="primary" className="botonCardSecuAboutUs rounded-circle mx-1"><i className="bi bi-github"></i></Button>
                <Button variant="primary" className="botonCardSecuAboutUs rounded-circle mx-1"><i className="bi bi-linkedin"></i></Button>
                <Button variant="primary" className="botonCardSecuAboutUs rounded-circle mx-1"><i className="bi bi-instagram"></i></Button>
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
                <Button variant="primary" className="botonCardSecuAboutUs rounded-circle mx-1"><i className="bi bi-github"></i></Button>
                <Button variant="primary" className="botonCardSecuAboutUs rounded-circle mx-1"><i className="bi bi-linkedin"></i></Button>
                <Button variant="primary" className="botonCardSecuAboutUs rounded-circle mx-1"><i className="bi bi-instagram"></i></Button>
              </ButtonGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

