import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";

function Categorias() {
  return (
    <>
      <Container className="categorias">
        <h2 className="display-1">CATEGORIAS</h2>
        <section className="seccionCategorias">
          <div>
            <Button className="botonAuto" variant="light"></Button>{" "}
            <p className="vehiculo">Autos</p>
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
