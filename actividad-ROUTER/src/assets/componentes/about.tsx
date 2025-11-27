import React from 'react';
import '../../App.css'
const About: React.FC = () => {
  return (
    <div className='About-us'>
        <h2>Sobre Nosotros</h2>
        <p>
          Estamos construyendo una aplicación para gestionar usuarios y habilidades.
          Esta sección es estática, pero el resto de la app utiliza parámetros dinámicos.
        </p>
    </div>
  );
};

export default About;