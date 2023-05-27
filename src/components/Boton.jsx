import Button from "react-bootstrap/Button";

function Boton(props) {
  const contenido = props.contenido;
  const handleClick = props.handleClick;
  const style = props.style;

  return (
    <>
      <Button onClick={handleClick} variant="dark" style={style}>
        {contenido}
      </Button>
    </>
  );
}

export default Boton;
