import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image, Button, Modal, Form } from 'react-bootstrap';
import '../navBar/Navigator.css'
import imgCarrito from '../../assets/img/imgNavBar/imgCarrito.png';
import logo3 from '../../assets/img/imgNavBar/logo3.png'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import Login from '../login/Login';




export function Navigator() {

  const [show, setShow] = useState(false);

  // const { logOut } = useContext(UsersProvider);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const { logOut } = useContext(UsersProvider);


  const user = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();

  return (
    <>
      <div className='ms-auto text-center colorDivTopNav' xs={12}><img src={imgCarrito} alt="carrito_logo" />RollingMarket <img src={imgCarrito} alt="Carrito_logo" /></div>


      <Navbar expand="lg" className="bg-body-secondary p-2">
        <Container fluid>
          <Navbar.Brand href="/"><Image src={logo3} width={65} height={65} roundedCircle alt="logo_Grupo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav variant='underline'>
              <Nav.Link href="/contacto">Contacto</Nav.Link>
              <Nav.Link href="/quienesSomos">Quienes Somos</Nav.Link>
            </Nav>

            <div className='ms-auto d-flex align-items-center'>
              <div className='text-center'>
                {user ? `Bienvenido ${user.name}` : <div>!No estas Logeado!</div>}
              </div>
            </div>


            {/* NAVBAR VIEJO QUITAR */}
            {/* <Nav className='p-2 ms-auto' variant='underline'>
              <Button className='p-2 ms-auto' variant="success" onClick={handleShow}>Iniciar Sesión</Button>
            </Nav> */}
            {/* FIN DEL NAVBAR VIEJO A QUITAR */}

            <Form className="ms-auto">
              <Nav>
                {user ? (
                  user.rol === 'admin' ? (
                    <Nav.Link onClick={() => navigate("/admin")}>
                      Administrador
                    </Nav.Link>
                  ) : (
                    <Nav.Link onClick={() => navigate("/user-menu")}>
                      Usuario
                    </Nav.Link>
                  )
                ) : (
                  <Button className='p-2 ms-auto' variant="success" onClick={handleShow}>
                    Iniciar Sesión
                  </Button>
                )}
                {user ? (
                  <Button variant="danger" onClick={() => logOut()}>
                    Cerrar Sesión
                  </Button>
                ) : null}
              </Nav>
            </Form>

          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Login handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
};