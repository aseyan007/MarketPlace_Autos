import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import UserProvider from "./components/Context/UsuarioContext.jsx";
import AutosProvider from "./components/Context/AutosContext.jsx";
import ValidacionesProvider from "./components/Context/ValidacionesContext.jsx";
import FiltrosProvider from "./components/Context/FiltrosContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <AutosProvider>
        <ValidacionesProvider>
          <FiltrosProvider>
            <App />
          </FiltrosProvider>
        </ValidacionesProvider>
      </AutosProvider>
    </UserProvider>
  </React.StrictMode>
);
