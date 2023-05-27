// import React, { createContext, useState, useEffect } from "react";

// export const UsuarioContext = createContext();

// const obtenerUsuarios = async () => {
//   const res = await fetch("/usuarios.json");
//   const usuarios = await res.json();
//   return usuarios;
// };

// const estadoInicialDelUsuario = localStorage.getItem("usuario")
//   ? JSON.parse(localStorage.getItem("usuario"))
//   : null;

// const UsuarioProvider = ({ children }) => {
//   const [usuario, setUsuario] = useState(estadoInicialDelUsuario);

//   useEffect(() => {
//     if (usuario) {
//       localStorage.setItem("usuario", JSON.stringify(usuario));
//     }
//   }, [usuario]);

//   const inicioSesion = async (email, password) => {
//     const usuarios = await obtenerUsuarios();
//     const usuarioDatos = usuarios.find(
//       (item) => item.email === email && item.password === password
//     );
//     if (usuarioDatos) {
//       setUsuario(usuarioDatos);
//     } else {
//       setUsuario(null);
//     }

//     return usuarioDatos;
//   };

//   const registro = (usuario) => {
//     setUsuario(usuario);
//   };

//    const salir = () => {
//     setUsuario(null);
//     localStorage.removeItem("usuario");
//   };

//   const estadoGlobalUsuarios = {
//     usuario,
//     registro,
//     salir,
//     inicioSesion,
//   };

//   return (
//     <UsuarioContext.Provider value={estadoGlobalUsuarios}>
//       {children}
//     </UsuarioContext.Provider>
//   );
// };

// export default UsuarioProvider;

import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const getUsers = async () => {
  const res = await fetch("usuarios.json");
  const users = await res.json();
  return users;
};

const initialStateUser = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialStateUser);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  const login = async (email, password) => {
    const users = await getUsers();
    const userDB = users.find(
      (item) => item.email === email && password === item.password
    );
    if (userDB) {
      setUser(userDB);
    } else {
      setUser(null);
    }

    return userDB;
  };

  const register = (user) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const actualizarUserInLocalStorage = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
  }

  return (
    <UserContext.Provider value={{ user, login, logout, register, actualizarUserInLocalStorage }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
