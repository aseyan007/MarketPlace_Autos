import React, { useContext, useState } from "react";
import { AutosContext } from "../components/Context/AutosContext";
import Footer from "../components/Footer";
import Boton from "../components/Boton";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function Carrito() {
  const { carrito, setCarrito } = useContext(AutosContext);
  const [show, setShow] = useState(true);
  console.log(carrito);

  const eliminarAuto = (auto) => {
    const autoEliminado = carrito.filter((item) => item.id !== auto.id);
    setCarrito(autoEliminado);
  };

  return (
    <>
      <h1 className="mt-3 text-center">
        Comunícate con el vendedor. Haz clic en contactar
      </h1>
      <section className="sectionCarrito">
        {/* {auto ? ( */}
        {carrito.length > 0 ? (
          carrito.map((item) => (
            <div className="carrito" key={item.id}>
              <img
                src={item.imagen}
                alt=""
                style={{ width: "10rem", height: "10rem" }}
              />
              <h1>Precio: {item.precio}</h1>
              <div className="botonesCarrito">
                <Boton
                  contenido="X"
                  style={{ width: "8rem" }}
                  handleClick={() => eliminarAuto(item)}
                />
                <Boton contenido="Contactar" style={{ width: "8rem" }} />
              </div>
            </div>
          ))
        ) : (
          <Alert variant="" onClose={() => setShow(false)}>
            <Alert.Heading className="text-center display-1 mt-5">
              ☹
            </Alert.Heading>
            <p className="text-center display-2">
              No has agregado ningun auto a tu carro!
            </p>
          </Alert>
        )}
      </section>
      <Footer />
    </>
  );
}

export default Carrito;
