// import { useDispatch } from 'react-redux';

const Mission = (prop) => {
  const { mission } = prop;
//   const dispatch = useDispatch();

  return (
    <tr>
      <td className="mission-title">{mission.mission_name}</td>
      <td className="mission-paragraph">{mission.description}</td>
      <td>
          <button
              className="member"
              type="button"
              label="Member"
          >
            NOT A MEMBER
          </button>
      </td>
      <td>
          <button
            className="join"
            type="button"
            label="join Mission"
          >
            Join Mission
          </button>
        </td>
    </tr>
  );
} 

export default Mission;