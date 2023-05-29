import React, { useState, useContext } from "react";
import { UserContext } from "../components/Context/UsuarioContext";
import { AutosContext } from "../components/Context/AutosContext";

function NuevoAuto () {

const {autos, eliminarAuto, crearNuevoAuto} = useContext(AutosContext);
const {user} = useContext(UserContext);

const [marca, setMarca] = useState("");
const [modelo, setModelo] = useState("");
const [precio, setPrecio] = useState("");
const [kilometraje, setKilometraje] = useState("");
const [año, setAño] = useState("");
const [liked, setLiked] = useState(false);
const [imagen, setImagen] = useState("https://i.scdn.co/image/ab67616d0000b2739d1b1ebce0952ba19702b422");

const handleClick = (e) => {
    e.preventDefault();

const nuevoAuto = {
// marca: marca, 
// modelos: modelo,
// precio: precio,
// kilometraje: kilometraje,
// año: año,
// liked: liked, 
// imagen:imagen,
// id: Date.now(),
// user: user.email,

marca, 
modelo,
precio,
kilometraje,
año,
liked, 
imagen,
id: Date.now(),
user: user.email

    }
    crearNuevoAuto(nuevoAuto)
}

    return (
<div>
      <h1>Bienvenido: {user.name}</h1>
      <form onSubmit={handleClick}>
        <input
          type="text"
          placeholder="marca"
          value={marca}
          onChange={(e) => setMarca(e.target.value)}
        />
        <input
          type="text"
          placeholder="modelo"
          value={modelo}
          onChange={(e) => setModelo(e.target.value)}
        />
        <input
          type="text"
          placeholder="precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />
        <input
          type="text"
          placeholder="kilometraje"
          value={kilometraje}
          onChange={(e) => setKilometraje(e.target.value)}
        />
          <input
          type="text"
          placeholder="año"
          value={año}
          onChange={(e) => setAño(e.target.value)}
        />
        
        <button type="submit">Agregar</button>
      </form>

      <div>
        {autos
          .filter((auto) => auto.user === user.email)
          .map((auto) => (
            <article key={auto.id}>
              <h2>{auto.marca} {auto.modelo}</h2>
              <button onClick={() => eliminarAuto(auto.id)}>
                Eliminar
              </button>
              {/* <Link to={`/update/${product.id}`}>Editar</Link> */}
            </article>
          ))}
      </div>
    </div>
    )
}

export default NuevoAuto;


