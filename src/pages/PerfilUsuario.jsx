import React from "react";
import PerfilUsuarioCard from "../components/PerfilUsuarioCard";
import { Container, Row, Col } from "react-bootstrap";
import { useContext } from "react";
import { UserContext } from "../components/Context/UsuarioContext";
import Footer from "../components/Footer";

function PerfilUsuario() {

  const {user} = useContext(UserContext)
    return (
      <>
        <Container fluid className="contenedorPerfil">
          <Row> 
          <Col sm={3} className="border-end border-dark">
        <PerfilUsuarioCard />
        </Col>
        <Col sm={7}>
      <section className="sectionPublicaciones mt-5">
        <h1>hola {user.nombre}!!</h1>
        </section>
        </Col>
        </Row> 
       
       
        </Container>
        <Footer />
        </>
    )
}

export default PerfilUsuario