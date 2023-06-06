import React from "react";
import PerfilUsuarioCard from "../components/PerfilUsuarioCard";
import { Container, Row, Col, Button } from "react-bootstrap";
import Boton from "../components/Boton";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AutosContext } from "../components/Context/AutosContext";
import { UserContext } from "../components/Context/UsuarioContext";
import EditarAuto from "./EditarAuto";

function Publicaciones() {
  const { publicaciones, autos } = useContext(AutosContext);
  const { user } = useContext(UserContext);
  const params = useParams();
  const navigate = useNavigate();

  const enviarAAutoNuevo = () => {
       navigate("/editarAuto");
  };

  //  const obtenerAutoPorId = (id) =>
  //  autos.find((auto) => auto.id === parseInt(id));
  // const auto = obtenerAutoPorId(params.id);

  //  const reenderizarNuevosAutos = (auto) => {
  //   enviarNuevoAutoAPublicaciones(auto);

  // };

  return (
    <>
      <Container fluid className="contenedorPerfil">
        <Row>
          <Col sm={3} className="border-end border-dark">
            <PerfilUsuarioCard />
          </Col>
          <Col sm={7}>
            <section className=" sectionPublicaciones mt-3">
              <div className="sectionDivPublicaciones">
                <h1>Tus publicaciones!!</h1>
                <Link to="/nuevoAuto">
                  <Boton
                    contenido="Publicar"
                    handleClick={() => enviarAAutoNuevo()}
                  />
                </Link>
              </div>
              <div className="contenedorPublicaciones">
                {/* <div> */}

                {autos.filter((auto) => user.email == auto.user).length > 0 && (
                  <div>
                    {autos.filter((auto) => user.email == auto.user).map((auto) => {
                      return (
                        <section key={auto.id} className="cardPublicaciones">
                          <div>
                            <img
                              className="imagenPublicaciones"
                              alt="..."
                              src={auto.imagen}
                            />
                          </div>
                          {/* <div> */}
                            <h1>
                              {auto.marca} {auto.modelo}
                            </h1>
                            <br />

                            <h3>{auto.kilometraje} Km</h3>
                            <h3>$ {auto.precio}</h3>
                            <h3>Año: {auto.año}</h3>
                            <br />
                            <div className="botonesDetalle">
                              <Boton
                                contenido="Editar"
                                style={{ width: "8rem" }}
                                handleClick={() => enviarAutosAlCarro(auto)}
                              />
                            {/* </div> */}
                          </div>
                        </section>
                      );
                    })}
                  </div>
                )}
                {/* </div> */}
              </div>
            </section>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Publicaciones;
