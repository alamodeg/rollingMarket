import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const UsersProvider = createContext();

const UsersContext = ({ children }) => {
  const [usuarioLogueado, setUsuarioLogueado] = useState();

  const loginUsuario = async (usuario) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/login/",
        usuario
      );
      const { token } = response.data.data;
      localStorage.setItem("token", token);
      const decoded = jwtDecode(token);
      if (decoded) {
        setUsuarioLogueado(decoded);
      }
    } catch (error) {
      console.log(error);
      throw new Error("Usuario o contraseña incorrectos");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);
      setUsuarioLogueado(decoded);
    }
  }, []);

  return (
    <UsersProvider.Provider value={{ loginUsuario, usuarioLogueado }}>
      {children}
    </UsersProvider.Provider>
  );
};

export default UsersContext;