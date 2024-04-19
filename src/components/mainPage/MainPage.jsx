import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'



const MainPage = () => {

  const [users, setUsers] = useState([])
  
  
  
  useEffect(() => { // Aquí comenzamos el bloque de efecto
    const obtenerDatos = async () => { // Definimos la función para obtener datos
      try {
        const response = await axios.get("http://localhost:8000/users");
        //setUsers(response.data)
      } catch (error) {
        console.error('Error en GET:', error); // Manejamos cualquier error de solicitud
      }
    };
    obtenerDatos();

  }, []);

  console.log(users, "usuarios")

  return (
    <div>Soy una tabla</div> // Retornamos el JSX del componente
  );
};

export default MainPage; // Exportamos el componente MainPage