import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/esm/Container';

function Carrusel() {
  return (
    <Carousel className='carrusel'>
      <Carousel.Item>
        <img
          className="d-block w-100 imagencarrusel1"
          src="https://mustielesabogados.es/wp-content/uploads/2021/11/1108-noticia.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>CONCESIONARIOS</h3>
          <p>Conoce nuestros concesionarios destacados.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item > 
        <img
          className="d-block w-100 imagencarrusel1"
          src="https://www.motociclismo.es/uploads/static/motociclismo/upload/images/gallery/5ec1708b0de694f0248dff69/5ec171b20ee694300f8e0c2c-los-concesionarios-de-motos-abren-todos-el-lunes-18-de-mayo.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>MOTOCICLETAS</h3>
          <p>Encontraras la ideal para ti.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100 imagencarrusel1"
          src="https://www.caracteristicas.pro/wp-content/uploads/2023/01/yates.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>NAVEGAR</h3>
          <p>
           Un sueño a tu alcance.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;