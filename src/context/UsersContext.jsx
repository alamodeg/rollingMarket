import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UsersProvider = createContext();

// eslint-disable-next-line react/prop-types
const UsersContext = ({ children }) => {
  const [usuarios, setUsuarios] = useState([]);

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8000/users");
      setUsuarios(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addUser = async (usuario) => {
    try {
      await axios.post("http://localhost:8000/users", usuario);
      await getUsers(); //actualizar la lista de usuarios
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUsuario = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/users/${id}`);
      await getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  const editUsuario = async (usuario) => {
    try {
      await axios.put(`http://localhost:8000/users/${usuario.id}`, usuario);
      await getUsers();
    } catch (error) {
      console.log(error);
    }
  }

  const logOut = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <UsersProvider.Provider value={{ usuarios, getUsers, addUser, logOut, deleteUsuario, editUsuario }}>
      {children}
    </UsersProvider.Provider>
  );
};


// const [users, setUsers] = useState([])

//       useEffect(() => {
//         const obtenerDatos = async () => {
//           try {
//             const url = 'https://jsonplaceholder.typicode.com/todos/'
//             const response = await fetch(url)
//             const resultado = await response.json()
//             console.log(resultado)
//             setUsers(response.data);
//           }
//           catch (error) {
//             console.error(error);
//           }
//         }
//         obtenerDatos();
//       }, []);

export default UsersContext;