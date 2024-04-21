import React, { useEffect, useState, useContext } from 'react';
import { ProductsProvider } from '../../context/ProductosContext.jsx';
import TablaProductos from '../Tablas/TablaProductos.jsx';


const MainPage = () => {

  const {productos} = useContext(ProductsProvider)

  return (
    <div>

      <h1>Listado de Productos</h1>
      <TablaProductos/>
    </div>
  );
};

export default MainPage;
