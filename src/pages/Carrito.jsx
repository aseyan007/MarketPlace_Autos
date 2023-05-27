import { useContext } from "react";
import { AutosContext } from "../components/Context/AutosContext";
import Footer from "../components/Footer";
import Boton from "../components/Boton";

function Carrito() {
  const { agregarAutoAlCarrito, carrito } = useContext(AutosContext);
  console.log(carrito);
  return (
    <>
    <section className="sectionCarrito">
      <div>
        
        <div>
          {carrito.map((item) => (
            <div className="carrito">
            <img src={item.imagen} alt="" style={{width: "10rem", height: "10rem"}}/>
<h1>{item.precio}</h1>
<div className="botonesCarrito">
<Boton  contenido="X"
                  style={{ width: "8rem" }}/>
<Boton  contenido="Contactar"
                  style={{ width: "8rem" }}/>
</div>
</div>
          ))}
        </div>
      </div>
      </section>
      <Footer />
    </>
  );
}

export default Carrito;
