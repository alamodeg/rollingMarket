import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UsersProvider = createContext();

// eslint-disable-next-line react/prop-types
const UsersContext = ({ children }) => {
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioLogueado, setUsuarioLogueado] = useState();


  const getUsers = async () => {
    try {
      const response = await axios.get(
        "https://rollingmarketbe.onrender.com/usuarios");
      setUsuarios(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addUser = async (usuario) => {
    try {
      await axios.post("https://rollingmarketbe.onrender.com/usuario", usuario);
      await getUsers(); //actualizar la lista de usuarios
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUsuario = async (id) => {
    try {
      await axios.delete(`https://rollingmarketbe.onrender.com/usuario/${id}`);
      await getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  const editUsuario = async (usuario) => {
    try {
      await axios.put(`https://rollingmarketbe.onrender.com/usuario/delete/${usuario.id}`, usuario);
      await getUsers();
    } catch (error) {
      console.log(error);
    }
  }

  const logOut = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  const loginUsuario = async (usuario) => {
    console.log(usuario, "loginUsuario");
    try {
      const response = await axios.post(
        "https://rollingmarketbe.onrender.com/login/",
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
    <UsersProvider.Provider value={{ usuarios, loginUsuario, getUsers, addUser, logOut, deleteUsuario, editUsuario, usuarioLogueado }}>
      {children}
    </UsersProvider.Provider>
  );
};

export default UsersContext;