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
        <h3 className="text-capitalize">{name}</h3>
        <p>{description}</p>
        {reserved ?
          (<Button variant="outline-dark " className="reserved text-capitalize" id={id} data-reserved={false} >cancel reservation</Button>) :
          (<Button className="not-reserved text-capitalize" id={id} data-reserved={true} >reserve rocket</Button>)}
      </Col>
    </Row>
  )
}