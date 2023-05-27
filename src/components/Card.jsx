import React, { useState, useEffect, useContext } from "react";
import { Card, Form } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { AutosContext } from "./Context/AutosContext";
import { Link, useNavigate } from "react-router-dom";
import Boton from "./Boton";
import corazonLleno from "../assets/icons/30571.png";
import corazonVacio from "../assets/icons/corazon_borde.avif";
import { UserContext } from "./Context/UsuarioContext";
import Footer from "./Footer";

function TarjetaAutos() {
  const { user } = useContext(UserContext);
  const {
    autos,
    setAutos,
    autosFiltrados,
    setAutosFiltrados,
    search,
    setSearch,
    agregarAutoAlCarrito,
    autosFavoritos,
    setAutosFavoritos,
  } = useContext(AutosContext);
  const [autoSeleccionado, setAutoSeleccionado] = useState("");
  const navigate = useNavigate();

  const enviarAutossAlCarro = (auto) => {
    agregarAutoAlCarrito(auto);
    navigate("/carrito");
  };

  const filtrarAutos = () => {
    const autosFiltrados = autos.filter((auto) => {
      return (
        auto.modelo.toLowerCase().includes(search.toLowerCase()) ||
        auto.marca.toLowerCase().includes(search.toLowerCase())
      );
    });
    setAutosFiltrados(autosFiltrados);
  };

  useEffect(() => {
    filtrarAutos();
  }, [search]);

  return (
    <>
      <Form>
        <Form.Group className="inputBusquedaHome mt-5 mb-5">
          <Form.Control
            type="text"
            placeholder="🍳 Busca tu modelo"
            onChange={(e) => setSearch(e.target.value)}
          />
        </Form.Group>
      </Form>
      <div className="galeriaGrilla" value={autoSeleccionado}>
        {autosFiltrados.map((auto, i) => (
          <Card
            className="mb-5 tarjeta"
            key={auto.id}
            style={{ width: "18rem" }}
          >
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
                {user && <div
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
                </div>}
              </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Precio: $ {auto.precio}</ListGroup.Item>
              <ListGroup.Item>Año: {auto.año}</ListGroup.Item>
              <ListGroup.Item>Recorrido: {auto.kilometraje} km</ListGroup.Item>
            </ListGroup>
            <Card.Body className="botonesTrajeta" key={auto.id}>
              <Link to={`detalle/${auto.id}`}>
                <Boton contenido="Ver Auto" key={auto.id} style={{width: "7.1rem"}} />
              </Link>
              <Boton
                contenido="Añadir al 🛒" style={{width: "8rem"}}
                handleClick={() => enviarAutossAlCarro(auto)}
              />
              {/* <buttononClick={() => enviarAutossAlCarro(auto)}  >
                Añadir al 🛒
              </button> */}
            </Card.Body>
          </Card>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default TarjetaAutos;