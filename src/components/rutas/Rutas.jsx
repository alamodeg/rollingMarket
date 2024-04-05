import React from 'react'
import { Routes, Route} from 'react-router-dom';
import { Contacto } from '../../components/contacto/Contacto'



export function Rutas() {
  // const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Routes>
        <Route path='/contacto' element={<Contacto></Contacto>}></Route>
      </Routes>
    </>
  );
};