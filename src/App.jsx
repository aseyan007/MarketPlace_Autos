import "bootstrap/dist/css/bootstrap.min.css";
import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbarra from "./components/Navbarra";
import { UserContext } from "./components/Context/UsuarioContext";
import PerfilUsuarioCard from "./components/PerfilUsuarioCard";

import Home from "./pages/Home";
import InicioSesion from "./pages/InicioSesion";
import Registro from "./pages/Registro";
import GaleriaAutos from "./pages/GaleriaAutos";
import DetalleAuto from "./pages/Detalle";
import Carrito from "./pages/Carrito";
import Publicaciones from "./pages/Publicaciones";
import EditarPerfil from "./pages/EditarPerfil";
import Favoritos from "./pages/Favoritos";
import NuevoAuto from "./pages/NuevoAuto";
import Sedan from "./pages/subcategorias/Sedan";
import Auto4x4 from "./pages/subcategorias/Auto4x4";
import Suv from "./pages/subcategorias/Suv";
import Pickup from "./pages/subcategorias/Pickup";
import Moto from "./pages/subcategorias/Moto";

function App() {
  const { user } = useContext(UserContext);

  return (
    <>
      <BrowserRouter>
        <Navbarra />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/iniciarSesion"
            element={!user ? <InicioSesion /> : <PerfilUsuarioCard />}
          />
          <Route path="/registro" element={<Registro />} />
          <Route path="/galeriaAutos" element={<GaleriaAutos />} />
          <Route path="/galeriaAutos/detalle/:id" element={<DetalleAuto />} />
          <Route path="/sedan/detalle/:id" element={<DetalleAuto />} />
          <Route path="/pickup/detalle/:id" element={<DetalleAuto />} />
          <Route path="/4x4/detalle/:id" element={<DetalleAuto />} />
          <Route path="/suv/detalle/:id" element={<DetalleAuto />} />
          <Route path="/moto/detalle/:id" element={<DetalleAuto />} />

          <Route
            path="/nuevoAuto"
            element={!user ? <InicioSesion /> : <NuevoAuto />}
          />
          <Route
            path="/publicaciones"
            element={!user ? <InicioSesion /> : <Publicaciones />}
          />
          <Route
            path="/editarPerfil"
            element={!user ? <InicioSesion /> : <EditarPerfil />}
          />
          <Route
            path="/favoritos"
            element={!user ? <InicioSesion /> : <Favoritos />}
          />

          <Route
            path="/carrito"
            element={!user ? <InicioSesion /> : <Carrito />}
          />
          <Route path="/sedan" element={<Sedan />} />
          <Route path="/4x4" element={<Auto4x4 />} />
          <Route path="/suv" element={<Suv />} />
          <Route path="/pickup" element={<Pickup />} />
          <Route path="/moto" element={<Moto />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
