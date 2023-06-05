import React from "react";
import PerfilUsuarioCard from "../components/PerfilUsuarioCard";
import { Container, Row, Col, Button } from "react-bootstrap";
import Boton from "../components/Boton";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AutosContext } from "../components/Context/AutosContext";

function Publicaciones() {
  const { publicaciones, autos } = useContext(AutosContext);
  const params = useParams();
  const navigate = useNavigate();

  const enviarAAutoNuevo = () => {
    console.log(publicaciones)
    navigate("/nuevoAuto");
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
            <section className="sectionPublicaciones mt-3">
              <div style={{ display: "flex", alignItems: "center" }}>
                <h1 style={{ marginInline: "6rem" }}>Tus publicaciones!!</h1>
                <Link to="/nuevoAuto">
                  <Boton
                    contenido="Publicar"
                    handleClick={() => enviarAAutoNuevo()}
                  />
                </Link>
              </div>
              <div className="contenedorPublicaciones">
                {/* <div> */}

                {publicaciones.length > 0 && (
                  <div>
                    {publicaciones.map((auto) => {
                      return (
                        <section key={auto.id} className="seccionPublicaciones">
                          <div>
                            <img
                              className="imagenPublicaciones"
                              alt="..."
                              src={auto.imagen}
                            />
                          </div>
                          <div>
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
                                contenido="Volver"
                                style={{ width: "8rem" }}
                                handleClick={() => volverALaGaleria(auto)}
                              />

                              <Boton
                                contenido="Añadir al 🛒"
                                style={{ width: "8rem" }}
                                handleClick={() => enviarAutosAlCarro(auto)}
                                // handleClick={enviarAutosAlCarro}
                              />
                            </div>
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
