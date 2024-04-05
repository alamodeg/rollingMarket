import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image, Button, Stack } from 'react-bootstrap';
import '../navBar/Navigator.css'
import imgCarrito from '../../assets/img/imgNavBar/imgCarrito.png';
import logo3 from '../../assets/img/imgNavBar/logo3.png'



export function Navigator() {
  return (
    <>
      <div className='ms-auto text-center colorDivTopNav' xs={12}><img src={imgCarrito} alt="Carrito_logo" />RollingMarket <img src={imgCarrito} alt="Carrito_logo" /></div>
      {/* probar el cambio de color en el div */}

      <Navbar expand="lg" className="bg-body-secondary p-2">
        <Container fluid>
          <Navbar.Brand href="#home"><Image src={logo3} width={65} height={65} roundedCircle /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav variant='underline'>
              <Nav.Link href="/contacto">Contacto</Nav.Link>
              <Nav.Link href="/quienesSomos">Quienes Somos</Nav.Link>
            </Nav>
            <div className='p-2 ms-auto'>
              
              {/* <Navbar.Text>
                Bienvenido <a href="#login">PANEL DE USUARIO O ADMIN</a>
                 {user ? "Bienvenido" + user.nombre : "NO ESTAS LOGEADO"} 
              </Navbar.Text> */}

            </div>
            <Nav className='p-2 ms-auto' variant='underline'>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
              <Button className='p-2 ms-auto' variant="success">Iniciar Sesión</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};