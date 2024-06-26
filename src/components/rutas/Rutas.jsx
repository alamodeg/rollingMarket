import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Contact } from '../../page/contacto/Contact';
import AboutUsPage from '../../page/aboutUs/AboutUsPage';
import LoginPage from '../../page/login/LoginPage';
import Page404 from '../../page/404/Page404';
import Admin from '../../components/admin/Admin';
import TablaProductos from '../tablaProductos/TablaProductos';

export function Rutas() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user) {
    if (user.rol === 'admin') {
      return (
        <Routes>
          <Route path='/contacto' element={<Contact />} />
          <Route path='/quienesSomos' element={<AboutUsPage />} />
          <Route path='/login' element={<Navigate to="/admin" />} />
          <Route path='/' element={<Navigate to="/admin" />} />
          <Route path='/admin' element={<TablaProductos />} />
          <Route path='/mainpage' element={<TablaProductos />} />    {/* REEMPLAZAR POR COMPONENTE USUARIO O SEA MAINPAGE*/}
          <Route path="*" element={<Page404 />} />
        </Routes>
      );
    } else if (user.rol === 'usuario') {
      return (
        <Routes>
          <Route path='/contacto' element={<Contact />} />
          <Route path='/quienesSomos' element={<AboutUsPage />} />
          <Route path='/login' element={<Navigate to="/mainpage" />} />
          <Route path='/' element={<Navigate to="/mainpage" />} />
          <Route path='/admin' element={<Page404 />} />             {/* REEMPLAZAR POR COMPONENTE HOEM O CORRESPONDIENTE.*/}
          <Route path='/mainpage' element={<TablaProductos />} />   {/* REEMPLAZAR POR COMPONENTE USUARIO O SEA MAINPAGE*/}
          <Route path="*" element={<Page404 />} />
        </Routes>
      );
    }
  } else {
    return (
      <Routes>
        <Route path='/contacto' element={<Contact />} />
        <Route path='/quienesSomos' element={<AboutUsPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/' element={<LoginPage />} />
        <Route path='/admin' element={<Page404 />} />
        <Route path='/mainpage' element={<Page404 />} /> 
        <Route path="*" element={<Page404 />} />
      </Routes>
    );
  }
}
