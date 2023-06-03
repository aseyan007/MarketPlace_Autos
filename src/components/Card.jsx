// import React, { useState, useEffect, useContext } from "react";
// import { Card, Form } from "react-bootstrap";
// import ListGroup from "react-bootstrap/ListGroup";
// import { AutosContext } from "./Context/AutosContext";
// import { Link, useNavigate } from "react-router-dom";
// import Boton from "./Boton";
// import corazonLleno from "../assets/icons/30571.png";
// import corazonVacio from "../assets/icons/corazon_borde.avif";
// import { UserContext } from "./Context/UsuarioContext";
// import Footer from "./Footer";

// function TarjetaAutos() {
//   const { user } = useContext(UserContext);
//   const {
//     autos,
//     setAutos,
//     autosFiltrados,
//     setAutosFiltrados,
//     search,
//     setSearch,
//     agregarAutoAlCarrito,
//     autosFavoritos,
//     setAutosFavoritos,
//   } = useContext(AutosContext);
//   const [autoSeleccionado, setAutoSeleccionado] = useState("");
//   const [precioFiltrado, setPrecioFiltrado] = useState("ordenarPorPrecio");
//   const [añoFiltrado, setAñoFiltrado] = useState("");

//   const navigate = useNavigate();

//   const enviarAutossAlCarro = (auto) => {
//     auto.liked = false;
//     agregarAutoAlCarrito(auto);
//     navigate("/carrito");
//   };

//   const filtrarAutos = () => {
//     let autosFiltrados = autos.filter((auto) => {
//       return (
//         auto.modelo.toLowerCase().includes(search.toLowerCase()) ||
//         auto.marca.toLowerCase().includes(search.toLowerCase())
//         //   &&
        
//       );
//     });

//     setAutosFiltrados(autosFiltrados);
//   };

//   // const filtrarAutosPorPrecio = () => {
//   //   let autosFiltradosPorPrecio = [...autosFiltrados];
//   //   if (precioFiltrado === "ordenarPorPrecio") {
//   //     autosFiltradosPorPrecio = autosFiltrados;
//   //   } else if (precioFiltrado === "descendente") {
//   //     autosFiltradosPorPrecio = autosFiltrados.sort(
//   //       (a, b) => a.precio - b.precio
//   //     );
//   //   } else if (precioFiltrado === "ascendente") {
//   //     autosFiltradosPorPrecio = autosFiltrados.sort(
//   //       (a, b) => b.precio - a.precio
//   //     );
//   //   }

//   //   setAutosFiltrados(autosFiltradosPorPrecio);
//   // };

//   useEffect(() => {
//     filtrarAutos();
//     // filtrarAutosPorPrecio();
//   }, [search, precioFiltrado]);

//   return (
//     <>
//       <Form>
//         <Form.Group className="inputBusquedaHome mt-5 mb-5">
//           <Form.Control
//             type="text"
//             placeholder="🍳 Busca tu modelo"
//             onChange={(e) => setSearch(e.target.value)}
//           />
//         </Form.Group>
//         {/* <Form.Group className="inputBusquedaHome"> */}
//         <div className="contenedorFiltros">
//           <Form.Select
//           className="inputBusquedaFiltros"
//             as="select"
//             value={precioFiltrado}
//             onChange={(e) => setPrecioFiltrado(e.target.value)}
//           >
//             <option value="ordenarPorPrecio" selected>
//               Buscar por precio
//             </option>
//             <option value="ascendente">Menor a Mayor</option>
//             <option value="descendente">Mayor a Menor</option>
//           </Form.Select>
          
//           <Form.Select
//           className="inputBusquedaFiltros"
//             as="number"
//             value={añoFiltrado}
//             onChange={(e) => setAñoFiltrado(e.target.value)}
//           >
//           <option value="">Buscar por año</option> 
//           </Form.Select>
//           <Form.Select
//           className="inputBusquedaFiltros"
//             as="select"
//             value="ordenarPorAño"
//             onChange={(e) => setPrecioFiltrado(e.target.value)}
//           >
//             <option value="ordenarPorPrecio" selected>
//               Buscar por marca
//             </option>
//             <option value="ascendente">Menor a Mayor</option>
//             <option value="descendente">Mayor a Menor</option>
//           </Form.Select>
//           </div>
//         {/* </Form.Group> */}
//       </Form>
//       <div className="galeriaGrilla" value={autoSeleccionado}>
//         {autosFiltrados.map((auto, i) => (
//           <Card
//             className="mb-5 tarjeta"
//             key={auto.id}
//             style={{ width: "18rem" }}
//           >
//             <div
//               className="imagenGrilla"
//               style={{
//                 width: "18rem",
//                 height: "12rem",
//                 backgroundImage: `url('${auto.imagen}')`,
//               }}
//               onClick={() => {
//                 const foto = autosFiltrados[i];
//                 const estadoActualDelLike = foto.liked;
//                 if (estadoActualDelLike) foto.liked = false;
//                 else foto.liked = true;
//                 setAutosFiltrados([...autosFiltrados]);
//               }}
//             ></div>
//             <Card.Body>
//               <Card.Title className="meGustaCard">
//                 {auto.marca} {auto.modelo}
//                 {user && (
//                   <div
//                     className="corazon"
//                     onClick={() => {
//                       const foto = autosFiltrados[i];
//                       const estadoActualDelLike = foto.liked;
//                       if (estadoActualDelLike) foto.liked = false;
//                       else foto.liked = true;
//                       setAutosFavoritos([...autosFiltrados]);
//                     }}
//                   >
//                     {auto.liked ? (
//                       <img height="50" src={corazonLleno} alt="" />
//                     ) : (
//                       <img height="50" src={corazonVacio} alt="" />
//                     )}
//                   </div>
//                 )}
//               </Card.Title>
//               <Card.Text>
//                 Some quick example text to build on the card title and make up
//                 the bulk of the card's content.
//               </Card.Text>
//             </Card.Body>
//             <ListGroup className="list-group-flush">
//               <ListGroup.Item>Precio: $ {auto.precio}</ListGroup.Item>
//               <ListGroup.Item>Año: {auto.año}</ListGroup.Item>
//               <ListGroup.Item>Recorrido: {auto.kilometraje} km</ListGroup.Item>
//             </ListGroup>
//             <Card.Body className="botonesTrajeta" key={auto.id}>
//               <Link to={`detalle/${auto.id}`}>
//                 <Boton
//                   contenido="Ver Auto"
//                   key={auto.id}
//                   style={{ width: "7.1rem" }}
//                 />
//               </Link>
//               <Boton
//                 contenido="Añadir al 🛒"
//                 style={{ width: "8rem" }}
//                 handleClick={() => enviarAutossAlCarro(auto)}
//               />
//             </Card.Body>
//           </Card>
//         ))}
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default TarjetaAutos;

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
  const [precioFiltrado, setPrecioFiltrado] = useState("ordenarPorPrecio");
  const [añoFiltrado, setAñoFiltrado] = useState("");
  const [marcaFiltrada, setMarcaFiltrada] = useState("");
  const navigate = useNavigate();

  const enviarAutossAlCarro = (auto) => {
    auto.liked = false;
    agregarAutoAlCarrito(auto);
    navigate("/carrito");
  };

  const filtrarAutos = () => {
    let autosFiltrados = autos.filter((auto) => {
      return (
        auto.modelo.toLowerCase().includes(search.toLowerCase()) ||
        auto.marca.toLowerCase().includes(search.toLowerCase())
      );
    });

    setAutosFiltrados(autosFiltrados);
  };

  const filtrarAutosPorAño = () => {
    if (añoFiltrado !== "") {
      let autosFiltradosPorAño = autos.filter((auto) => {
        return auto.año.toString() === añoFiltrado;
      });
      setAutosFiltrados(autosFiltradosPorAño);
    } else {
      setAutosFiltrados(autos);
    }
  };

  const filtrarAutosPorMarca = () => {
    if (marcaFiltrada !== "") {
      let autosFiltradosPorMarca = autos.filter((auto) => {
        return auto.marca.toString() === añoFiltrado;
      });
      setMarcaFiltrada(autosFiltradosPorMarca);
    } else {
      setAutosFiltrados(autos);
    }
  };

  const filtrarAutosPorPrecio = () => {
    let autosFiltradosPorPrecio = [...autosFiltrados];
    if (precioFiltrado === "ordenarPorPrecio") {
      autosFiltradosPorPrecio = autosFiltrados;
    } else if (precioFiltrado === "descendente") {
      autosFiltradosPorPrecio = autosFiltrados.sort((a, b) => a.precio - b.precio);
    } else if (precioFiltrado === "ascendente") {
      autosFiltradosPorPrecio = autosFiltrados.sort((a, b) => b.precio - a.precio);
    }

    setAutosFiltrados(autosFiltradosPorPrecio);
  };

  useEffect(() => {
    filtrarAutos();
  }, [search]);

  useEffect(() => {
    filtrarAutosPorAño();
  }, [añoFiltrado]);

  useEffect(() => {
    filtrarAutosPorPrecio();
  }, [precioFiltrado]);

  useEffect(() => {
    filtrarAutosPorMarca();
  }, [marcaFiltrada]);

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
        <div className="contenedorFiltros">
          <Form.Select
            className="inputBusquedaFiltros"
            as="select"
            value={precioFiltrado}
            onChange={(e) => setPrecioFiltrado(e.target.value)}
          >
            <option value="ordenarPorPrecio">Buscar por precio</option>
            <option value="ascendente">Menor a Mayor</option>
            <option value="descendente">Mayor a Menor</option>
          </Form.Select>

          <Form.Select
            className="inputBusquedaFiltros"
            as="select"
            value={añoFiltrado}
            onChange={(e) => setAñoFiltrado(e.target.value)}
          >
            <option value="">Buscar por año</option>
            {autos.map((auto) => (
              <option key={auto.id} value={auto.año}>
                {auto.año}
              </option>
            ))}
          </Form.Select>

          <Form.Select
            className="inputBusquedaFiltros"
            as="select"
            value={marcaFiltrada}
            onChange={(e) => setMarcaFiltrada(e.target.value)}
          >
            <option value="">Buscar por marca</option>
            {autos.map((auto) => (
              <option key={auto.id} value={auto.marca}>
                {auto.marca}
              </option>
            ))}
          </Form.Select>
        </div>
      </Form>
      <div className="galeriaGrilla" value={autoSeleccionado}>
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
                handleClick={() => enviarAutossAlCarro(auto)}
              />
            </Card.Body>
          </Card>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default TarjetaAutos;
