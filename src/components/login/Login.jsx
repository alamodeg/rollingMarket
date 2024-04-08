import React from 'react';
import { Container, Row, Col, Card, Button, ButtonGroup, Form } from 'react-bootstrap';
import './Login.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Login = () => {
  return (
    <Container fluid>
        <Row>
            <Col>
            <Card>
            <Form className="cardLogin">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Card>
            </Col>
        </Row>
    </Container>
  )
}

export default Login