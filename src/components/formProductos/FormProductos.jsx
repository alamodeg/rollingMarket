import {useContext, useState} from 'react'
import { Button, Form, InputGroup} from 'react-bootstrap';
import { ProductsProvider } from '../../context/ProductosContext';

import Swal from 'sweetalert2';

const FormProductos = ({editarProductos, handleClose}) => {

  const {addProducto, updateProductos} = useContext(ProductsProvider)

  const [producto, setProducto] = useState({
    id: editarProductos ? editarProductos._id : (null),
    name: editarProductos ? editarProductos.name : "",
    description: editarProductos ? editarProductos.description: "",
    category: editarProductos ? editarProductos.category : "",
    price: editarProductos ? editarProductos.price : "",
    stock: editarProductos ? editarProductos.stock : "",
    image: editarProductos ? editarProductos.image : ""
  })

  const handleChange = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value
    })
  }


  

  const handleSubmit = (e) =>{
    e.preventDefault()
    if (editarProductos) {
      updateProductos(producto)
      handleClose()
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Producto Editado",
        showConfirmButton: false,
        timer: 1500,
      });
      setProducto({
        _id: "",
        name: "",
        description: "",
        category: "",
        price: "",
        stock: "",
        image: ""
      })
    }else {
      addProducto(producto);
      handleClose()
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Producto Agregado",
        showConfirmButton: false,
        timer: 1500,
      });
      setProducto({
        _id: "",
        name: "",
        description: "",
        category: "",
        price: "",
        stock: "",
        image: ""
      })
    }
    
  }

  
  return (
    <>


        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" >
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text"
        value={producto.name} 
        onChange={handleChange}
        name='name'
        placeholder="Nombre del Producto"
        minLength={2}  // Longitud mínima del nombre
        maxLength={100} // Longitud máxima del nombre
        required      // Campo obligatorio
        pattern="[A-Za-z0-9_\s]+" // Caracteres permitidos
        title="El nombre debe contener solo letras, números, guiones bajos (_) o guiones medios (-)."
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Categoria</Form.Label>
        <Form.Select
          value={producto.category}
          onChange={handleChange}
          name="category"
          required
          aria-label="Selecciona la categoría del producto">
          <option value="">Selecciona una categoría</option>
          <option value="Bebidas">Bebidas</option>
          <option value="Golosinas">Golosinas</option>
          <option value="Limpieza">Limpieza</option>
          <option value="Lacteos">Lácteos</option>
          <option value="Otros">Otros</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Descripcion</Form.Label>
        <Form.Control type="text" 
        value={producto.description} 
        onChange={handleChange}
        required
        name='description'
        placeholder="Descripcion del Producto"
        minLength={3}  // Longitud mínima del nombre
        maxLength={50} // Longitud máxima del nombre
             // Campo obligatorio
             pattern="[A-Za-z0-9_\s]+" // Caracteres permitidos
        title="El nombre debe contener solo letras, números, guiones bajos (_) o guiones medios (-)."
        />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Stock</Form.Label>
        <Form.Control type="number" 
        value={producto.stock} 
        onChange={handleChange}
        name='stock'
        required
        min={0}
        step={1}
        max={500}
        pattern="[0-9]*"
        placeholder="Stock del Producto" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Precio</Form.Label>
        <InputGroup>
        <InputGroup.Text>$</InputGroup.Text>
        <Form.Control type="number" 
        value={producto.price} 
        onChange={handleChange}
        name='price'
        pattern="[0-9]*"
        placeholder="Precio del Producto"
        required // Campo obligatorio
      min={0} // Valor mínimo del precio
      step={1} // Incremento mínimo del precio
              />
        </InputGroup>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Imagen</Form.Label>
        <Form.Control type="text" 
        value={producto.image}
        onChange={handleChange}
        name='image' 
        placeholder="Imagen del Producto" />
       <Form.Text className="form-text" id="basic-addon4">
        Debe ingresar el link de una imagen válida.
      </Form.Text>
      </Form.Group>


      {editarProductos ? (
      <Button type="submit" variant="primary">
        Editar Producto
      </Button>
      ) : (
      <Button type="submit" >
        Agregar Producto
      </Button>
      )}

    </Form>

    </>
  )
}

export default FormProductos