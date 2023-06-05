import React, { useEffect, useState, useContext } from "react";
import { AutosContext } from "../../components/Context/AutosContext";
import { UserContext } from "../../components/Context/UsuarioContext";
import { FiltrosContext } from "../../components/Context/FiltrosContext";
import corazonLleno from "../../assets/icons/30571.png";
import corazonVacio from "../../assets/icons/corazon_borde.avif";
import { Card, ListGroup, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Boton from "../../components/Boton";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";

function Suv() {
  const { user } = useContext(UserContext);
  const { autos, agregarAutoAlCarrito, search, setSearch } =
    useContext(AutosContext);
  const { filtrarAutos } = useContext(FiltrosContext);
  const [precioFiltrado, setPrecioFiltrado] = useState("ordenarPorPrecio");
  const [añoFiltrado, setAñoFiltrado] = useState("");
  const [marcaFiltrada, setMarcaFiltrada] = useState("");
  const [autosFiltrados, setAutosFiltrados] = useState([]);
  const navigate = useNavigate();

  const filtrarAutosPorAño = () => {
    if (añoFiltrado !== "") {
      const autosFiltradosPorAño = autos.filter((auto) => {
        return (
          auto.año.toString() === añoFiltrado &&
          (marcaFiltrada ?auto.marca.toString() === marcaFiltrada  : true) &&
          auto.categoria.toLowerCase() === "suv"
        );
      });
      setAutosFiltrados(autosFiltradosPorAño);
    } else {
      setAutosFiltrados([
        ...autos.filter((auto) =>
        marcaFiltrada
            ? auto.marca.toString() === marcaFiltrada &&
              auto.categoria.toLowerCase() === "suv"
            : auto.categoria.toLowerCase() === "suv"
        ),
      ]);
    }
  };

  const filtrarAutosPorMarca = () => {
    if (marcaFiltrada !== "") {
      const autosFiltradosPorMarca = autos.filter((auto) => {
        return (
          auto.marca.toString() === marcaFiltrada &&
          (añoFiltrado ? auto.año.toString() === añoFiltrado : true) &&
          auto.categoria.toLowerCase() === "suv"
        );
      });
      setAutosFiltrados(autosFiltradosPorMarca);
    } else {
      setAutosFiltrados([
        ...autos.filter((auto) =>
          añoFiltrado
            ? auto.año.toString() === añoFiltrado &&
              auto.categoria.toLowerCase() === "suv"
            : auto.categoria.toLowerCase() === "suv"
        ),
      ]);
    }
  };

  useEffect(() => {
    filtrarAutosPorAño();
  }, [añoFiltrado]);

  useEffect(() => {
    filtrarAutosPorMarca();
  }, [marcaFiltrada]);

  useEffect(() => {
    const autosFiltradosPorCategoria = autos.filter((auto) => {
      return auto.categoria.toLowerCase() === "suv";
    });

    setAutosFiltrados(autosFiltradosPorCategoria);
  }, [autos]);

  useEffect(() => {
    filtrarAutos(search);
  }, [search]);

  const enviarAutoAlCarro = (auto) => {
    agregarAutoAlCarrito(auto);
    navigate("/carrito");
  };

  return (
    <>
      <Form>
        <Form.Group className="inputBusquedaHome mt-5 mb-5">
          <Form.Control
            type="text"
            placeholder="🍳 Busca tu modelo"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Form.Group>
      </Form>
      <div className="contenedorFiltros">
        <Form.Select
          className="inputBusquedaFiltros"
          value={precioFiltrado}
          onChange={(e) => setPrecioFiltrado(e.target.value)}
        >
          <option value="ordenarPorPrecio">Buscar por precio</option>
          <option value="ascendente">Menor a Mayor</option>
          <option value="descendente">Mayor a Menor</option>
        </Form.Select>

        <Form.Select
          className="inputBusquedaFiltros"
          value={añoFiltrado}
          onChange={(e) => setAñoFiltrado(e.target.value)}
        >
          <option value="">Buscar por año</option>
          {Array.from(new Set(autos.map((auto) => auto.año))).map((año) => (
            <option key={año} value={año}>
              {año}
            </option>
          ))}
        </Form.Select>

        <Form.Select
          className="inputBusquedaFiltros"
          value={marcaFiltrada}
          onChange={(e) => setMarcaFiltrada(e.target.value)}
        >
          <option value="">Buscar por marca</option>
          {Array.from(new Set(autos.map((auto) => auto.marca))).map((marca) => (
            <option key={marca} value={marca}>
              {marca}
            </option>
          ))}
        </Form.Select>
      </div>
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

export default Suv;
