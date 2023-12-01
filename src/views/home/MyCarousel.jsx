import React from 'react';
import './Home.css'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../../assets/HOME/Textura.Imagen1.jpg'
import img2 from '../../assets/HOME/Textura.Imagen2.webp'
import img3 from '../../assets/HOME/Textura.Imagen3.jpg'
import img4 from '../../assets/HOME/Textura.Imagen4.png'
import img5 from '../../assets/HOME/Textura.Imagen5.jpg'
import img6 from '../../assets/HOME/Textura.Imagen6.png'


function MyCarousel () {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="homeCarousel"
                    src={img1}
                    alt="Primer slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="homeCarousel"
                    src={img2}
                    alt="Segundo slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="homeCarousel"
                    src={img3}
                    alt="Segundo slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="homeCarousel"
                    src={img4}
                    alt="Segundo slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="homeCarousel"
                    src={img5}
                    alt="Segundo slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="homeCarousel"
                    src={img6}
                    alt="Segundo slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default MyCarousel;
