import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 

export const GaleriaCarrusel = () => {
  const andaluciaImages = [
    {
      id: 1,
      src: '/granada.jpg',
      alt: 'Alhambra, Granada',
      captionTitle: 'Granada',
      captionText: 'La majestuosa Alhambra bajo el sol.',
    },

    {
      id: 2,
      src: '/cordoba.png',
      alt: 'Mezquita de Córdoba',
      captionTitle: 'Córdoba',
      captionText: 'El histórico bosque de columnas de la Mezquita.',
    },
    {
      id: 3,
      src: '/sevilla.jpg',
      alt: 'Plaza de España, Sevilla',
      captionTitle: 'Sevilla',
      captionText: 'La icónica Plaza de España.',
    },
    {
      id: 4,
      src: '/almeria.jpg',
      alt: 'Desierto de Tabernas, Almería',
      captionTitle: 'Almería',
      captionText: 'Paisaje único del Desierto de Tabernas.',
    },
    {
      id: 5,
      src: '/malaga.jpg',
      alt: 'Vistas de Málaga',
      captionTitle: 'Málaga',
      captionText: 'Vistas desde el Castillo de Gibralfaro.',
    },  
    {
      id: 6,
      src: '/cadiz.jpg',
      alt: 'Playa de La Caleta, Cádiz',
      captionTitle: 'Cádiz',
      captionText: 'Atardecer en la playa de La Caleta.',
    },

];
  return (
    <Carousel fade className="rounded shadow-sm overflow-hidden">
      {andaluciaImages.map((img) => (
        <Carousel.Item key={img.id}>
          <img className="d-block w-100" src={img.src} alt={img.alt} />
          <Carousel.Caption className="d-none d-md-block bg-dark bg-opacity-50 rounded">
            <h5>{img.captionTitle}</h5>
            <p>{img.captionText}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};


