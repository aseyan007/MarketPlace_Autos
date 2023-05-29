import React from "react";
import { Container, Card, ListGroup, Button } from "react-bootstrap";
import { useContext } from "react";
import { UserContext } from "./Context/UsuarioContext";
import { AutosContext } from "./Context/AutosContext";
import { Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge";

function PerfilUsuarioCard() {
  const { user } = useContext(UserContext);
  const { autosFavoritos } = useContext(AutosContext);

  const favoritos = autosFavoritos.filter((auto) => auto.liked === true);
  console.log(favoritos);

  const elementosEnFavoritos = favoritos.length;

  return (
    <>
      <br />
      <Container>
        <Card className="ms-3" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={user.imagen} />
          <Card.Body>
            <Card.Title className="fs-1">
              {user.nombre} {user.apellido}
            </Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush fs-1 ">
            <ListGroup.Item>
              <Link
                className="text-decoration-none listaPerfilUsuario"
                to="/publicaciones"
              >
                <Button
                  variant="dark"
                  style={{ width: "10rem", height: "2rem" }}
                >
                  Publicaciones
                </Button>
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link
                className="text-decoration-none listaPerfilUsuario"
                to="/editarPerfil"
              >
                <Button
                  variant="dark"
                  style={{ width: "10rem", height: "2rem" }}
                >
                  Editar Perfil
                </Button>
              </Link>
            </ListGroup.Item>
            <Link
              className="text-decoration-none listaPerfilUsuario"
              to="/favoritos"
            >
              <Button variant="dark" style={{ width: "10rem", height: "2rem" }}>
                Favoritos
                <Badge bg="dark">{elementosEnFavoritos}</Badge>
              </Button>
            </Link>
          </ListGroup>
        </Card>
      </Container>
    </>
  );
}

export default PerfilUsuarioCard;
