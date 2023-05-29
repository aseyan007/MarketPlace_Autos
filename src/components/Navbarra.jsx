import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "./Context/UsuarioContext";
import Boton from "./Boton";

function Navbarra() {
  const [expanded, setExpanded] = useState(false);
  const { logout, user } = useContext(UserContext);
  const navigate = useNavigate();

  const logoutUser = () => {
    logout();
    navigate("/");
  };

  return (
    <Navbar expanded={expanded} className="contenedorMenu bg-dark" expand="lg">
      <Container>
        <Navbar.Brand className="text-light fs-4 logo" href="/">
          Tu Medio Auto
          <div className="medioAuto"></div>
        </Navbar.Brand>
        <Navbar.Toggle
          className="text-light bg-light mb-1"
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto paginas">
            <NavLink to="/" className="paginasItem " onClick={() => setExpanded(false)}>
              Home
            </NavLink>
            <NavLink to="/galeriaAutos" className="paginasItem " onClick={() => setExpanded(false)}>
              Galeria/Autos
            </NavLink>
            {!user ? (
              <>
                <NavLink to="/registro" className="paginasItem " onClick={() => setExpanded(false)}>
                  Registrarse
                </NavLink>
                <NavLink to="/iniciarSesion" className="paginasItem "onClick={() => setExpanded(false)}>
                  Iniciar sesion
                </NavLink>
              </>
            ) : (
              <>
                <NavLink to="/publicaciones" className="paginasItem " onClick={() => setExpanded(false)}>
                  Perfil
                </NavLink>
                <NavLink to="/carrito" className="paginasItem " onClick={() => setExpanded(false)}>
                  🛒
                </NavLink>
                <NavLink to="/" className="paginasItem " onClick={() => setExpanded(false)}>
                <Boton handleClick={logoutUser} contenido="Salir" />

                </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarra;
