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

  return (
    <>
      <Routes>

        <Route path='/contacto' element={<Contact />} />
        <Route path='/quienesSomos' element={<AboutUsPage />} />
        <Route path='/' element={user ? (user.rol === 'admin' ? <TablaProductos /> : <Navigate to="/mainpage" />) : <LoginPage />} />
        <Route path="*" element={<Page404 />} />

      </Routes>
    </>
  );
}
