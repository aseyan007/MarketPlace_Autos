import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AutosContext } from "../../components/Context/AutosContext";
import { UserContext } from "../../components/Context/UsuarioContext";
import corazonLleno from "../../assets/icons/30571.png";
import corazonVacio from "../../assets/icons/corazon_borde.avif";
import { Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import Boton from "../../components/Boton";

function Sedan() {
  const { user } = useContext(UserContext);
  const { autosFiltrados, setAutosFiltrados, agregarAutoAlCarrito } =
    useContext(AutosContext);
  const [categoriaAuto, setCategoriaAuto] = useState("");

  const filtrarAutos = () => {
    const autosFiltradosPorCategoria = autosFiltrados.filter(() => {
      return autosFiltrados.categoria;
    });
    setAutosFiltrados(autosFiltradosPorCategoria);
  };

  useEffect(() => {
    filtrarAutos();
  }, []);

  const enviarAutossAlCarro = (auto) => {
    agregarAutoAlCarrito(auto);
    navigate("/carrito");
  };

  return (
    <div className="galeriaGrilla" value={categoriaAuto}>
      {autosFiltrados.map((auto, i) => (
        <Card className="mb-5 tarjeta" key={auto.id} style={{ width: "18rem" }}>
          <div
            className="imagenGrilla"
            style={{
              width: "18rem",
              height: "12rem",
              backgroundImage: `url('${auto.imagen}')`,
            }}
            onClick={() => {
              const foto = autosFiltrados[i];
              const estadoActualDelLike = foto.liked;
              if (estadoActualDelLike) foto.liked = false;
              else foto.liked = true;
              setAutosFiltrados([...autosFiltrados]);
            }}
          ></div>
          <Card.Body>
            <Card.Title className="meGustaCard">
              {auto.marca} {auto.modelo}
              {user && (
                <div
                  className="corazon"
                  onClick={() => {
                    const foto = autosFiltrados[i];
                    const estadoActualDelLike = foto.liked;
                    if (estadoActualDelLike) foto.liked = false;
                    else foto.liked = true;
                    setAutosFavoritos([...autosFiltrados]);
                  }}
                >
                  {auto.liked ? (
                    <img height="50" src={corazonLleno} alt="" />
                  ) : (
                    <img height="50" src={corazonVacio} alt="" />
                  )}
                </div>
              )}
            </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Precio: $ {auto.precio}</ListGroup.Item>
            <ListGroup.Item>Año: {auto.año}</ListGroup.Item>
            <ListGroup.Item>Recorrido: {auto.kilometraje} km</ListGroup.Item>
          </ListGroup>
          <Card.Body className="botonesTrajeta" key={auto.id}>
            <Link to={`detalle/${auto.id}`}>
              <Boton
                contenido="Ver Auto"
                key={auto.id}
                style={{ width: "7.1rem" }}
              />
            </Link>
            <Boton
              contenido="Añadir al 🛒"
              style={{ width: "8rem" }}
              handleClick={() => enviarAutossAlCarro(auto)}
            />
            {/* <buttononClick={() => enviarAutossAlCarro(auto)}  >
                Añadir al 🛒
              </button> */}
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
export default Sedan;
