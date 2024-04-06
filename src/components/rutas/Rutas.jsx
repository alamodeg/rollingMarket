import React from 'react'
import { Routes, Route} from 'react-router-dom';
import { Contact } from '../../page/contacto/Contact';
import { AboutUs }  from '../../components/aboutUs/AboutUs';


export function Rutas() {
  // const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Routes>
        <Route path ='/contacto' element={<Contact></Contact>}></Route>
        <Route path ='/quienesSomos' element={<AboutUs></AboutUs>}></Route>
      </Routes>
    </>
  );
};