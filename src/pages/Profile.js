import React from 'react';
import {
  Table, Row, Container, Col,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default function Profile() {
  const reservedRockets = useSelector((store) => store.Rockets.filter((rocket) => rocket.reserved));
  const reservedMissions = useSelector((state) => state.Missions
    .filter((mission) => mission.reserved));

  return (
    <Container style={{ margin: '2vw 5vw' }}>
      <Row>
        <Col sm={6}>
          <h2>My Missions</h2>
          <Table className="profile-table" hover variant="light">
            <tbody>
              {reservedMissions.map((mission) => (
                <tr key={mission.id}>
                  <td>{mission.mission_name}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
        <Col sm={6}>
          <h2>My Rockets</h2>
          <Table className="profile-table" hover variant="light">
            <tbody>
              {reservedRockets.map((rocket) => (
                <tr key={rocket.id}>
                  <td>{rocket.rocket_name}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
