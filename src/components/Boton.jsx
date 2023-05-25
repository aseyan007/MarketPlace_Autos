import Button from "react-bootstrap/Button";
import Badge from 'react-bootstrap/Badge';

function Boton(props) {
  const contenido = props.contenido;
  const handleClick = props.handleClick;

  return (
    <>
      <Button onClick={handleClick} variant="dark" style={{ width: "7.5rem" }}>
        {contenido}
      </Button>
    </>
  );
}

export default Boton;

// import Badge from 'react-bootstrap/Badge';
// import Button from 'react-bootstrap/Button';

// function ButtonExample() {
//   return (
//     <Button variant="primary">
//       Profile <Badge bg="secondary">9</Badge>
//       <span className="visually-hidden">unread messages</span>
//     </Button>
//   );
// }

// export default ButtonExample;
