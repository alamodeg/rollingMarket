import Dropdown from 'react-bootstrap/Dropdown';
import { useContext,useState } from 'react';
import { ProductsProvider } from '../../context/ProductosContext';

function DropCategoria() {
  const { getCategoria } = useContext(ProductsProvider);
  
  const handleCategorySelect = (categoria) => {
    getCategoria(categoria);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        Buscar por Categoría
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleCategorySelect('Bebidas')}>
          Bebidas
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCategorySelect('Herramientas')}>
          Herramientas
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCategorySelect('Lacteos')}>
          Lacteos
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCategorySelect('Limpieza')}>
          Limpieza
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCategorySelect('Otros')}>
          Otros
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropCategoria;
