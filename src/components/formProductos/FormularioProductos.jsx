import { useContext, useState } from 'react';
import {Form, Button, Modal} from 'react-bootstrap'
import { ProductsProvider } from '../../context/ProductosContext';
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2';

function FormularioProductos() {

  const {addProducto} = useContext(ProductsProvider)


  //COMPORTAMIENTO DEL MODAL
    const [show, setShow] = useState(false);
    const handleClose = () => { //REINICIAR EL MODAL AL CERRARLO
      setProducto({
        id: uuidv4(),
        name: "",
        description: "",
        category: "",
        price: "",
        stock: "",
        image: ""
      });
      setShow(false);
    };
    
    const handleShow = () => setShow(true);
  //------------------------------------------

  const [producto, setProducto] = useState({
    id: uuidv4(),
    name: "",
    description: "",
    category: "",
    price: "",
    stock: "",
    image: ""
  });

  const handleChange = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    addProducto(producto);
    Swal.fire({
      title: "Producto agregado!",
      icon: "success"
    });
    setProducto({
      id: uuidv4(),
      name: "",
      description: "",
      category: "",
      price: "",
      stock: "",
      image: ""
    });

  }

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Nuevo Producto
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title variant="success">Nuevo Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text"
                value={producto.name}
                onChange= { handleChange } 
                name="name" 
                placeholder= "Tu Producto" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Descripcion</Form.Label>
                <Form.Control type="text"
                value={producto.description}
                onChange= { handleChange } 
                name="description"/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Categoria</Form.Label>
                <Form.Control type="string"
                value={producto.category} 
                onChange= { handleChange }
                name="category" 
                placeholder = "Herramientas" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Precio</Form.Label>
                <Form.Control type="number"
                value={producto.price} 
                onChange= { handleChange }
                name="price" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Imagen</Form.Label>
                <Form.Control type="string"
                value={producto.image} 
                onChange= { handleChange } 
                name="image" />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  );
}

export default FormularioProductos;