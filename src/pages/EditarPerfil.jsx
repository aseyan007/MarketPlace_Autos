// import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
// import Row from "react-bootstrap/Row";
// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/esm/Container";
// import PerfilUsuarioCard from "../components/PerfilUsuarioCard";
// import { useContext, useEffect, useState } from "react";
// import { UserContext } from "../components/Context/UsuarioContext";

// function EditarPerfil() {

//   const {user, actualizarUser} = useContext(UserContext);

//   const [nombre, setNombre] = useState("");
//   const [apellido, setApellido] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [direccion, setDireccion] = useState("");
//   const [direccion2, setDireccion2] = useState("");
//   const [ciudad, setCiudad] = useState("");
//   const [region, setRegion] = useState("");
//   const [codigozip, setCodigozip] = useState("");

//   useEffect (() => {
//     setNombre(user.nombre);
//     setApellido(user.apellido);
//     setEmail(user.email);
//     setPassword(user.password);
//     setDireccion(user.direccion);
//     setDireccion2(user.direccion2);
//     setCiudad(user.ciudad);
//     setRegion(user.region);
//     setCodigozip(user.codigozip);
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     actualizarUser({
//       nombre: nombre,
//       apellido: apellido,
//       email: email,
//       password: password,
//       direccion: direccion,
//       direccion2: direccion2,
//       ciudad: ciudad,
//       region: region,
//       codigozip: codigozip,
//       id: user.id,
//     })

//     Swal.fire('Datos actualizados correctamente')
//   }

//   return (
//     <Container fluid className="contenedorPerfil">
//     <Row>
//     <Col sm={3} className="border-end border-dark">
//   <PerfilUsuarioCard />
//   </Col>
//   <Col sm={7}>
// <section className="sectionPublicaciones mt-5">
// <Form className="formularioRegistro" onSubmit={handleSubmit}>
//         <Container className="editarPerfil">
//       <h2 className="text-center mb-5">Ingresa tus datos!</h2>
//       <Row>
//         <Col>
//           <Form.Control type="text" placeholder="Nombre" value={nombre} />
//         </Col>
//         <Col>
//           <Form.Control type="text" placeholder="Apellido" value={apellido}/>
//         </Col>
//       </Row>

//       <Row className="mb-3">
//         <Form.Group as={Col} controlId="formGridEmail">
//           <Form.Label></Form.Label>
//           <Form.Control type="email" placeholder="Email" value={email}/>
//         </Form.Group>

//         <Form.Group as={Col} controlId="formGridPassword">
//           <Form.Label></Form.Label>
//           <Form.Control type="password" placeholder="Contraseña" value={password}/>
//         </Form.Group>
//       </Row>

//       <Form.Group className="mb-3" controlId="formGridAddress1">

//         <Form.Control type="text" placeholder="Direccion" value={direccion}/>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formGridAddress2">

//         <Form.Control type="text" placeholder="Direccion 2" value={direccion2}/>
//       </Form.Group>

//       <Row className="mb-3">
//         <Form.Group as={Col} controlId="formGridCity">
//           <Form.Label>Ciudad</Form.Label>
//           <Form.Control type="text" value={ciudad}/>
//         </Form.Group>

//         <Form.Group as={Col} controlId="formGridCity2">
//           <Form.Label>Región</Form.Label>
//           <Form.Control type="text" value={region} />
//         </Form.Group>

//         <Form.Group as={Col} controlId="formGridZip">
//           <Form.Label>Codigo zip</Form.Label>
//           <Form.Control type="text" value={codigozip}/>
//         </Form.Group>
//       </Row>

//       <Button variant="dark" type="submit">
//         Modificar
//       </Button>
//       </Container>
//     </Form>
//   </section>
//   </Col>
//   </Row>

//   </Container>

//   );
// }

// export default EditarPerfil;

import React, { useContext, useEffect, useState } from "react";
import {Col, Form, Row, Button, Container} from "react-bootstrap";
import Swal from "sweetalert2";
import PerfilUsuarioCard from "../components/PerfilUsuarioCard";
import { UserContext } from "../components/Context/UsuarioContext";

function EditarPerfil() {
  const { user, actualizarUser } = useContext(UserContext);

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [direccion, setDireccion] = useState("");
  const [direccion2, setDireccion2] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [region, setRegion] = useState("");
  const [codigozip, setCodigozip] = useState("");






 

  const actualizarUsuario = () => {
    
    setNombre(user.nombre);
    setApellido(user.apellido);
    setEmail(user.email);
    setPassword(user.password);
    setDireccion(user.direccion);
    setDireccion2(user.direccion2);
    setCiudad(user.ciudad);
    setRegion(user.region);
    setCodigozip(user.codigozip);

    // Swal.fire("Datos actualizados correctamente");
  };





  useEffect(() => {
    actualizarUsuario()
    // setNombre(user.nombre);
    // setApellido(user.apellido);
    // setEmail(user.email);
    // setPassword(user.password);
    // setDireccion(user.direccion);
    // setDireccion2(user.direccion2);
    // setCiudad(user.ciudad);
    // setRegion(user.region);
    // setCodigozip(user.codigozip);
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();

    actualizarUser({
      nombre: nombre,
      apellido: apellido,
      email: email,
      password: password,
      direccion: direccion,
      direccion2: direccion2,
      ciudad: ciudad,
      region: region,
      codigozip: codigozip,
      id: user.id,
    });

    setUser(actualizarUser)

    Swal.fire("Datos actualizados correctamente");

  };

  return (
    <Container fluid className="contenedorPerfil">
      <Row>
        <Col sm={3} className="border-end border-dark">
          <PerfilUsuarioCard />
        </Col>
        <Col sm={7}>
          <section className="sectionPublicaciones mt-5">
            <Form className="formularioRegistro" onSubmit={handleSubmit}>
              <Container className="editarPerfil">
                <h2 className="text-center mb-5">Ingresa tus datos!</h2>
                <Row>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="Nombre"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="Apellido"
                      value={apellido}
                      onChange={(e) => setApellido(e.target.value)}
                    />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Contraseña"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label>Dirección</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Dirección"
                    value={direccion}
                    onChange={(e) => setDireccion(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                  <Form.Label>Dirección 2</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Dirección 2"
                    value={direccion2}
                    onChange={(e) => setDireccion2(e.target.value)}
                  />
                </Form.Group>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Ciudad</Form.Label>
                    <Form.Control
                      type="text"
                      value={ciudad}
                      onChange={(e) => setCiudad(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridCity2">
                    <Form.Label>Región</Form.Label>
                    <Form.Control
                      type="text"
                      value={region}
                      onChange={(e) => setRegion(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Código ZIP</Form.Label>
                    <Form.Control
                      type="text"
                      value={codigozip}
                      onChange={(e) => setCodigozip(e.target.value)}
                    />
                  </Form.Group>
                </Row>

                <Button variant="dark" type="submit">
                  Modificar
                </Button>
              </Container>
            </Form>
          </section>
        </Col>
      </Row>
    </Container>
  );
}

export default EditarPerfil;
