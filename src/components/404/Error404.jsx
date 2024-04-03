import './styleError404.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import error404 from '../../assets/img/imgError404/error404.png';
import Button from 'react-bootstrap/Button';

const Error404 = () => {
  return (
    <Container fluid className='imgBack d-flex justify-content-center align-items-center'>
      <main>
        <Row className='justify-content-center align-items-center'>
          <div className='col-12 col-md-6 text-center'>
            <img src={error404} className='imgShoppingCart' alt="imagenError404" />
          </div>
          <div className='col-12 col-md-6 text-center'>
            <h1 className='tittleError'>Ups! <strong>404</strong>: Página no encontrada</h1>
            <Button className='buttomBack'>Volver a la página principal</Button>{' '}
          </div>
        </Row>
      </main>
    </Container>
  );
}

export default Error404;