import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <Container>
        <Row>
          {}
          <Col md={6}>
            {}
          </Col>
          {}
          <Col md={6}>
            {}
            <p className='titulo'>Actividad rutas con react router</p>
            {}
            <p>@ Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;