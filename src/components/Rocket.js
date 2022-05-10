import React from 'react';
import { Row, Col, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Rocket({ id, name, description, image, reserved }) {
  return (
    <Row className="rocket-container">
      <Col md={3} sm={4}>
        <img src={image} alt={name} width="100%" />
      </Col>
      <Col className="rocket-description">
        <h3>{name}</h3>
        <p>{description}</p>
        {reserved ?
          (<Button primary className="reserved" id={id}>reserved</Button>) :
          (<Button warning className="not-reserved" id={id}>not reserved</Button>)}
      </Col>
    </Row>
  )
}