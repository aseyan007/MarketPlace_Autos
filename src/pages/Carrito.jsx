import { useContext } from "react";
import { AutosContext } from "../components/Context/AutosContext";
import Footer from "../components/Footer";
import Boton from "../components/Boton";

function Carrito() {
  const { carrito, setCarrito } = useContext(AutosContext);
  console.log(carrito);

  const eliminarAuto = (auto) => {
    const autoEliminado = carrito.filter((item) => item.id !== auto.id);
    setCarrito(autoEliminado);
  };

  return (
    <>
    <h1 className="mt-3 text-center">Comunicate con el vendedor. Haz click en contactar</h1>
      <section className="sectionCarrito">
        {/* <div> */}
          {/* <div> */}
            {carrito.map((item) => (
              <div className="carrito">
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
            ))}
          {/* </div> */}
        {/* </div> */}
      </section>
      <Footer />
    </>
  );
}

export default Carrito;
