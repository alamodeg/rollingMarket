import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import error404 from '../../assets/img/imgError404/error404.png';
import Button from 'react-bootstrap/Button';
import './styleError404.css';

const Error404 = () => {
  return (
    <Container fluid className='imgBack justify-content-center align-items-center'>
      <Container>
        <Row className='justify-content-center align-items-center'>
          <div className='col-12 col-md-6 text-center'>
            <img src={error404} className='imgShoppingCart' alt="imagenError404" />
          </div>
          <div className='col-12 col-md-6 text-center mt-2'>
            <h1 className='tittleError'><strong>¡Error 404!</strong>
            <br />
             Página no encontrada</h1>
            <Button variant='link' className='buttomBack'>Volver a la página principal</Button>{' '}
          </div>
        </Row>
      </Container>
    </Container>
  );
}

export default Error404;