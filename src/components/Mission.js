import { useDispatch } from 'react-redux';
import { reserveMission } from '../Redux/Missions/Mission';

const Mission = (prop) => {
  const { mission, id, reserved } = prop;
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
      {reserved ?
           (<button
            className="active-member"
            type="button"
            label="Active Member"
          >
            Active Member
          </button>) :
          (<button
              className="member"
              type="button"
              label="Not a Member"
          >
            NOT A MEMBER
          </button>)}
      </td>
      <td className="join-mission">
        {reserved ?
          (<button
            className="leave"
            type="button"
            label="leave Mission"
            id={id}
            data-id={id}
            data-reserved={0}
            onClick={reserve} 
          >
            Leave Mission
          </button>) :
          (<button
            className="join"
            type="button"
            label="join Mission"
            id={id}
            data-id={id}
            data-reserved={1}
            onClick={reserve} 
          >
            Join Mission
          </button>)}
        </td>
    </tr>
  );
} 

export default Mission;