import React from 'react';
import { Row, Col, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Rocket({ id, name, description, image, reserved }) {
  return (
    <Row className="rocket-container align-items-center mt-md-3">
      <Col sm={5} md={4} lg={3}>
        <img src={image} alt={name} width="100%" />
      </Col>
      <Col className="rocket-description">
        <h3>{name}</h3>
        <p>{description}</p>
        {reserved ?
          (<Button className="reserved" id={id}>reserved</Button>) :
          (<Button variant="outline-dark" className="not-reserved" id={id}>not reserved</Button>)}
      </Col>
    </Row>
  )
}