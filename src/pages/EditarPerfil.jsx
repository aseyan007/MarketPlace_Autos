import React, { useContext, useEffect, useState } from "react";
import { Col, Form, Row, Button, Container } from "react-bootstrap";
import Swal from "sweetalert2";
import PerfilUsuarioCard from "../components/PerfilUsuarioCard";
import { UserContext } from "../components/Context/UsuarioContext";
import Footer from "../components/Footer";
import { ValidacionesContext } from "../components/Context/ValidacionesContext";

function EditarPerfil() {
  const { user, actualizarUserInLocalStorage } = useContext(UserContext);
  const { emailValido, validarEmail, passwordValida, validarPassword } =
    useContext(ValidacionesContext);

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [direccion, setDireccion] = useState("");
  const [direccion2, setDireccion2] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [region, setRegion] = useState("");
  const [codigozip, setCodigozip] = useState("");

  const actualizarUsuario = () => {
    setNombre(user.nombre);
    setApellido(user.apellido);
    setEmail(user.email);
    setPassword(user.password);
    setDireccion(user.direccion);
    setDireccion2(user.direccion2);
    setCiudad(user.ciudad);
    setRegion(user.region);
    setCodigozip(user.codigozip);
  };
  useEffect(() => {
    actualizarUsuario();
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const usuario = {
      nombre: nombre,
      apellido: apellido,
      email: email,
      password: password,
      direccion: direccion,
      direccion2: direccion2,
      ciudad: ciudad,
      region: region,
      codigozip: codigozip,
      id: user.id,
    };

    actualizarUserInLocalStorage(usuario);

    Swal.fire("Datos actualizados correctamente");

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
    <>
      <Container fluid className="contenedorPerfil">
        <Row>
          <Col sm={3} className="border-end border-dark">
            <PerfilUsuarioCard />
          </Col>
          <Col sm={7}>
            <section className="sectionPublicaciones mt-3">
              <Form className="formularioRegistro" onSubmit={handleSubmit}>
                <Container className="editarPerfil">
                  <h2 className="text-center mb-5">Ingresa tus datos!</h2>
                  <Row>
                    <Col>
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder={nombre}
                          value={nombre}
                          onChange={(e) => setNombre(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                          Por favor, ingresa un email válido.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder={apellido}
                          value={apellido}
                          onChange={(e) => setApellido(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                          Por favor, ingresa un email válido.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder={email}
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
                      <Form.Label>Contraseña</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                          validarPassword(e.target.value);
                        }}
                        isInvalid={!passwordValida}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        La contraseña debe contener al menos 6 caracteres, una
                        letra mayúscula, una letra minúscula y un número.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>

                  <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={direccion}
                      value={direccion}
                      onChange={(e) => setDireccion(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Dirección 2</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={direccion2}
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
                      <Form.Label>Código ZIP</Form.Label>
                      <Form.Control
                        type="text"
                        value={codigozip}
                        onChange={(e) => setCodigozip(e.target.value)}
                      />
                    </Form.Group>
                  </Row>

                  <Button variant="dark" type="submit">
                    Modificar
                  </Button>
                </Container>
              </Form>
            </section>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default EditarPerfil;
