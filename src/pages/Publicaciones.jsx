import React from "react";
import PerfilUsuarioCard from "../components/PerfilUsuarioCard";
import { Container, Row, Col, Button } from "react-bootstrap";
import Boton from "../components/Boton";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Publicaciones() {
  return (
    <>
    <Container fluid className="contenedorPerfil">
      <Row>
        <Col sm={3} className="border-end border-dark">
          <PerfilUsuarioCard />
        </Col>
        <Col sm={7}>
          <section className="sectionPublicaciones mt-3">
            <h1>Tus publicaciones!!</h1>
            <Link to="nuevoAuto">
              <Boton contenido="Publicar" />
            </Link>
            <div className="divPublicaciones"></div>
          </section>
        </Col>
      </Row>
    </Container>
    <Footer />
    </>
  );
}

export default Publicaciones;
