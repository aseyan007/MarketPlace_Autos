import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import React, { useContext } from "react";
import { AutosContext } from "./Context/AutosContext";
import { Link, useNavigate } from "react-router-dom";

function Categorias() {
  // const navigate = useNavigate();

  // const enviarASedan = () => {
  //   navigate("/sedan")
  // };

  // const enviarA4x4 = () => {
  //   navigate("/4x4")
  // }
  return (
    <>
      <Container className="categorias">
        <h2 className="display-1">CATEGORIAS</h2>
        <section className="seccionCategorias">
          <div>
            <Link to="/sedan">
              <Button className="botonAuto" variant="light"></Button>{" "}
              <p className="vehiculo">Sedan</p>
            </Link>
          </div>
          <div>
            <Link to="/pickup">
              <Button className="botonCamioneta" variant="light"></Button>{" "}
              <p className="vehiculo">Pick-up</p>
            </Link>
          </div>
          <div>
            <Link to="/4x4">
              <Button className="boton4x4" variant="light"></Button>{" "}
              <p className="vehiculo">4 X 4</p>
            </Link>
          </div>
          <div>
            <Link to="/suv">
              <Button className="botonSuv" variant="light"></Button>{" "}
              <p className="vehiculo">Suv</p>
            </Link>
          </div>
          <div>
            <Link to="/moto">
              <Button className="botonMoto" variant="light"></Button>{" "}
              <p className="vehiculo">Motos</p>
            </Link>
          </div>
        </section>
      </Container>
    </>
  );
}

export default Categorias;
