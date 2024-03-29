// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// export function Contacto() {
//   return (
//     <Container>
//       {/* <Row>
//         <div className='border m-1 p-1 justify-content-center'>
//             <Col className=''>FORMULARIO</Col>
//             <Col>IFRAME MAPS</Col>
//         </div>
//       </Row> */}


//     </Container>
//   );
// };


import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export function Contacto() {
  return (

    <Container>
      <Row>
        <Col md={5}>
          <div className='m-1 p-2 border-5 '>
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387241.748510362!2d-74.2598669!3d40.6971494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20USA!5e0!3m2!1sen!2s!4v1646824434910!5m2!1sen!2s"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          </div>
        </Col>

        <Col md={5}>
          <div className='m-1 p-2 border-1 '>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};