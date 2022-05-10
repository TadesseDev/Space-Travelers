import React from 'react';
import { Row, Col, Button, Badge } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import { toggleReservedAction } from '../Redux/Rockets/Rocket';

export default function Rocket({ id, name, description, image, reserved }) {

  const dispatch = useDispatch();
  const toggleReservation = (event) => {
    const reserved = event.target.getAttribute('data-reserved');
    const rocketId = event.target.getAttribute('data-id');
    dispatch(toggleReservedAction(rocketId, reserved));
  }
  return (
    <Row className="rocket-container align-items-center mt-md-3">
      <Col sm={5} md={4} lg={3}>
        <img src={image} alt={name} width="100%" />
      </Col>
      <Col className="rocket-description">
        <h3 className="text-capitalize">{name}</h3>
        <p>{reserved && <Badge bg="success" className="-5">reserver</Badge>}{description}</p>
        {reserved ?
          ([<Button variant="outline-dark " className="reserved text-capitalize" id={id} data-id={id} data-reserved={0} onClick={toggleReservation} >cancel reservation</Button>]) :
          (<Button className="not-reserved text-capitalize" data-id={id} id={id} data-reserved={1} onClick={toggleReservation} >reserve rocket</Button>)}
      </Col>
    </Row>
  )
}