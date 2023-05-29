import React, { useContext, useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { UserContext } from "../components/Context/UsuarioContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { ValidacionesContext } from "../components/Context/ValidacionesContext";

function Registro() {
  const { register } = useContext(UserContext);
  const {emailValido, validarEmail, passwordValida, validarPassword} = useContext(ValidacionesContext)
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

    if (!emailValido) {
      Swal.fire("Ingresa un email válido");
      return;
    }

    if (!passwordValida) {
      Swal.fire("Ingresa una contraseña válida");
      return;
    }

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
              required
            />
          </Col>
          <Col>
            <Form.Control
              type="text"
              placeholder="Apellido"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              required
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
              onChange={(e) => {
                setEmail(e.target.value);
                validarEmail(e.target.value);
              }}
              isInvalid={!emailValido}
              required
            />
            <Form.Control.Feedback type="invalid">
              Por favor, ingresa un email válido.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label></Form.Label>
            <Form.Control
              type="password"
              placeholder="Contraseña"
              value={contraseña}
              onChange={(e) => {
                setContraseña(e.target.value);
                validarPassword(e.target.value);
              }}
              isInvalid={!passwordValida}
              required
            />
            <Form.Control.Feedback type="invalid">
              La contraseña debe contener al menos 6 caracteres, una letra mayúscula, una letra minúscula y un número.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Dirección</Form.Label>
          <Form.Control
            placeholder="Dirección"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Dirección 2</Form.Label>
          <Form.Control
            placeholder="Dirección 2"
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
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity2">
            <Form.Label>Región</Form.Label>
            <Form.Control
              type="text"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Código Zip</Form.Label>
            <Form.Control
              type="number"
              min="3"
              value={codigozip}
              onChange={(e) => setCodigozip(e.target.value)}
              required
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
