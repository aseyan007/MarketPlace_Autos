import { useContext, useEffect } from "react";
import { AutosContext } from "../components/Context/AutosContext";
import { Container, Col, Row, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import PerfilUsuarioCard from "../components/PerfilUsuarioCard";
import Boton from "../components/Boton";
import Footer from "../components/Footer";

function Favoritos() {
  const navigate = useNavigate();
  let { autosFavoritos, setAutosFavoritos, agregarAutoAlCarrito } =
    useContext(AutosContext);


  const deleteProduct = (id) => {
    const favoritoFound = autosFavoritos.find((favorito) => favorito.id === id);
    favoritoFound.liked = false
    setAutosFavoritos([...autosFavoritos]);
  };

   const enviarAutosAlCarro = (auto) => {
    agregarAutoAlCarrito(auto);
    navigate("/carrito");
  };

  return (
    <>
      <Container fluid className="contenedorPerfil">
        <Row>
          <Col sm={3} className="border-end border-dark">
            <PerfilUsuarioCard />
          </Col>
          <Col sm={7}>
            <Container>
              <section className="sectionFavoritos">
                <h1 className="text-center mt-3">Estos son tus favoritos!!</h1>
                <div className="divFavoritos mt-3">
                  {autosFavoritos.filter(a => a.liked).length > 0 ? (
                    autosFavoritos.filter(a => a.liked).map((item, i) => (
                      <div className="cardFavoritos" key={i}>
                        <div
                          className="imagenFavoritos"
                          style={{ backgroundImage: `url('${item.imagen}')` }}
                        >
                          {item.liked ? (
                            <Boton
                              variant="dark"
                              style={{ height: "2.3rem", width: "2.5rem" , color:"white", borderRadius: "50%", fontWeight: "bolder"}}
                              className="botonFavoritos"
                              handleClick={() => {
                                // enviarAutosAlCarro(item);
                                deleteProduct(item.id);
                              }}
                              contenido="x"
                            />
                          ) : null}
                          <Boton
                            variant="dark"
                            style={{ height: "2.3rem", width: "2.5rem", borderRadius: "50%",  paddingRight: "1rem" }}
                            className="botonFavoritos"
                            handleClick={() => {
                              enviarAutosAlCarro(item);
                              deleteProduct(item.id);
                            }}
                            contenido="🛒"
                          />
                        </div>
                        <h3 className="text-center mb-1">
                          {item.marca} {item.modelo}
                        </h3>
                      </div>
                    ))
                  ) : (
                    <Alert id="divFavoritos" variant="">
                      <Alert.Heading className="text-center display-1 mt-3">
                        😮
                      </Alert.Heading>
                      <p className="text-center display-2">
                        No te ha gustado ningún auto.
                      </p>
                    </Alert>
                  )}
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

export default Favoritos;
