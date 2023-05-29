import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import React, { useContext } from "react";
import { AutosContext } from "./Context/AutosContext";
import { Link, useNavigate } from "react-router-dom";

function Categorias() {
//   const { autos, autosFiltrados } = useContext(AutosContext);
// const navigate = useNavigate()

//   const handleClickCategorias = (categoria) => {
//     navigate("/galeriaAutos")
//     const autosFiltrados = autosFiltrados.filter((auto) => {
//       return auto.categoria === categoria })
//     ;
//     };

  return (
    <>
      <Container className="categorias">
        <h2 className="display-1">CATEGORIAS</h2>
        <section className="seccionCategorias">
          <div>
         <Link to="/sedan">
            <Button className="botonAuto" variant="light" ></Button>{" "}
            <p className="vehiculo">Sedan</p>
            </Link>
          </div>
          <div>
            <Button className="botonCamioneta" variant="light"></Button>{" "}
            <p className="vehiculo">Pick-up</p>
          </div>
          <div>
            <Button className="boton4x4" variant="light"></Button>{" "}
            <p className="vehiculo">4 X 4</p>
          </div>
          <div>
            <Button className="botonSuv" variant="light"></Button>{" "}
            <p className="vehiculo">Suv</p>
          </div>
          <div>
            <Button className="botonMoto" variant="light"></Button>{" "}
            <p className="vehiculo">Motos</p>
          </div>
        </section>
      </Container>
    </>
  );
}

export default Categorias;
