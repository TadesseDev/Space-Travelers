import React from 'react';
import {
  Table, Row, Container, Col,
} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { reserveMission } from '../Redux/Missions/Mission';

export default function Profile() {
  const reservedRockets = useSelector((store) => store.Rockets.filter((rocket) => rocket.reserved));
  const reservedMissions = useSelector((state) => state.Missions
    .filter((mission) => mission.reserved));

  const dispatch = useDispatch();

  const reserve = (event) => {
    const reserve = event.target.getAttribute('data-reserved');
    const missionId = event.target.getAttribute('data-id');
    dispatch(reserveMission(missionId, reserve));
  };

  return (
    <Container style={{ margin: '2vw 5vw' }}>
      <Row>
        <Col sm={6}>
          <h2>My Missions</h2>
          <Table className="profile-table" hover variant="light">
            <tbody>
              {reservedMissions.map((mission) => (
                <tr key={mission.id}>
                  <td>
                    {mission.mission_name}
                    <div>
                      <button
                        className="leave"
                        type="button"
                        label="leave Mission"
                        id={mission.mission_id}
                        data-id={mission.mission_id}
                        data-reserved={0}
                        onClick={reserve}
                      >
                        Leave Mission
                      </button>
                    </div>
                  </td>
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
