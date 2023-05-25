import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./Context/UsuarioContext";
import Boton from "./boton";

function Navbarra() {
  const { logout, user } = useContext(UserContext);
  const navigate = useNavigate();

  const logoutUser = () => {
    logout();
    navigate("/");
  };

  return (
    <Navbar className="contenedorMenu bg-dark" expand="lg">
      <Container>
        <Navbar.Brand className="text-light" href="#home">
          React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle
          className="text-light bg-light mb-1"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto paginas">
            <NavLink to="/" className="paginasItem ">
              Home
            </NavLink>
            <NavLink to="/galeriaAutos" className="paginasItem ">
              Galeria/Autos
            </NavLink>
            {!user ? (
              <>
                <NavLink to="/registro" className="paginasItem ">
                  Registrarse
                </NavLink>
                <NavLink to="/iniciarSesion" className="paginasItem ">
                  Iniciar sesion
                </NavLink>
              </>
            ) : (
              <>
                <NavLink to="/perfilUsuario" className="paginasItem ">
                  Perfil
                </NavLink>
                <NavLink to="/carrito" className="paginasItem ">
                  🛒
                </NavLink>
                <NavLink to="/" className="paginasItem ">
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
