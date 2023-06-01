import React, { useState, useContext } from "react";
import { UserContext } from "../components/Context/UsuarioContext";
import { AutosContext } from "../components/Context/AutosContext";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function NuevoAuto() {
  const { crearNuevoAuto } = useContext(AutosContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [precio, setPrecio] = useState("");
  const [kilometraje, setKilometraje] = useState("");
  const [año, setAño] = useState("");
  const [liked, setLiked] = useState(false);
  const [imagen, setImagen] = useState(
    "https://i.scdn.co/image/ab67616d0000b2739d1b1ebce0952ba19702b422"
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevoAuto = {
      marca,
      modelo,
      precio,
      kilometraje,
      año,
      liked,
      imagen,
      id: Date.now(),
      user: user.email,
    };

    crearNuevoAuto(nuevoAuto);
    navigate("/publicaciones");
  };

  const formularioValido = marca && modelo && precio && kilometraje && año;

  return (
    <>
      <Container className="contenedorNuevoAuto">
        <h1 className="text-center">Publica tu Auto</h1>
        <Container className="sectionNuevoAuto">
          <Form onSubmit={handleSubmit} className="formularioNuevoAuto">
            <Row>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Marca"
                  value={marca}
                  onChange={(e) => setMarca(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Modelo"
                  value={modelo}
                  onChange={(e) => setModelo(e.target.value)}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Precio"
                  value={precio}
                  onChange={(e) => setPrecio(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Kilometraje"
                  value={kilometraje}
                  onChange={(e) => setKilometraje(e.target.value)}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Año"
                  value={año}
                  onChange={(e) => setAño(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Group controlId="formFileSm">
                  <Form.Control type="file" size="mdd" />
                </Form.Group>
              </Col>
            </Row>
            <Button
              className="text-center"
              type="submit"
              variant="dark"
              style={{ width: "10rem" }}
              disabled= {!formularioValido}
            >
              Agregar
            </Button>
          </Form>
        </Container>
      </Container>

      <Footer />
    </>
  );
}

export default NuevoAuto;
