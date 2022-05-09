import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMissions } from '../Redux/Missions/Mission';
import Mission from '../components/Mission';

export default function Missions() {
  const dispatch = useDispatch();
  const Missions = useSelector((state) => state.Missions);
  useEffect(() => {
    dispatch(getMissions());
  }, []);

  return (
    <div>
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
              mission={mission}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}
