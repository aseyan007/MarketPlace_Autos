import { useContext } from "react";
import { AutosContext } from "../components/Context/AutosContext";
import { Container, Col, Row, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import PerfilUsuarioCard from "../components/PerfilUsuarioCard";
import Boton from "../components/Boton";
import Footer from "../components/Footer";

function Favoritos() {
  const navigate = useNavigate();
  const { autosFavoritos, setAutosFavoritos, agregarAutoAlCarrito } =
    useContext(AutosContext);

  const favoritos = autosFavoritos.filter((auto) => auto.liked === true);

  const deleteProduct = (id) => {
    const newProducts = favoritos.filter((favorito) => favorito.id !== id);
    setAutosFavoritos(newProducts);
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
                  {autosFavoritos.length > 0 ? (
                    favoritos.map((item, i) => (
                      <div className="cardFavoritos" key={i}>
                        <div
                          className="imagenFavoritos"
                          style={{ backgroundImage: `url('${item.imagen}')` }}
                        >
                          {item.liked ? (
                            <Button
                              variant="dark"
                              className="rounded-circle m-2 fw-bold"
                              onClick={() => deleteProduct(item.id)}
                            >
                              X
                            </Button>
                          ) : null}
                          <Boton
                            variant="dark"
                            style={{ height: "35px", width: "35px" }}
                            className="rounded-circle fw-bold"
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
