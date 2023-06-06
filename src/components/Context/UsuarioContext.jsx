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
  const [usuarios, setUsuarios] = useState([]);
  const [user, setUser] = useState(initialStateUser);

  useEffect(() => {
    const usersInLocalStorage = JSON.parse(localStorage.getItem("usuarios"));
    if(!usersInLocalStorage){
      getUsers().then((usuarios) => {
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        setUsuarios(usuarios);
      });
    } else setUsuarios(usersInLocalStorage);
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  const login = async (email, password) => {
    const user = usuarios.find(
      (item) => item.email === email && password === item.password
    );
    setUser(user);
    return user;
  };

  const register = (user) => {
    setUsuarios([...usuarios, user]);
    localStorage.setItem("usuarios", JSON.stringify([...usuarios, user]));
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  const actualizarUserInLocalStorage = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
  };

  return (
    <UserContext.Provider
      value={{ user, login, logout, register, actualizarUserInLocalStorage }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
