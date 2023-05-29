import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import UserProvider from "./components/Context/UsuarioContext.jsx";
// import { AutosContext } from "./components/Context/AutosContext.jsx";
import AutosProvider from "./components/Context/AutosContext.jsx";
import ValidacionesProvider from "./components/Context/ValidacionesContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <AutosProvider>
        <ValidacionesProvider>
        <App />
        </ValidacionesProvider>
      </AutosProvider>
    </UserProvider>
  </React.StrictMode>
);
