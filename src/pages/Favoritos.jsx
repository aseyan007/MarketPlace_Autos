import { AutosContext } from "../components/Context/AutosContext";
import { useContext } from "react";
import PerfilUsuarioCard from "../components/PerfilUsuarioCard";
import { Container, Col, Row, Button } from "react-bootstrap";
import corazonLleno from "../assets/icons/30571.png";

function Favoritos() {
  const { autosFavoritos, setAutosFavoritos, autos, setAutos } =
    useContext(AutosContext);
  const favoritos = autosFavoritos.filter((auto) => auto.liked === true);
  console.log(favoritos);

  const deleteProduct = (id) => {
    const newProducts = favoritos.filter((favorito) => favorito.id !== id);
    setAutosFavoritos(newProducts);

    const updatedAutos = autos.map((auto) => {
      if (auto.id === id) {
        return {
          ...auto,
          liked: false,
        };
      }
      return auto;
    });
    setAutos(updatedAutos);
  };

  return (
    <Container fluid className="contenedorPerfil">
      <Row>
        <Col sm={3} className="border-end border-dark">
          <PerfilUsuarioCard />
        </Col>
        <Col sm={7}>
          <section className="sectionFavoritos">
            <h1 className="text-center mt-3">Estos son tus favoritos!!</h1>
            {autosFavoritos.length > 0 && (
              <div className="divFavoritos mt-3">
                {favoritos.map((item, i) => (
                  <div className=" cardFavoritos">
                    <div
                      key={i}
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
                      <Button
                        variant="dark"
                        style={{ height: "35px", width: "35px" }}
                        className="rounded-circle  fw-bold"
                      >
                        🛒
                      </Button>
                    </div>
                    <h3 className="text-center mb-1">
                      {item.marca} {item.modelo}
                    </h3>
                  </div>
                ))}
              </div>
            )}
          </section>
        </Col>
      </Row>
    </Container>
  );
}

export default Favoritos;
