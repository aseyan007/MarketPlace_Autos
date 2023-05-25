import React, { useContext, useEffect } from "react";
import { AutosContext } from "../components/Context/AutosContext";
import { useParams } from "react-router-dom";
import Boton from "../components/boton";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function DetalleAuto() {
  const { autos, agregarAutoAlCarrito, carrito } = useContext(AutosContext);
  const params = useParams();
  const navigate = useNavigate();

  const obtenerAutoPorId = (id) =>
    autos.find((auto) => auto.id === parseInt(id));
  const auto = obtenerAutoPorId(params.id);

  const enviarAutosAlCarro = (auto) => {
    agregarAutoAlCarrito(auto);
    navigate("/carrito");
  };
  
  
  return (
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
            <Link className="me-3" to="/galeriaAutos">
              <Boton contenido="Volver" />
            </Link>
           <Link>
              <Boton handleClick={enviarAutosAlCarro} contenido="Enviar al 🛒" />
              </Link>
              </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default DetalleAuto;

{
  /* <section className="seccionDetalle">
<div className="card mb-3" >
  <div className="row g-0">
    <div className="col-md-4">
      <img
        src={auto.imagen}
        className="img-fluid rounded-start"
        alt="..."
      />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">
          {auto.marca} {auto.modelo}
        </h5>
        <p className="card-text">
          This is a wider card with supporting text below as a natural
          lead-in to additional content. This content is a little bit
          longer.
        </p>
        <p className="card-text">
          <small className="text-body-secondary">
            Last updated 3 mins ago
          </small>
        </p>
        <Link to="/galeriaAutos">
        <Boton contenido ="Volver"/>
        </Link>
      </div>
    </div>
  </div>
</div>
</section> */
}
