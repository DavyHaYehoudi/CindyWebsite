import Carousel from 'react-bootstrap/Carousel';
import cascade from '../medias/cascade.jpg';
import chamane from '../medias/chamane.jpeg';
import cailloux from '../medias/cailloux1920.jpg';
// import insta from '../medias/instagram48.png'

function CarouselHome() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cascade}
          alt="cascade"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={chamane}
          alt="chamane"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cailloux}
          alt="cailloux"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHome;