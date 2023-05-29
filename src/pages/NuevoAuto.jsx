import React, { useState, useContext } from "react";
import { UserContext } from "../components/Context/UsuarioContext";
import { AutosContext } from "../components/Context/AutosContext";
import { Container, Col, Row } from "react-bootstrap";
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

  return (
    <>
      <Container fluid className="contenedorPerfil">
        <Row>
          <Col sm={3}></Col>
          <Col sm={7}>
            <Container>
              <section>
                <div>
                  <h1>Bienvenido: {user.nombre}</h1>
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      placeholder="marca"
                      value={marca}
                      onChange={(e) => setMarca(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="modelo"
                      value={modelo}
                      onChange={(e) => setModelo(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="precio"
                      value={precio}
                      onChange={(e) => setPrecio(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="kilometraje"
                      value={kilometraje}
                      onChange={(e) => setKilometraje(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="año"
                      value={año}
                      onChange={(e) => setAño(e.target.value)}
                    />
                    <button type="submit">Agregar</button>
                  </form>
                </div>
              </section>
            </Container>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default NuevoAuto;
