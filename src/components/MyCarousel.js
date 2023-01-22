import Carousel from 'react-bootstrap/Carousel';

import slide from './../img/slides/01.jpg'
import s from './styles/Carousel.module.scss'


const MyCarousel = ({slides}) => {
  

  return (
    <Carousel>

      {/* {props.map(slide => {
        // console.log(slide);
        // <Carousel.Item>
        //    <img
        //      className="d-block w-100"
        //      src={slide.slide}
        //      alt="First slide"
        //    />
        //    <Carousel.Caption className={s.caption}>
        //      <h3>{slide.title}</h3>
        //      <strong>{slide.strong}</strong>
        //      <p>{slide.text}</p>
        //    </Carousel.Caption>
        //  </Carousel.Item>
      })} */}
    
     

      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide02.slide}
          alt="Second slide"
        />

        <Carousel.Caption className={s.caption}>
          <h3>{slide02.title}</h3>
          <p>{slide02.text}</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide03.slide}
          alt="Third slide"
        />

        <Carousel.Caption className={s.caption}>
          <h3>{slide03.title}</h3>
          <p>{slide03.text}</p>
        </Carousel.Caption>
      </Carousel.Item> */}

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