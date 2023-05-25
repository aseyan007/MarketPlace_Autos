import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";

function AccesosDirectos() {
  return (
    <>
      <Container className="accesosDirectos">
        <Link to="publicaciones">
          <Button variant="outline-dark">VENDE TU AUTO</Button>
        </Link>
        <Link to="galeriaAutos">
          <Button variant="outline-dark">BUSCA UN AUTO</Button>
        </Link>
      </Container>
    </>
  );
}

export default AccesosDirectos;
