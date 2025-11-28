import React from 'react';
import { InfoCard } from './card';
import { Row, Col } from 'react-bootstrap';

export const Body = () => {
  return (
    <>
      <h2 className="h2-titulo">Sección de Cards</h2>
      <Row className="cartas">
        <Col md="3">
          <InfoCard
            title="Primera card importada de bootstrap"
            text="Esta card utiliza Bootstrap para su diseño y estilo."
            imageUrl="https://iescuravalera.es/wp-content/uploads/2025/11/25n.jpeg"
          />
        </Col>
        <Col md="3">
          <InfoCard
            imageUrl="https://iescuravalera.es/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-25-at-17.45.32.jpeg"
            text="Segunda card importada de bootstrap."
          />
        </Col>
        <Col md="3">
          <InfoCard
            imageUrl="https://iescuravalera.es/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-20-at-17.29.08.jpeg"
            text="Tercera card importada de bootstrap."
          />
        </Col>
      </Row>
    </>
  );
}