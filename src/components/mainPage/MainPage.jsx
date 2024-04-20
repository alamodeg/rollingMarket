import React, { useEffect, useState, useContext } from 'react';
import { ProductsProvider } from '../../context/ProductosContext.jsx';
import PropTypes from 'prop-types';
import TablaProductos from '../Tablas/TablaProductos.jsx';


const MainPage = () => {

  const {productos} = useContext(ProductsProvider)

  //console.log('Productos desde el componente')

  return (
    <div>
      <h1>Listado de Productos</h1>
      <TablaProductos/>
    </div>
  );
};

export default MainPage;
