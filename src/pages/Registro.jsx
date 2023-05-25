import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import { useContext, useState } from "react";
import { UserContext } from "../components/Context/UsuarioContext";
import { useNavigate } from "react-router-dom";

function Registro() {
  const { register } = useContext(UserContext);
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [direccion, setDireccion] = useState("");
  const [direccion2, setDireccion2] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [region, setRegion] = useState("");
  const [codigozip, setCodigozip] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (password !== repassword) {
    //   return alert("no coinciden las contraseñas");
    // }

    register({
      nombre,
      apellido,
      email,
      contraseña,
      direccion,
      direccion2,
      ciudad,
      region,
      codigozip,
      id: Date.now(),
    });
    navigate("/");
  };
  return (
    <Form className="formularioRegistro" onSubmit={handleSubmit}>
      <Container className="contenedorRegistro">
        <h2 className="text-center mb-5">Ingresa tus datos!</h2>
        <Row>
          <Col>
            <Form.Control
              type="text"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </Col>
          <Col>
            <Form.Control
              type="text"
              placeholder="Apellido"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
          </Col>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label></Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label></Form.Label>
            <Form.Control
              type="password"
              placeholder="Contraseña"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Control
            placeholder="Direccion"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Control
            placeholder="Direccion 2"
            value={direccion2}
            onChange={(e) => setDireccion2(e.target.value)}
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Ciudad</Form.Label>
            <Form.Control
              type="text"
              value={ciudad}
              onChange={(e) => setCiudad(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity2">
            <Form.Label>Región</Form.Label>
            <Form.Control
              type="text"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Codigo zip</Form.Label>
            <Form.Control
              type="number"
              value={codigozip}
              onChange={(e) => setCodigozip(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Button variant="dark" type="submit">
          Enviar
        </Button>
      </Container>
    </Form>
  );
}

export default Registro;
