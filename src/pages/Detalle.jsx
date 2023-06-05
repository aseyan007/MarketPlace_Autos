import React, { useContext } from "react";
import { AutosContext } from "../components/Context/AutosContext";
import { useParams } from "react-router-dom";
import Boton from "../components/Boton";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function DetalleAuto() {
  const { autos, agregarAutoAlCarrito } = useContext(AutosContext);
  const params = useParams();
  const navigate = useNavigate();

  const obtenerAutoPorId = (id) =>
    autos.find((auto) => auto.id === parseInt(id));
  const auto = obtenerAutoPorId(params.id);

  const enviarAutosAlCarro = (auto) => {
    agregarAutoAlCarrito(auto);
    navigate("/carrito");
  };

  const volverALaGaleria = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="renderSeccionDetalle">
        {autos.length && (
          <section className="seccionDetalle">
            <div>
              <img className="imagenDetalle" src={auto.imagen} alt="..." />
            </div>
            <div className="datosDetalleAutos">
              <h1>
                {auto.marca} {auto.modelo}
              </h1>
              <br />

              <h3>{auto.kilometraje} Km</h3>
              <h3>$ {auto.precio}</h3>
              <h3>Año: {auto.año}</h3>
              <br />
              <div className="botonesDetalle">
                <Boton
                  contenido="Volver"
                  style={{ width: "8rem" }}
                  handleClick={() => volverALaGaleria(auto)}
                />

                <Boton
                  contenido="Añadir al 🛒"
                  style={{ width: "8rem" }}
                  handleClick={() => enviarAutosAlCarro(auto)}
                />
              </div>
            </div>
          </section>
        )}
      </div>
      <Footer />
    </>
  );
}

export default DetalleAuto;
