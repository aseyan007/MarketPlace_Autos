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
