import React from 'react';
import {
  Table, Row, Container, Col, Button,
} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { reserveMission } from '../Redux/Missions/Mission';
import { toggleReservedAction } from '../Redux/Rockets/Rocket';
import 'bootstrap/dist/css/bootstrap.min.css';

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

  const toggleReservation = (event) => {
    const reserved = event.target.getAttribute('data-reserved');
    const rocketId = event.target.getAttribute('data-id');
    dispatch(toggleReservedAction(rocketId, reserved));
  };

  const readMore = (link) => {
    window.open(link, '_blank');
  };

  return (
    <Container style={{ margin: '2vw 5vw' }}>
      <Row>
        <Col sm={6}>
          <h2>My Missions</h2>
          <Table className="profile-table" hover variant="light">
            <tbody>
              {reservedMissions.map((mission) => (
                <tr key={mission.mission_id}>
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
                      <button
                        className="read-more"
                        type="button"
                        label="Read more"
                        onClick={() => readMore(mission.wikipedia)}
                      >
                        Read More
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
                  <td>
                    {rocket.rocket_name}
                    <div>
                      <Button variant="outline-dark " className="reserved text-capitalize" id={rocket.id} data-id={rocket.id} data-reserved={0} onClick={toggleReservation}>cancel reservation</Button>
                      <button
                        className="read-more"
                        type="button"
                        label="Read more"
                        onClick={() => readMore(rocket.wikipedia)}
                      >
                        Read More
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
