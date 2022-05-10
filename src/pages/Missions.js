import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMissions } from '../Redux/Missions/Mission';
import Mission from '../components/Mission';
import './Missions.scss';

export default function Missions() {
  const dispatch = useDispatch();
  const Missions = useSelector((state) => state.Missions);
  useEffect(() => {
    if ( Missions.length <= 0)  {
      dispatch(getMissions());
    }
  }, []);

  return (
    <div data-testid="mission-test">
      <table>
        <thead>
          <tr>
            <th>Missions</th>
            <th>Description</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Missions.map((mission) => (
            <Mission
              key={mission.mission_id}
              id={mission.mission_id}
              reserved={mission.reserved}
              mission={mission}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}
