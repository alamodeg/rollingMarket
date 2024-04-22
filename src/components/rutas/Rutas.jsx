import React from 'react'
import { Routes, Route} from 'react-router-dom';
import { Contact } from '../../page/contacto/Contact';
import AboutUsPage from '../../page/aboutUs/AboutUsPage';
import LoginPage from '../../page/login/LoginPage';
import Page404 from '../../page/404/Page404';



export function Rutas() {

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Routes>
        <Route path ='/contacto' element={<Contact></Contact>}></Route>
        <Route path ='/quienesSomos' element={<AboutUsPage></AboutUsPage>}></Route>
        <Route path ='/login' element={<LoginPage></LoginPage>}></Route>
        <Route path ='/' element={<LoginPage></LoginPage>}></Route>
        {/* {user && user.rol === 'admin'  ? (
           <Route path="/admin" element={<Admin />} />
        ) : null} */}
        <Route path="*" element={<Page404></Page404>} />
      </Routes>
    </>
  );
};