import { useDispatch } from 'react-redux';
import { reserveMission } from '../Redux/Missions/Mission';

const Mission = (prop) => {
  const { mission, id } = prop;
  const dispatch = useDispatch();

  const reserve = (event) => {
    const reserve = event.target.getAttribute('data-reserved');
    const missionId = event.target.getAttribute('data-id');
    dispatch(reserveMission(missionId, reserve));
  }

  return (
    <tr>
      <td className="mission-title">{mission.mission_name}</td>
      <td className="mission-paragraph">{mission.description}</td>
      <td className="member-mission">
          <button
              className="member"
              type="button"
              label="Member"
          >
            NOT A MEMBER
          </button>
      </td>
      <td className="join-mission">
          <button
            className="join"
            type="button"
            label="join Mission"
            id={id}
            data-id={id}
            data-reserved={0}
            onClick={reserve} 
          >
            Join Mission
          </button>
        </td>
    </tr>
  );
} 

export default Mission;