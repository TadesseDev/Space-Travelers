import React from 'react'
import { Table, Row, Container, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux'
export default function Profile() {
  const reservedRockets = useSelector(store => store.Rockets.filter(rocket => rocket.reserved));
  console.log(reservedRockets);
  return (
    <Container>
      <Row>
        <Col sm={6} >
          <h2> My Rockets</h2>
          <Table hover variant="light">
            <tbody></tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  )
}
