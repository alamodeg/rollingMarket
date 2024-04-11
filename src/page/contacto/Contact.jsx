import React from 'react'
import { PublicidadContacto } from '../../components/contacto/PublicidadContacto';
import { NavBarSecundario } from '../../components/contacto/NavBarSecundario';
import { ConsultaYMaps } from '../../components/contacto/ConsultaYMaps';
import { CardsCont } from '../../components/contacto/CardsCont';


export function Contact() {
  return (
    <>
      <PublicidadContacto />
      <NavBarSecundario />
      <ConsultaYMaps />
      <CardsCont />
    </>
  );
};
