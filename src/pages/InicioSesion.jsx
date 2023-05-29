import { useContext, useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../components/Context/UsuarioContext";
import Swal from "sweetalert2";
import { ValidacionesContext } from "../components/Context/ValidacionesContext";

function InicioSesion() {
  const { login } = useContext(UserContext);
  const { emailValido, validarEmail, passwordValida, validarPassword } =
    useContext(ValidacionesContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if (user) {
      setEmail("");
      setPassword("");
      return navigate("/");
    }

    if (!user) {
      Swal.fire({
        icon: "error",
        title: "Datos incorrectos...",
        text: "Intentalo nuevamente!",
      });
    }

    setEmail("");
    setPassword("");

    if (!emailValido) {
      Swal.fire("Ingresa un email válido");
      return;
    }

    if (!passwordValida) {
      Swal.fire("Ingresa una contraseña válida");
      return;
    }
  };

  return (
    <Form className="formularioInicio" onSubmit={handleSubmit}>
      <Container className="contenedorInicio">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="h3 mb-5">¡Hola! Ingresa tu e‑mail </Form.Label>
          <Form.Control
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              validarEmail(e.target.value);
            }}
            type="email"
            placeholder="Email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              validarPassword(e.target.value);
            }}
            type="password"
            placeholder="Contraseña"
          />
        </Form.Group>

        <Form.Group className="" controlId="formBasicPassword">
          <Button className="me-5 " variant="dark" type="submit">
            Ingresar
          </Button>
          <NavLink to="/registro">
            <Button className="ms-5" variant="link">
              Crear cuenta
            </Button>
          </NavLink>
        </Form.Group>
      </Container>
    </Form>
  );
}

export default InicioSesion;
