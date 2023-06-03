import React, { useEffect, useState, useContext } from "react";
import { AutosContext } from "../../components/Context/AutosContext";
import { UserContext } from "../../components/Context/UsuarioContext";
import corazonLleno from "../../assets/icons/30571.png";
import corazonVacio from "../../assets/icons/corazon_borde.avif";
import { Card, ListGroup, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Boton from "../../components/Boton";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";

function Auto4x4() {
  const { user } = useContext(UserContext);
  const { autos, agregarAutoAlCarrito } = useContext(AutosContext);
  const [autosFiltrados, setAutosFiltrados] = useState([]);
  const [autosFiltradosSedan, setAutosFiltradosSedan] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const navigate = useNavigate();

  const filtrarAutos = () => {
    const autosFiltradosPorCategoria = autos.filter((auto) => {
      return auto.categoria.toLowerCase() === "4x4";
    });
    setAutosFiltrados(autosFiltradosPorCategoria);
    setAutosFiltradosSedan(autosFiltradosPorCategoria);
  };

  useEffect(() => {
    filtrarAutos();
  }, []);

  const enviarAutoAlCarro = (auto) => {
    agregarAutoAlCarrito(auto);
    navigate("/carrito");
  };

  // const buscarAutos = () => {
  //   const autosBuscados = autosFiltrados.filter((auto) => {
  //     return (
  //       auto.modelo.toLowerCase().includes(busqueda.toLowerCase()) ||
  //       auto.marca.toLowerCase().includes(busqueda.toLowerCase())
  //     );
  //   });
  //   setAutosFiltrados(autosBuscados);
  // };

  // useEffect(() => {
  //   buscarAutos();
  // }, [busqueda]);

  return (
    <>
      <Form>
        <Form.Group className="inputBusquedaHome mt-5 mb-5">
          <Form.Control
            type="text"
            placeholder="🍳 Busca tu modelo"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </Form.Group>
      </Form>
      <div className="galeriaGrilla">
        {autosFiltrados.map((auto) => (
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
                auto.liked = !auto.liked;
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
                      auto.liked = !auto.liked;
                      setAutosFiltrados([...autosFiltrados]);
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
                <Boton
                  contenido="Ver Auto"
                  key={auto.id}
                  style={{ width: "7.1rem" }}
                />
              </Link>
              <Boton
                contenido="Añadir al 🛒"
                style={{ width: "8rem" }}
                handleClick={() => enviarAutoAlCarro(auto)}
              />
            </Card.Body>
          </Card>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Auto4x4;
