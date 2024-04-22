import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const UsersProvider = createContext();

const UsersContext = ({ children }) => {
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioLogueado, setUsuarioLogueado] = useState();


  const getUsers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/usuarios"
      );
      setUsuarios(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addUser = async (usuario) => {
    try {
      await axios.post("http://localhost:4000/usuario", usuario);
      await getUsers(); //actualizar la lista de usuarios
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUsuario = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/usuario/delete/${id}`);
      await getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  const editUsuario = async (usuario) => {
    console.log(usuario, "editUsuario");
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("No se proporcionó un token");
    }

    try {
      await axios.put(
        `http://localhost:4000/usuario/update/${usuario.id}`,
        usuario,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      await getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  const loginUsuario = async (usuario) => {
    console.log(usuario, "loginUsuario");
    try {
      const response = await axios.post(
        "http://localhost:4000/login/",
        usuario
      );
      console.log(response.data, "response.data desde el context");

      const { token } = response.data.data;
      localStorage.setItem("token", token);
      const decoded = jwtDecode(token);

      setUsuarioLogueado(decoded);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <UsersProvider.Provider
      value={{
        usuarios,
        getUsers,
        addUser,
        logOut,
        deleteUsuario,
        editUsuario,
        loginUsuario,
        usuarioLogueado,
      }}
    >
      {children}
    </UsersProvider.Provider>
  );
};

export default UsersContext;