import { Context, useContext } from "react";
import { AutosContext } from "../components/Context/AutosContext";

function Carrito() {
  const { agregarAutoAlCarrito, carrito } = useContext(AutosContext);
  console.log(carrito)
  return (
    <>
    <div>
   
      <h1>soy carrito</h1>
      <div className="carrito">
        {carrito.map((item) =>{

            <h1>{item.precio}</h1>
        })}
        
      </div>

</div>
    </>
  );
}

export default Carrito;
