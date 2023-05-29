import React, { useState, createContext } from "react";

export const ValidacionesContext = createContext();

function ValidacionesProvider({ children }) {
  const [emailValido, setEmailValido] = useState(true);
  const [passwordValida, setPasswordValida] = useState(true);

  const validarEmail = (email) => {
    if (email.length < 7 || /\s/g.test(email)) {
      setEmailValido(false);
    } else {
      const partes = email.split('@');
      const nombreUsuario = partes[0];
      const dominioExtension = partes[1].split('.');
      const dominio = dominioExtension[0];
      const extension = dominioExtension[1];
      
      if (
          nombreUsuario.length < 3 ||
          dominio.length < 3 ||
          extension.length < 2 
        //   ||  !(extension === undefined || extension === null || extension === '' || !extension.includes('.'))

        //   !extension.includes('.')
        ) {
        setEmailValido(false);
      } else {
        setEmailValido(true);
      }
    }
  };

  const validarPassword = (password) => {
    const regex = /^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/;
    if (password.length < 6 || !regex.test(password)) {
      setPasswordValida(false);
    } else {
      setPasswordValida(true);
    }
  };

  const estadoGlobalValidaciones = {
    emailValido,
    passwordValida,
    validarPassword,
    validarEmail,
  };

  return (
    <ValidacionesContext.Provider value={estadoGlobalValidaciones}>
      {children}
    </ValidacionesContext.Provider>
  );
}

export default ValidacionesProvider;


