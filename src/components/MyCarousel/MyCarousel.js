import Carousel from 'react-bootstrap/Carousel';

import slide from './../../img/slides/01.jpg'
import s from './MyCarousel.module.css'

const MyCarousel = () => { 
  return ( 
    <Carousel> 
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide}
          alt="First slide"
        />
        <Carousel.Caption className={s.caption}>
          <h3>Title slide</h3>
          <p>test slide</p>
        </Carousel.Caption>
      </Carousel.Item> 
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide}
          alt="First slide"
        />
        <Carousel.Caption className={s.caption}>
          <h3>Title slide</h3>
          <p>test slide</p>
        </Carousel.Caption>
      </Carousel.Item> 
    </Carousel>
  );
}

export default MyCarousel;